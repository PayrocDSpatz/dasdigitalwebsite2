import { PROVIDER, SITE_URL, breadcrumbs } from "../../_components/site";

const path = "/work/field-service-platform";
const description =
  "Field service platform case study: dispatch, invoicing, service plans and equipment tracking for HVAC, plumbing, lawn, pool and pest crews, by DAS Digital.";

export const metadata = {
  title: "Field Service Platform Case Study",
  description,
  alternates: { canonical: path },
  openGraph: {
    title: "Field Service Platform Case Study | DAS Digital",
    description,
    url: path,
    siteName: "DAS Digital",
    type: "article",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Field service platform case study",
    url: `${SITE_URL}${path}`,
    description,
    about: { "@type": "SoftwareApplication", name: "Field service platform", applicationCategory: "BusinessApplication" },
    creator: PROVIDER,
    publisher: PROVIDER,
  },
  breadcrumbs([{ name: "Field service platform case study", href: path }]),
];

// Next.js only reads metadata from a page or layout, and the page is a client
// component, so this layout carries it and the structured data.
export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
