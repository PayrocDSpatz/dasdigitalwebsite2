import IndustryLanding from "../_components/IndustryLanding";

const path = "/ai-receptionist";
const description =
  "AI receptionists for South Florida small businesses: answer every call 24/7 in English or Spanish, flag urgent calls and text you the details right away.";

export const metadata = {
  title: "AI Receptionist for Small Business",
  description,
  alternates: { canonical: path },
  openGraph: { title: "AI Receptionist for Small Business | DAS Digital", description, url: path, type: "website" },
};

export default function Page() {
  return (
    <IndustryLanding
      path={path}
      kicker="AI Receptionists"
      title="Never miss a call again"
      intro="When you can't pick up, your AI receptionist answers, takes down the details and texts you right away. Day or night, on the job or with a customer, every caller gets an answer and every lead gets to you."
      serviceName="AI receptionist for small business"
      serviceType="AI receptionist"
      showAreas
      problems={{
        title: "What a missed call really costs",
        items: [
          "Most callers who reach voicemail don't leave a message; they call the next business",
          "Calls come in while you're on a job, driving or helping a customer",
          "After-hours and weekend calls wait until Monday",
          "Voicemails with half a phone number and no address",
          "Hiring a full-time receptionist costs more than most small businesses can justify",
          "The same questions every day: hours, service area, \"do you do this?\"",
        ],
      }}
      jobs={{
        title: "What your AI receptionist does",
        items: [
          { title: "Answers every call", desc: "Picks up when you can't, any time of day, with a greeting in your business's name." },
          { title: "Takes the details", desc: "Gets the caller's name, number, address and what they need, the way you'd ask it." },
          { title: "Flags urgent calls", desc: "Emergencies like no cooling, a leak or storm damage are marked urgent so you see them first." },
          { title: "Texts you right away", desc: "You get a text with a clear summary of every call, so you can call back in seconds." },
          { title: "Answers common questions", desc: "Hours, service area and the services you offer, answered the way you tell us to." },
          { title: "Adds the lead to your list", desc: "Every call lands in one list with your website and email leads, so nothing gets lost." },
        ],
      }}
      example={[
        "A customer calls at 7:42 PM while you're finishing a job.",
        "Your AI receptionist answers in your business's name.",
        "It takes their name, number and the problem, and marks it urgent.",
        "You get a text with the summary and call them back.",
        "The caller gets a text confirming you received their call.",
      ]}
      faqs={[
        { q: "Will callers know it's an AI?", a: "It sounds natural and friendly, and we can set it up to say it's an assistant for your business. Most callers just want to be helped quickly." },
        { q: "Can I still answer calls myself?", a: "Yes. You choose when it picks up: after a few rings, after hours, or all the time." },
        { q: "Do I need a new phone number?", a: "Usually not. We can forward your existing number to the AI receptionist when you don't answer." },
        { q: "Can it answer calls in Spanish?", a: "Yes. We can set it up to greet callers and take their details in Spanish as well as English." },
        { q: "What does it cost?", a: "It depends on your call volume and what you want it to do. After a short conversation we give you a clear price before any work starts." },
      ]}
    />
  );
}
