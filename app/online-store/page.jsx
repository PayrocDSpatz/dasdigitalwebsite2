import { ArrowRight, Check } from "lucide-react";
import IndustryLanding from "../_components/IndustryLanding";

const path = "/online-store";
const description =
  "Online store setup for small businesses in Palm Beach, Broward and Miami-Dade: sell your products online, take card payments and manage orders from your phone.";

export const metadata = {
  title: "Online Store Setup for Small Business in South Florida",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Online Store Setup for Small Business in South Florida | DAS Digital", description, url: path, type: "website" },
};

// What's in the Online Store Starter Package. Keep in sync with what we actually deliver.
const PACKAGE = [
  "A store designed to match your brand, built for phones first",
  "Up to 25 products added for you, with photos, prices and descriptions",
  "Card, Apple Pay and Google Pay checkout",
  "Shipping, local pickup and sales tax set up",
  "Order alerts by text or email, plus automatic receipts for customers",
  "Set up to be found on Google, with each product on its own page",
  "A walkthrough so you can add products and manage orders yourself",
  "30 days of help after launch",
];

function StarterPackage() {
  return (
    <section id="package" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-purple-700 to-fuchsia-700 px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-200">The package</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Online Store Starter Package</h2>
            <p className="mt-4 max-w-md text-lg text-purple-100">
              Everything you need to start selling online, set up for you. One clear price agreed before any work starts, and you own the store.
            </p>
            <a
              href="#lead"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-purple-800 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ask about the package <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <ul className="grid gap-3 rounded-2xl bg-white p-6 text-slate-800 shadow-xl sm:p-8">
            {PACKAGE.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-purple-700" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <IndustryLanding
      path={path}
      kicker="Online Stores"
      title="Sell your products online"
      intro="DAS Digital sets up online stores for small businesses in South Florida. Customers can browse and buy from their phone any time, you get paid by card, and every order shows up on your phone right away."
      serviceName="Online store setup for small business"
      serviceType="E-commerce website design"
      parent={{ name: "Website Design", href: "/website-design" }}
      showAreas
      afterHero={<StarterPackage />}
      problems={{
        title: "Signs it's time to sell online",
        items: [
          "Customers ask if they can order from you online",
          "You only make sales when the shop is open",
          "Orders come in by text, phone and direct messages, and some get lost",
          "You sell on social media but have no easy way to take payment",
          "You're paying high fees to a marketplace for every sale",
          "You'd like to sell to customers outside your area",
        ],
      }}
      jobs={{
        title: "What your online store includes",
        items: [
          { title: "Built for phones first", desc: "Most shoppers buy on a phone. Big photos, simple menus and a checkout that takes a minute." },
          { title: "Easy checkout", desc: "Customers pay by card, Apple Pay or Google Pay. The money goes straight to your account." },
          { title: "Shipping or pickup", desc: "Ship anywhere, offer local pickup or delivery, and charge the right sales tax automatically." },
          { title: "Orders on your phone", desc: "Get a text or email for every order. Customers get a receipt and updates without you lifting a finger." },
          { title: "Found on Google", desc: "Each product gets its own page with the details Google and AI search tools look for." },
          { title: "Easy to update", desc: "We show you how to add products, change prices and mark items sold out yourself, in plain English." },
        ],
      }}
      example={[
        "A customer finds your product on Google or your social media page.",
        "They tap through to your store on their phone and add it to the cart.",
        "They pay by card or Apple Pay in under a minute.",
        "You get a text with the order, and they get a receipt by email.",
        "You ship it or set it aside for pickup, and they get an update automatically.",
      ]}
      steps={[
        { title: "We talk", desc: "You tell us what you sell, how you ship and who buys from you. We suggest the simplest setup that fits." },
        { title: "We build your store", desc: "We design the store, add your products, set up payments and shipping, and test real orders with you before launch." },
        { title: "We stay in touch", desc: "We walk you through running the store and help for 30 days after launch. You own the store and everything we set up." },
      ]}
      faqs={[
        { q: "What can I sell?", a: "Physical products, gift cards, services you book and pay for ahead of time, or digital downloads. If you're not sure, ask us." },
        { q: "Can you add a store to my current website?", a: "Often, yes. We can add a shop to the site you have or build a new site with the store built in. We'll tell you which makes more sense." },
        { q: "How do I get paid?", a: "Customers pay by card, Apple Pay or Google Pay, and the money goes to your bank account, usually within a few business days. Standard card processing fees apply." },
        { q: "Can I run the store myself after it's set up?", a: "Yes. We show you how to add products, change prices and handle orders. If you'd rather not, we can help with updates too." },
        { q: "Do I own the store?", a: "Yes. You own the store, your products, your customer list and your domain." },
        { q: "What does it cost?", a: "It depends on how many products you have and what the store needs to do. After a short conversation we give you a clear price for the package before any work starts." },
      ]}
    />
  );
}
