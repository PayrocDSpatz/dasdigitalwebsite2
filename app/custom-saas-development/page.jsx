import ServiceLanding from "../_components/ServiceLanding";

const path = "/custom-saas-development";
const title = "Custom SaaS and vertical software development";
const description =
  "DAS Digital designs and builds custom SaaS and vertical software for small industries: scheduling, invoicing, payments, SMS, customer portals and mobile apps. See FarriTech and ServicePro.";

export const metadata = {
  title: "Custom SaaS & Vertical Software Development",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Custom SaaS & Vertical Software Development | DAS Digital", description, url: path, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      path={path}
      serviceName="Custom SaaS development"
      kicker="Vertical SaaS"
      title={title}
      intro={description}
      problems={{
        title: "When off-the-shelf software doesn't fit",
        items: [
          "Generic tools don't match how your industry actually works",
          "You're paying for five apps that don't share data",
          "Your customers want to book and pay online, and you can't offer it",
          "You have an idea for software in your niche but no development team",
          "An agency quoted months and a large budget before you can test anything",
          "Your field staff need something that works on a phone in a truck or a barn",
        ],
      }}
      offers={{
        title: "What we build",
        items: [
          { title: "Scheduling and booking", desc: "Online and QR-code booking, calendar sync, recurring visits and reminders." },
          { title: "Invoicing and payments", desc: "Digital invoices, card payments through Stripe and other processors, refunds and payment links." },
          { title: "SMS and email", desc: "Reminders, confirmations and receipts through Twilio and email providers." },
          { title: "Customer portals", desc: "Passwordless portals where customers see their history and pay their invoices." },
          { title: "Mobile-first apps", desc: "Installable web apps built for small screens, gloves and bad signal." },
          { title: "Reporting", desc: "The numbers an owner actually runs the business on: revenue, overdue invoices, retention." },
        ],
      }}
      proof={{
        title: "Two platforms we've built",
        intro: "Both were designed around a real trade's workflow and built with AI-assisted development, which is how we move from idea to working software quickly.",
        items: [
          { name: "FarriTech", href: "/work/farritech", desc: "SaaS for professional farriers: QR booking, invoicing, payments, SMS reminders, horse and visit scheduling, route planning, a customer portal and a mobile app." },
          { name: "ServicePro", href: "/work/servicepro", desc: "field service for HVAC, plumbing, lawn, pool and pest crews: dispatch, invoicing, service plans, equipment tracking and owner KPIs." },
        ],
      }}
      steps={[
        { title: "Define the workflow", desc: "We start from how the work is done today: who does what, where it breaks, and what the customer sees." },
        { title: "Build with AI, iterate fast", desc: "Working software early, then weekly improvements from real users instead of a long spec." },
        { title: "Integrate real infrastructure", desc: "Payments, SMS, email, calendars and hosting set up properly, then handed over with documentation." },
      ]}
      faqs={[
        { q: "How long does a first version take?", a: "It depends on scope. Smaller tools are usually 2 to 8 weeks. A full platform is built in stages, with something working you can show customers early." },
        { q: "Do you take payments inside the software?", a: "Yes. FarriTech takes card payments through Stripe, with pay links, refunds and a customer portal." },
        { q: "Who owns the code?", a: "You do. We hand over the code, the accounts and the documentation." },
        { q: "Can you build for an industry you haven't worked in?", a: "Yes. We learn the workflow first, the same way FarriTech started with how farriers schedule, invoice and get paid." },
      ]}
    />
  );
}
