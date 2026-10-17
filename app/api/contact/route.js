// Receives the contact form and saves it to the owner's Google Sheet through an
// Apps Script web app (setup: LEADS_WEBHOOK_URL and LEADS_WEBHOOK_SECRET in Vercel).
// Answers ok only after the Sheet confirms the row was written.

const SERVICES = ["Website Design", "AI Receptionists", "Business Automation", "Technology Consulting", "Free website review", "Not sure yet"];
const LIMITS = { name: 120, business: 160, email: 200, phone: 40, service: 60, message: 4000, page: 200 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Bots fill the hidden "website" field; pretend success so they move on.
  if (body.website) return Response.json({ ok: true });

  const lead = {};
  for (const [key, max] of Object.entries(LIMITS)) {
    lead[key] = String(body[key] ?? "").trim().slice(0, max);
  }
  if (!lead.name || !EMAIL_RE.test(lead.email) || !lead.message) {
    return Response.json({ ok: false, error: "missing" }, { status: 400 });
  }
  if (!SERVICES.includes(lead.service)) lead.service = "Not sure yet";

  const url = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("Contact form: LEADS_WEBHOOK_URL or LEADS_WEBHOOK_SECRET is not set");
    return Response.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, secret }),
      redirect: "follow",
      cache: "no-store",
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error("Contact form: Sheet did not confirm the row", res.status, result?.error);
      return Response.json({ ok: false, error: "failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form: could not reach the Sheet", err);
    return Response.json({ ok: false, error: "failed" }, { status: 502 });
  }
}
