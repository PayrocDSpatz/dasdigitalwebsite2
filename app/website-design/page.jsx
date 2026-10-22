import IndustryLanding from "../_components/IndustryLanding";
import RecentWork from "../_components/RecentWork";

const path = "/website-design";
const description =
  "Small business website design in Palm Beach, Broward and Miami-Dade: fast, phone-friendly websites that make it easy to call, book and find you on Google.";

export const metadata = {
  title: "Website Design for Small Business in South Florida",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Website Design for Small Business in South Florida | DAS Digital", description, url: path, type: "website" },
};

export default function Page() {
  return (
    <IndustryLanding
      path={path}
      kicker="Website Design"
      title="Websites that bring in customers"
      intro="DAS Digital designs websites for small businesses in South Florida. Your site loads fast, works on every phone, shows up when people nearby search for what you do, and makes it easy for them to call or book."
      serviceName="Small business website design"
      serviceType="Website design"
      showAreas
      afterHero={
        <section className="pt-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <RecentWork />
          </div>
        </section>
      }
      problems={{
        title: "Signs your website is costing you customers",
        items: [
          "It looks dated, or it's hard to use on a phone",
          "Customers can't find your phone number or a way to book",
          "You don't show up when people nearby search for what you do",
          "You can't tell which calls and leads came from the website",
          "Changing your hours or prices means waiting on someone",
          "You're not sure if your site is accessible to people with disabilities",
        ],
      }}
      jobs={{
        title: "What your new website includes",
        items: [
          { title: "Built for phones first", desc: "Most of your visitors are on a phone. Big buttons, easy-to-read text and pages that load fast." },
          { title: "Easy to call or book", desc: "Your phone number at the top, tap-to-call buttons and a short form or booking link on every page." },
          { title: "Found on Google", desc: "Clear page titles, your service area and the basics Google looks for, set up from day one." },
          { title: "Ready for AI search", desc: "Plain facts about your business that tools like ChatGPT and Google's AI answers can read and repeat correctly." },
          { title: "Accessible", desc: "Built to the WCAG 2.1 AA accessibility guidelines, so everyone can use it." },
          { title: "Every lead tracked", desc: "Form messages go straight to your email and your lead list, so nothing slips through." },
        ],
      }}
      example={[
        "Someone nearby searches for what you do on their phone.",
        "Your site loads fast and shows your phone number at the top.",
        "They tap to call, or fill in a short form.",
        "You get the lead by text or email right away, and it's added to your list.",
        "If you miss the call, your AI receptionist picks up.",
      ]}
      steps={[
        { title: "We talk", desc: "You tell us about your business and your customers. If you already have a site, we start with a free website review." },
        { title: "We design and build", desc: "We write the pages with you in plain language, build the site and test it on phones and computers before it goes live." },
        { title: "We stay in touch", desc: "Need a change later? You call us. You own your website and everything we set up." },
      ]}
      faqs={[
        { q: "Can you fix my current website instead of starting over?", a: "Often, yes. We start with a free review of 10 areas, from speed and mobile to Google and AI search, and tell you what to fix first." },
        { q: "Will my website show up on Google?", a: "We set up everything Google needs to understand your business and service area, and help you with your Google Business Profile. Nobody can promise a top spot, but we make sure nothing is holding you back." },
        { q: "Do I own the website?", a: "Yes. You own the website, the domain and everything we set up." },
        { q: "Can you set up an online store?", a: "Yes. See our Online Store Starter Package at dasdigitalai.com/online-store: a store built for phones, card checkout, shipping or pickup, and order alerts, all set up for you." },
        { q: "What does it cost?", a: "It depends on how many pages you need and what the site should do. After a short conversation we give you a clear price before any work starts." },
      ]}
    />
  );
}
