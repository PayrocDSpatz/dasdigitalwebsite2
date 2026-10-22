// Shared site facts: used by the header, footer, sitemap, structured data, and the service pages' links.
export const SITE_URL = "https://dasdigitalai.com";

export const CONTACT = {
  email: "info@dasdigitalai.com",
  phone: "+1-954-673-3041",
  phoneDisplay: "(954) 673-3041",
};

// Where DAS Digital is and who it serves. Use these everywhere (page text and structured data)
// so search engines and AI tools get one consistent answer. No street address is published.
export const LOCATION = {
  city: "West Palm Beach",
  region: "FL",
  regionName: "Florida",
  counties: ["Palm Beach County", "Broward County", "Miami-Dade County"],
  summary: "Based in West Palm Beach, serving Palm Beach, Broward and Miami-Dade counties.",
};

export const FOUNDED = "1989"; // as DAS Consulting Services; now DAS Digital

// Stable ids that tie the structured data on every page to one business and one founder.
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const FOUNDER_ID = `${SITE_URL}/about#david-spatz`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const AREA_SERVED = LOCATION.counties.map((name) => ({
  "@type": "AdministrativeArea",
  name: `${name}, ${LOCATION.regionName}`,
}));

// Link structured data back to the business defined in the root layout.
export const PROVIDER = { "@id": BUSINESS_ID };

export const breadcrumbs = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "DAS Digital", href: "/" }, ...items].map((x, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: x.name,
    item: `${SITE_URL}${x.href === "/" ? "" : x.href}`,
  })),
});

// The four core services, in menu order. `ready: false` means the page isn't built yet,
// so links go to the services section of the home page instead of a 404.
export const SERVICES = [
  { key: "website", label: "Website Design", href: "/website-design", ready: true },
  { key: "ai-receptionist", label: "AI Receptionists", href: "/ai-receptionist", ready: true },
  { key: "automation", label: "Business Automation", href: "/ai-automation-small-business", ready: true },
  { key: "consulting", label: "Technology Consulting", href: "/technology-consulting", ready: true },
];

export const serviceHref = (s) => (s.ready ? s.href : "/#services");

// Pages written for specific searches. Each is linked from the footer and from the other service pages.
export const SERVICE_PAGES = [
  { href: "/ai-automation-small-business", label: "AI automation for small business" },
  { href: "/merchant-services-sales-tools", label: "Sales tools for merchant services" },
  { href: "/custom-saas-development", label: "Custom SaaS development" },
  { href: "/automation-consultant-florida", label: "Automation consultant in Florida" },
];

// Trade pages under /automation/<slug>; content lives in app/automation/industries.js.
export const INDUSTRY_PAGES = [
  { href: "/automation/hvac-companies", short: "HVAC companies" },
  { href: "/automation/plumbers", short: "Plumbers" },
  { href: "/automation/electricians", short: "Electricians" },
  { href: "/automation/roofers", short: "Roofers" },
  { href: "/automation/landscapers", short: "Landscapers" },
  { href: "/automation/boutiques", short: "Boutiques" },
];

export const CASE_STUDIES = [
  { href: "/work/farritech", label: "FarriTech case study" },
  { href: "/work/field-service-platform", label: "Field service platform case study" },
];
