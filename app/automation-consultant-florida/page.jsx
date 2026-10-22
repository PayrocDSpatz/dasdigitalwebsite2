import ServiceLanding from "../_components/ServiceLanding";
import { CONTACT } from "../_components/site";

const path = "/automation-consultant-florida";
const title = "Automation and AI consultant in Florida";
const description =
  "DAS Digital is a Florida automation and AI consultant in West Palm Beach, helping South Florida businesses with AI receptionists, follow-ups and invoicing.";

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
      kicker="South Florida"
      title={title}
      intro={`DAS Digital is a Florida automation and AI consultant based in West Palm Beach. We help small businesses in Palm Beach, Broward and Miami-Dade counties answer every call, follow up on every lead and get paid faster, using the tools they already have. Call ${CONTACT.phoneDisplay}.`}
      showAreas
      problems={{
        title: "What South Florida businesses ask us to fix",
        items: [
          "Calls go to voicemail while you're on a job or with a customer",
          "Leads from the website or phone that never get followed up",
          "Scheduling run from a whiteboard or a group text",
          "Invoices go out late and payments are chased by hand",
          "Storm season and summer bring more calls than you can answer",
          "Staff spending hours on data entry instead of customers",
        ],
      }}
      offers={{
        title: "How we help",
        items: [
          { title: "AI receptionists", desc: "Every call answered, day or night, in English or Spanish. You get a text with the caller's details right away." },
          { title: "Automatic follow-ups", desc: "Reminders, \"just checking in\" messages and review requests go out on time without anyone remembering to send them." },
          { title: "Payments and invoices", desc: "Payment links right after the job, or tap-to-pay on your phone, so you chase fewer checks." },
          { title: "One list of leads", desc: "Calls, website forms and emails land in one place, so you can see who still needs an answer." },
          { title: "Websites", desc: "A clear, fast website that works on phones and makes it easy to call or book." },
          { title: "Straight advice", desc: "Which tools to keep, which to drop and what's worth paying for, explained in plain English." },
        ],
      }}
      proof={{
        title: "See what we set up",
        intro: "Every setup is built around how your business already works. Here are a few examples.",
        items: [
          { name: "AI receptionists", href: "/ai-receptionist", desc: "how an AI receptionist answers your calls and texts you the details." },
          { name: "Automation for HVAC companies", href: "/automation/hvac-companies", desc: "service calls, maintenance reminders and estimate follow-ups for AC companies." },
          { name: "Field service platform", href: "/work/field-service-platform", desc: "dispatch, invoicing and service plans for HVAC, plumbing, lawn, pool and pest crews." },
        ],
      }}
      steps={[
        { title: "We talk", desc: "You tell us where the time goes and which calls and follow-ups slip. We look at the tools you already use." },
        { title: "We set it up", desc: "We build it, connect it to your tools and test it with you before it goes live." },
        { title: "We stay in touch", desc: "If something needs changing later, you call us. You own everything we set up." },
      ]}
      faqs={[
        { q: "Where are you located?", a: "We're based in West Palm Beach and serve Palm Beach, Broward and Miami-Dade counties." },
        { q: "Do you only work with Florida businesses?", a: "Most of our clients are in South Florida. Much of the setup is done remotely, so we can also help businesses elsewhere in the US." },
        { q: "Can the AI receptionist answer in Spanish?", a: "Yes. We can set it up to answer callers in Spanish as well as English." },
        { q: "How do we get started?", a: `Fill in the form on this page or call ${CONTACT.phoneDisplay}.` },
      ]}
    />
  );
}
