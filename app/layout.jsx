import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { AREA_SERVED, BUSINESS_ID, CONTACT, FOUNDED, FOUNDER_ID, LOCATION, SERVICES, SITE_URL, WEBSITE_ID } from "./_components/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://dasdigitalai.com"),
  title: {
    default: "DAS Digital | AI Receptionists & Digital Consulting Services, South Florida",
    template: "%s | DAS Digital",
  },
  description:
    "Websites, AI receptionists and business automation for small businesses. Based in West Palm Beach, serving Palm Beach, Broward and Miami-Dade.",
  // No site-wide canonical or og:url: each page sets its own, so pages that don't (like the 404) never point at the home page.
  openGraph: {
    title: "DAS Digital | Smarter Technology. Simpler Business.",
    description:
      "Websites, AI receptionists, business automation and technology consulting for small businesses in South Florida.",
    siteName: "DAS Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAS Digital | Smarter Technology. Simpler Business.",
    description:
      "Websites, AI receptionists, business automation and technology consulting for small businesses in South Florida.",
  },
  robots: { index: true, follow: true },
};

// Google Analytics 4: set NEXT_PUBLIC_GA_ID (G-…) in Vercel's environment variables.
// Without it no tag is added.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// The one business, founder and website that every page's structured data points to by @id.
// Add profile links (LinkedIn, Google Business Profile, …) to SAME_AS as they're confirmed.
const SAME_AS = [];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": BUSINESS_ID,
      name: "DAS Digital",
      alternateName: "DAS Consulting Services",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/opengraph-image`,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      description:
        "DAS Digital helps small businesses with website design, AI receptionists, business automation and technology consulting. Based in West Palm Beach, Florida, serving Palm Beach, Broward and Miami-Dade counties. Founded in 1989 as DAS Consulting Services.",
      slogan: "Smarter Technology. Simpler Business.",
      foundingDate: FOUNDED,
      founder: { "@id": FOUNDER_ID },
      address: {
        "@type": "PostalAddress",
        addressLocality: LOCATION.city,
        addressRegion: LOCATION.region,
        addressCountry: "US",
      },
      areaServed: AREA_SERVED,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: CONTACT.phone,
        email: CONTACT.email,
        availableLanguage: ["English"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.label, url: `${SITE_URL}${s.href}` },
        })),
      },
      knowsAbout: ["Website design", "AI receptionists", "Business automation", "Technology consulting", "Point of sale systems"],
      ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "David Spatz",
      jobTitle: "Founder",
      url: `${SITE_URL}/about`,
      image: `${SITE_URL}/about/david-spatz-headshot.jpg`,
      worksFor: { "@id": BUSINESS_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "DAS Digital",
      url: SITE_URL,
      publisher: { "@id": BUSINESS_ID },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-purple-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
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
