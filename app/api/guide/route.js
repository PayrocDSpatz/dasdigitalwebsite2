// Receives the free guide form. Saves the request to the same Google Sheet as the
// contact form, marked "Guide download", and answers with the guide's link.
// Emailing the guide is a separate step that stays off until GUIDE_EMAIL_ENABLED is "true".

import { saveToSheet } from "../_lib/sheet";
import { GUIDE } from "../../_components/guide";
import { SITE_URL } from "../../_components/site";

const LIMITS = { name: 120, email: 200, phone: 40, page: 200 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Bots fill the hidden "website" field; pretend success so they move on.
  if (body.website) return Response.json({ ok: true, file: GUIDE.file, emailed: false });

  const lead = {};
  for (const [key, max] of Object.entries(LIMITS)) {
    lead[key] = String(body[key] ?? "").trim().slice(0, max);
  }
  if (!lead.name || !EMAIL_RE.test(lead.email) || lead.phone.replace(/\D/g, "").length < 7) {
    return Response.json({ ok: false, error: "missing" }, { status: 400 });
  }

  const saved = await saveToSheet(
    { ...lead, business: "", service: "Guide download", message: `Downloaded the free guide: ${GUIDE.title}`, tips: body.tips === "yes" ? "Yes" : "" },
    "Guide form",
  );
  if (saved === "unavailable") return Response.json({ ok: false, error: "unavailable" }, { status: 503 });
  if (saved !== "ok") return Response.json({ ok: false, error: "failed" }, { status: 502 });

  const emailed = await emailGuide(lead);
  return Response.json({ ok: true, file: GUIDE.file, emailed });
}

// Asks the Apps Script to email the guide to the visitor. Off unless GUIDE_EMAIL_ENABLED
// is "true", which should only be set after the script has the "send-guide" handler and
// the email wording is approved. A failure here never blocks the download.
async function emailGuide(lead) {
  if (process.env.GUIDE_EMAIL_ENABLED !== "true") return false;
  const result = await saveToSheet(
    { action: "send-guide", name: lead.name, email: lead.email, guideTitle: GUIDE.title, guideUrl: `${SITE_URL}${GUIDE.file}` },
    "Guide email",
  );
  return result === "ok";
}
