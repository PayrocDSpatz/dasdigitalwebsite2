import ServiceLanding from "../_components/ServiceLanding";

const path = "/automation-consultant-florida";
const title = "Automation and AI consultant in Florida";
const description =
  "DAS Digital is a Florida automation and AI consultant for small and growing businesses: workflow automation, AI-assisted follow-up, dashboards and custom software. Call (954) 673-3041.";

export const metadata = {
  title: "Automation & AI Consultant in Florida",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Automation & AI Consultant in Florida | DAS Digital", description, url: path, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      path={path}
      serviceName="Automation and AI consulting"
      areaServed="Florida"
      kicker="Florida"
      title={title}
      intro={description}
      problems={{
        title: "What Florida businesses ask us to fix",
        items: [
          "Leads from the website or phone that never get followed up",
          "Scheduling and dispatch run from a whiteboard or a group text",
          "Invoices go out late and payments are chased by hand",
          "Reports pulled together from spreadsheets every week",
          "New businesses opening nearby that your sales team never hears about",
          "Staff spending hours on data entry instead of customers",
        ],
      }}
      offers={{
        title: "How we help",
        items: [
          { title: "Workflow automation", desc: "Smartsheet, Make.com and Zapier automations that capture, route, approve and notify without manual steps." },
          { title: "AI-assisted follow-up", desc: "Follow-ups drafted in your voice, with approval steps before anything reaches a customer." },
          { title: "Dashboards", desc: "KPIs that reconcile to your CRM, accounting and payment systems." },
          { title: "Florida lead generation", desc: "Tools like the Sunbiz Lead Filter and Restaurant Radar find newly filed Florida businesses by territory and send them to your CRM." },
          { title: "Custom software", desc: "Scheduling, invoicing, payments and customer portals when off-the-shelf software doesn't fit." },
          { title: "Training and handoff", desc: "Documentation and training so your team owns and runs everything we build." },
        ],
      }}
      proof={{
        title: "Built and tested on Florida businesses",
        intro: "Several of our tools were built for Florida sales teams, using Florida public business filings to find new businesses as they open.",
        items: [
          { name: "Sunbiz Lead Filter", desc: "filters Florida business filings by territory and industry signals, then exports rep-ready leads." },
          { name: "Restaurant Radar", desc: "finds new Florida restaurants from several sources, verifies and scores them, and moves qualified ones into Zoho CRM." },
          { name: "FarriTech", href: "/work/farritech", desc: "scheduling, invoicing and payments software for farriers." },
        ],
      }}
      steps={[
        { title: "Free automation plan", desc: "Tell us where the time goes. Within 72 hours you get a prioritized plan, with no long sales call." },
        { title: "Build and connect", desc: "We build the automations and connect the tools you already use, with testing and permissions." },
        { title: "Train and hand off", desc: "SOPs and training for your team, then improvements as you use it." },
      ]}
      faqs={[
        { q: "Do you only work with Florida businesses?", a: "No. We're based in Florida and work with businesses anywhere in the US. Most work is done remotely." },
        { q: "What does the free automation plan include?", a: "A prioritized list of what to automate first, the quick wins, and a 30/60/90-day build path, delivered within 72 hours." },
        { q: "Which tools do you work with?", a: "Smartsheet, Make.com, Zapier, Google Workspace, Microsoft 365, HubSpot, Salesforce, Zoho, QuickBooks and custom APIs." },
        { q: "How do we get started?", a: "Fill in the form on our home page or call (954) 673-3041." },
      ]}
    />
  );
}
