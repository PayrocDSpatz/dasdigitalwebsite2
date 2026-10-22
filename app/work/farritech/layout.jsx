import { PROVIDER, SITE_URL, breadcrumbs } from "../../_components/site";

const path = "/work/farritech";
const description =
  "FarriTech case study: booking, invoicing, card payments, text reminders and a phone app for professional farriers, designed and built by DAS Digital.";

export const metadata = {
  title: "FarriTech Case Study",
  description,
  alternates: { canonical: path },
  openGraph: {
    title: "FarriTech Case Study | DAS Digital",
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
    name: "FarriTech case study",
    url: `${SITE_URL}${path}`,
    description,
    about: { "@type": "SoftwareApplication", name: "FarriTech", applicationCategory: "BusinessApplication", url: "https://www.farritech.com" },
    creator: PROVIDER,
    publisher: PROVIDER,
  },
  breadcrumbs([{ name: "FarriTech case study", href: path }]),
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
