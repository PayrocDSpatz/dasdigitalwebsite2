import { CASE_STUDIES, SERVICE_PAGES, SITE_URL } from "./_components/site";

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...SERVICE_PAGES.map((p) => ({ url: `${SITE_URL}${p.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })),
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...CASE_STUDIES.map((p) => ({ url: `${SITE_URL}${p.href}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })),
  ];
}
