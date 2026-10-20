import { CASE_STUDIES, INDUSTRY_PAGES, SERVICE_PAGES, SITE_URL } from "./_components/site";

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/ai-receptionist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...SERVICE_PAGES.map((p) => ({ url: `${SITE_URL}${p.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })),
    ...INDUSTRY_PAGES.map((p) => ({ url: `${SITE_URL}${p.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })),
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...CASE_STUDIES.map((p) => ({ url: `${SITE_URL}${p.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })),
  ];
}
