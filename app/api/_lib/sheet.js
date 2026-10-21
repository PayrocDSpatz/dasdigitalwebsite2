// Sends a lead to the owner's Google Sheet through the Apps Script web app
// (setup: LEADS_WEBHOOK_URL and LEADS_WEBHOOK_SECRET in Vercel). Used by the
// contact form and the free guide form. Resolves to "ok", "unavailable" or "failed".

export async function saveToSheet(payload, label) {
  const url = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error(`${label}: LEADS_WEBHOOK_URL or LEADS_WEBHOOK_SECRET is not set`);
    return "unavailable";
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, secret }),
      redirect: "follow",
      cache: "no-store",
    });
    const result = await res.json().catch(() => null);
    if (!res.ok || !result?.ok) {
      console.error(`${label}: Sheet did not confirm the row`, res.status, result?.error);
      return "failed";
    }
    return "ok";
  } catch (err) {
    console.error(`${label}: could not reach the Sheet`, err);
    return "failed";
  }
}
