// Gives the "Talk to Riley" demo its Retell public key at request time, so the key can be
// set or changed in Vercel without the page needing it at build time. Only the public key
// (safe in browsers, limited to our domains in Retell) is ever returned here.

export const dynamic = "force-dynamic";

const DEFAULT_AGENT_ID = "agent_af7f0cbcafb66bb97e196fd8db";

export function GET() {
  const publicKey = (process.env.NEXT_PUBLIC_RETELL_PUBLIC_KEY || process.env.RETELL_PUBLIC_KEY || "").trim();
  const agentId = (process.env.NEXT_PUBLIC_RETELL_AGENT_ID || DEFAULT_AGENT_ID).trim();
  return Response.json({ publicKey: publicKey || null, agentId }, { headers: { "Cache-Control": "no-store" } });
}
