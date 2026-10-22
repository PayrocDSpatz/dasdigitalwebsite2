// Every crawler may read the whole site. The search and AI search crawlers are also named,
// so it's clear they're welcome.
const NAMED_CRAWLERS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Claude-SearchBot",
  "Claude-User",
  "Applebot",
];

export default function robots() {
  return {
    rules: [
      { userAgent: NAMED_CRAWLERS, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://dasdigitalai.com/sitemap.xml",
  };
}
