import ServiceLanding from "../_components/ServiceLanding";

const path = "/merchant-services-sales-tools";
const title = "Sales and operations tools for merchant services teams";
const description =
  "Custom sales tools for merchant services teams: lead generation, quoting, POS configuration, CRM lead review, route sheets and rep training.";

export const metadata = {
  title: "Sales Tools for Merchant Services Teams",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Sales Tools for Merchant Services Teams | DAS Digital", description, url: path, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      path={path}
      serviceName="Sales and operations tools for merchant services"
      kicker="Payments + merchant services"
      title={title}
      intro="Custom sales tools for merchant services and payments teams: lead generation, quoting and proposals, POS configuration, CRM lead review, route sheets and rep training. Built by a 20-year payments operator."
      problems={{
        title: "Where merchant services teams lose time",
        items: [
          "Reps prospect from stale lists while new businesses open every week",
          "Quotes for hardware, SaaS and processing take too long and vary by rep",
          "Two reps work the same lead and nobody knows who owns it",
          "Field reps plan their day by hand instead of by route",
          "New reps avoid the phone because nobody trained the first call",
          "Support tickets pile up with no view of which merchants keep calling",
        ],
      }}
      offers={{
        title: "Tools we've built for payments teams",
        items: [
          { title: "Lead generation", desc: "Restaurant Radar and the Sunbiz Lead Filter find new businesses from public filings and other sources, score them, and export rep-ready leads by territory." },
          { title: "Quoting and proposals", desc: "A bilingual POS Sales Portal and a Proposal Generator turn hardware, SaaS and processing economics into a consistent, rep-friendly proposal." },
          { title: "POS configuration", desc: "A guided POS Configuration Wizard with built-in pricing logic and a spreadsheet export for ordering." },
          { title: "CRM lead review", desc: "Zoho Lead Review: a permission-aware queue that blocks duplicate leads, keeps ownership rules and pushes approved leads into Zoho." },
          { title: "Routes and field work", desc: "Zoho Route Sheet turns CRM exports into geo-ordered daily routes with Google Maps directions." },
          { title: "Rep training", desc: "Merchant Sales Academy and a Sales Enablement Academy: cold-call practice, objection handling, quizzes, AI coaching and manager visibility." },
        ],
      }}
      proof={{
        title: "From someone who has done the job",
        intro: "David Spatz spent more than 20 years in merchant services: leading operations, payment implementations, and portfolio migrations of 10,000+ merchants. Every tool here started as a problem he saw a sales or operations team fight every day.",
        items: [
          { name: "Merchant Sales Academy", desc: "cold-call training that moves reps from call reluctance and opening lines to handling objections and booking the appointment." },
          { name: "Support Ticket Report", desc: "turns help-desk exports into workload, urgency, repeat-merchant and issue-type insights." },
          { name: "FarriTech", href: "/work/farritech", desc: "a vertical SaaS with built-in payment acceptance, showing the same payments know-how in a finished product." },
        ],
      }}
      steps={[
        { title: "Find the friction", desc: "We sit with your reps, managers and operations staff to find where deals and hours are lost." },
        { title: "Build the tool", desc: "A focused tool for that one job, connected to the CRM and spreadsheets your team already uses." },
        { title: "Roll it out", desc: "Training, documentation and adjustments once reps are using it in the field." },
      ]}
      faqs={[
        { q: "Do you work with ISOs and agent offices?", a: "Yes. The tools above were built for merchant-services sales and operations teams, from a single office to a larger sales organization." },
        { q: "Which CRMs do you connect to?", a: "Zoho CRM is where most of these tools started. We also work with HubSpot, Salesforce, spreadsheets and custom APIs." },
        { q: "Can a tool be bilingual?", a: "Yes. The POS Sales Portal was built bilingual so reps can quote in the merchant's language." },
        { q: "Do we own the tool?", a: "Yes. You own what we build, with documentation so your team can run it." },
      ]}
    />
  );
}
