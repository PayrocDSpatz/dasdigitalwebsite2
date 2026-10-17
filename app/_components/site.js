// Shared site facts: used by the header, footer, sitemap, structured data, and the service pages' links.
export const SITE_URL = "https://dasdigitalai.com";

export const CONTACT = {
  email: "info@dasdigitalai.com",
  phone: "+1-954-673-3041",
  phoneDisplay: "(954) 673-3041",
};

// The four core services, in menu order. `ready: false` means the page isn't built yet,
// so links go to the services section of the home page instead of a 404.
export const SERVICES = [
  { key: "website", label: "Website Design", href: "/website-design", ready: false },
  { key: "ai-receptionist", label: "AI Receptionists", href: "/ai-receptionist", ready: false },
  { key: "automation", label: "Business Automation", href: "/ai-automation-small-business", ready: true },
  { key: "consulting", label: "Technology Consulting", href: "/technology-consulting", ready: false },
];

export const serviceHref = (s) => (s.ready ? s.href : "/#services");

// Pages written for specific searches. Each is linked from the footer and from the other service pages.
export const SERVICE_PAGES = [
  { href: "/ai-automation-small-business", label: "AI automation for small business" },
  { href: "/merchant-services-sales-tools", label: "Sales tools for merchant services" },
  { href: "/custom-saas-development", label: "Custom SaaS development" },
  { href: "/automation-consultant-florida", label: "Automation consultant in Florida" },
];

export const CASE_STUDIES = [
  { href: "/work/farritech", label: "FarriTech case study" },
  { href: "/work/servicepro", label: "Field service platform case study" },
];
