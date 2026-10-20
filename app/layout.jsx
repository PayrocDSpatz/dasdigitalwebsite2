import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { CONTACT, SITE_URL } from "./_components/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://dasdigitalai.com"),
  title: {
    default: "DAS Digital | Digital Consulting Services for Small Business",
    template: "%s | DAS Digital",
  },
  description:
    "DAS Digital provides practical digital consulting services for small businesses: professional websites, AI phone answering and automated follow-ups. Based in South Florida.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DAS Digital | Smarter Technology. Simpler Business.",
    description:
      "Websites, AI-powered customer communications, and business automation for small businesses.",
    url: "https://dasdigitalai.com",
    siteName: "DAS Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAS Digital | Smarter Technology. Simpler Business.",
    description:
      "Websites, AI-powered customer communications, and business automation for small businesses.",
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
    "Digital consulting services for small businesses: website design, AI receptionists and customer communications, business automation, and technology consulting.",
  founder: { "@type": "Person", name: "David Spatz" },
  areaServed: ["Florida", "United States"],
  knowsAbout: ["Website design", "Local SEO", "AI receptionists", "Business automation", "CRM integration", "Payment processing and POS", "Technology consulting"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-purple-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
          Skip to content
        </a>
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
