export const metadata = {
  title: "ServicePro Case Study",
  description:
    "ServicePro: a field service platform for HVAC, plumbing, lawn, pool and pest crews, with dispatch, invoicing, service plans, equipment tracking and owner KPIs. Built by DAS Digital.",
  alternates: { canonical: "/work/servicepro" },
  openGraph: {
    title: "ServicePro Case Study | DAS Digital",
    description:
      "Field service platform for the trades: dispatch, invoicing, service plans and equipment tracking for HVAC, plumbing, lawn, pool and pest crews.",
    url: "https://dasdigitalai.com/work/servicepro",
    siteName: "DAS Digital",
    type: "article",
  },
};

// Next.js only reads metadata from a page or layout, and the page is a client
// component, so this layout carries it.
export default function Layout({ children }) {
  return children;
}
