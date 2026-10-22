import IndustryLanding from "../_components/IndustryLanding";

const path = "/technology-consulting";
const description =
  "Straight technology advice for South Florida small businesses: which software, phone and point-of-sale tools to keep, replace or connect, in plain English.";

export const metadata = {
  title: "Technology Consulting for Small Business in South Florida",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Technology Consulting for Small Business in South Florida | DAS Digital", description, url: path, type: "website" },
};

export default function Page() {
  return (
    <IndustryLanding
      path={path}
      kicker="Technology Consulting"
      title="Straight advice on the right tools for you"
      intro="DAS Digital helps small businesses in South Florida make sense of their technology. We look at what you use and what you pay for, and tell you in plain English what to keep, what to drop and what to connect."
      serviceName="Technology consulting for small business"
      serviceType="Technology consulting"
      showAreas
      problems={{
        title: "Sound like your business?",
        items: [
          "You pay for apps that don't talk to each other",
          "You're not sure which point-of-sale, phone or scheduling system fits",
          "Every salesperson says their product is the answer",
          "Nobody to call when something stops working",
          "Logins and accounts are spread across your staff",
          "You want to try AI but don't know where to start",
        ],
      }}
      jobs={{
        title: "How we help",
        items: [
          { title: "Tool check-up", desc: "We list what you use, what it costs and what it does, and point out what's doubled up or not worth the money." },
          { title: "Point of sale", desc: "We help you pick a point-of-sale system, set it up and connect it to the rest of your business." },
          { title: "Phones and calls", desc: "Call forwarding, after-hours answering and AI receptionists, so every caller gets an answer." },
          { title: "Connecting your tools", desc: "Your website, calendar, email and payments working together, so you enter things once." },
          { title: "AI, explained", desc: "Where AI can actually save you time, and where it isn't worth it yet, without the hype." },
          { title: "Someone to call", desc: "When something new comes up or stops working, you call us and get a straight answer." },
        ],
      }}
      example={[
        "You tell us what you use and what bugs you.",
        "We list each tool, what it costs and what it does.",
        "You get a plain-English plan: keep, drop, replace or connect.",
        "We set up the changes you choose and show your team how they work.",
        "When something new comes up, you call us.",
      ]}
      steps={[
        { title: "We talk", desc: "You tell us how your business runs and where technology gets in the way." },
        { title: "We recommend", desc: "A clear plan and price, in plain English, with the quick wins first." },
        { title: "We set it up", desc: "We make the changes you choose, test them with you and stay available when you need us." },
      ]}
      faqs={[
        { q: "Do I need to be good with technology?", a: "No. We do the setup and explain things in plain language. That's the whole point." },
        { q: "Can you help me choose a point-of-sale system?", a: "Yes. We help you compare options for your type of business, set it up and connect it to your other tools." },
        { q: "Will you push me to buy new software?", a: "No. We start with the tools you already pay for and only suggest something new if it clearly saves you time or money." },
        { q: "What does it cost?", a: "It depends on what you need. After a short conversation we give you a clear price before any work starts." },
      ]}
    />
  );
}
