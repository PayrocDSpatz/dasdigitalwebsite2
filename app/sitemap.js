import { CASE_STUDIES, INDUSTRY_PAGES, SERVICES, SERVICE_PAGES, SITE_URL } from "./_components/site";

// When each page's content last changed. Update the date when you change a page's text,
// so search engines can trust lastmod (a date that changes on every deploy gets ignored).
const UPDATED = {
  "/": "2026-10-22",
  "/website-design": "2026-10-22",
  "/ai-receptionist": "2026-10-22",
  "/ai-automation-small-business": "2026-10-22",
  "/technology-consulting": "2026-10-22",
  "/automation-consultant-florida": "2026-10-22",
  "/merchant-services-sales-tools": "2026-10-22",
  "/custom-saas-development": "2026-10-22",
  "/automation": "2026-10-22",
  "/about": "2026-10-22",
  "/free-guide": "2026-10-22",
  "/work/farritech": "2026-10-22",
  "/work/field-service-platform": "2026-10-22",
  "/accessibility": "2026-10-17",
  "/privacy": "2026-10-17",
};
const INDUSTRIES_UPDATED = "2026-10-22";

const entry = (href, changeFrequency, priority) => ({
  url: `${SITE_URL}${href}`,
  lastModified: UPDATED[href] ?? INDUSTRIES_UPDATED,
  changeFrequency,
  priority,
});

export default function sitemap() {
  const core = SERVICES.filter((s) => s.ready).map((s) => s.href);
  const landing = SERVICE_PAGES.map((p) => p.href).filter((href) => !core.includes(href));
  return [
    entry("/", "weekly", 1),
    ...core.map((href) => entry(href, "monthly", 0.9)),
    ...landing.map((href) => entry(href, "monthly", 0.8)),
    entry("/automation", "monthly", 0.7),
    ...INDUSTRY_PAGES.map((p) => entry(p.href, "monthly", 0.8)),
    entry("/about", "yearly", 0.6),
    entry("/free-guide", "yearly", 0.5),
    ...CASE_STUDIES.map((p) => entry(p.href, "monthly", 0.7)),
    entry("/accessibility", "yearly", 0.3),
    entry("/privacy", "yearly", 0.3),
  ];
}
