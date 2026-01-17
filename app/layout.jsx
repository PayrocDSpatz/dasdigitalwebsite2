import "./globals.css";

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
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
