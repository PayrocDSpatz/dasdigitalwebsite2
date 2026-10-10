import Script from "next/script";
import "./globals.css";
import { CONTACT, SITE_URL } from "./_components/site";

export const metadata = {
  metadataBase: new URL("https://dasdigitalai.com"),
  title: {
    default: "DAS Digital | Automation + AI Systems",
    template: "%s | DAS Digital",
  },
  description:
    "DAS Digital builds automation + AI systems that save time, cut costs, and create predictable growth. Smartsheet, Make.com, Zapier, dashboards, and AI follow-up.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DAS Digital | Automation + AI Systems",
    description:
      "Done-for-you automation + AI systems: workflows, dashboards, and follow-up that turns into revenue.",
    url: "https://dasdigitalai.com",
    siteName: "DAS Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAS Digital | Automation + AI Systems",
    description:
      "Done-for-you automation + AI systems: workflows, dashboards, and follow-up.",
  },
  robots: { index: true, follow: true },
};

// Google Analytics 4: set NEXT_PUBLIC_GA_ID (G-…) in Vercel's environment variables.
// Without it no tag is added.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DAS Digital",
  alternateName: "DAS Consulting Services",
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  description:
    "Automation, AI and custom software for small businesses, payments teams and vertical industries.",
  founder: { "@type": "Person", name: "David Spatz" },
  areaServed: ["Florida", "United States"],
  knowsAbout: ["Workflow automation", "AI automation", "Merchant services", "Payments", "Vertical SaaS", "Smartsheet", "Make.com", "Zapier", "Zoho CRM"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {children}
        {GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
