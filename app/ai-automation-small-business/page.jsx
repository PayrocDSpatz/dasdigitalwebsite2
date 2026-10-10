import ServiceLanding from "../_components/ServiceLanding";

const path = "/ai-automation-small-business";
const title = "AI automation for small business";
const description =
  "DAS Digital builds AI automation for small businesses: workflow automation, AI-assisted follow-up with human checks, and dashboards that match your numbers. Smartsheet, Make.com, Zapier, HubSpot and QuickBooks.";

export const metadata = {
  title: "AI Automation for Small Business",
  description,
  alternates: { canonical: path },
  openGraph: { title: "AI Automation for Small Business | DAS Digital", description, url: path, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      path={path}
      serviceName="AI automation for small business"
      kicker="AI + automation for small business"
      title="AI automation for small businesses that are tired of busywork"
      intro={description}
      problems={{
        title: "Sound familiar?",
        items: [
          "Leads come in and don't get a reply for days",
          "The same data gets typed into three different tools",
          "Approvals and handoffs wait on someone's inbox",
          "Reports take hours and still don't match the bank or the CRM",
          "The way things get done lives in one person's head",
          "You'd like to use AI but don't want it sending the wrong thing to a customer",
        ],
      }}
      offers={{
        title: "What we automate",
        items: [
          { title: "Workflow automation", desc: "Smartsheet with Make.com or Zapier scenarios that capture requests, check the data, route approvals, update your systems and notify the right people." },
          { title: "AI-assisted follow-up", desc: "Lead and customer follow-ups drafted by AI in your voice, with approvals, guardrails and an audit trail before anything goes out." },
          { title: "Dashboards you can trust", desc: "KPIs that reconcile to the source systems, so the numbers in the meeting match the numbers in the books." },
          { title: "Tools that talk to each other", desc: "Google Workspace, Microsoft 365, HubSpot, Salesforce, QuickBooks and custom APIs, connected so data moves without copy and paste." },
          { title: "Documentation and handoff", desc: "SOPs, training and the playbook for every automation, so your team runs it without depending on us." },
          { title: "Human in the loop", desc: "Redaction, role-based access and approval steps wherever AI touches customer or financial data." },
        ],
      }}
      proof={{
        title: "Built by someone who has run operations",
        intro: "DAS Digital is led by David Spatz, who spent more than 20 years running merchant-services operations, portfolio migrations of 10,000+ merchants, and cross-functional teams before building software full time.",
        items: [
          { name: "Zoho Lead Review", desc: "a shared review queue that stops duplicate leads, keeps ownership rules, and pushes approved leads straight into Zoho CRM." },
          { name: "Zoho Route Sheet", desc: "turns CRM exports into geo-ordered, printable daily routes with Google Maps directions." },
          { name: "Support Ticket Report", desc: "turns raw help-desk exports into workload, urgency, repeat-customer and issue-type insights." },
          { name: "FarriTech", href: "/work/farritech", desc: "a full SaaS platform with booking, invoicing, payments and SMS reminders, built for farriers." },
        ],
      }}
      steps={[
        { title: "Audit and roadmap", desc: "We map your workflows, data and bottlenecks, then hand you a prioritized plan with quick wins and a 30/60/90-day build path." },
        { title: "Build and integrate", desc: "We build the automations, dashboards and AI-assisted messages with permissions, guardrails and testing." },
        { title: "Handoff and improve", desc: "Documentation, SOPs and training, then improvements as you use it. You own everything; no lock-in." },
      ]}
      faqs={[
        { q: "How fast can a small business see results?", a: "Most teams see quick wins in days, such as routing, notifications and data checks. Larger builds across several systems usually take 2 to 8 weeks depending on scope." },
        { q: "Which tools do you work with?", a: "Smartsheet and Make.com are core tools. We also work with Zapier, Google Workspace, Microsoft 365, HubSpot, Salesforce, QuickBooks and custom APIs." },
        { q: "Can we use AI without sending sensitive data everywhere?", a: "Yes. We add approvals, redaction, role-based controls and human-in-the-loop steps, and recommend the safest setup for sensitive data." },
        { q: "Will we own what you build?", a: "Yes. You own the automations, sheets, documents, prompts and SOPs. Everything is designed for handoff." },
      ]}
    />
  );
}
