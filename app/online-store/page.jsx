import { ArrowRight, Check } from "lucide-react";
import IndustryLanding from "../_components/IndustryLanding";
import RecentWork from "../_components/RecentWork";

const path = "/online-store";
const description =
  "Online store setup for small businesses in Palm Beach, Broward and Miami-Dade: sell your products online and on Google and Facebook, take card payments and manage orders from your phone.";

export const metadata = {
  title: "Online Store Setup for Small Business in South Florida",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Online Store Setup for Small Business in South Florida | DAS Digital", description, url: path, type: "website" },
};

const PACKAGE_PRICE = "$995";
const PACKAGE_DISCLAIMER =
  "One-time setup price. Does not include monthly hosting or store plan fees, domain name fees, or any other recurring fees charged by other companies.";

const SAMPLES = [
  {
    title: "Saddle & Grace",
    kind: "Online store \u00b7 Sample design",
    desc: "A sample equestrian clothing and gear store. For illustration purposes only.",
    src: "/work/saddle-and-grace-store-sample.jpg",
    width: 1024,
    height: 1536,
    alt: "Sample online store home page for an equestrian boutique: the headline \u201cFor a Life in the Saddle and Beyond\u201d beside a rider and her horse, with shop categories and a best sellers row with prices",
  },
];

// What's in the Online Store Starter Package. Keep in sync with what we actually deliver.
const PACKAGE = [
  "A store designed to match your brand, built for phones first",
  "Up to 50 products added for you, with photos, prices and descriptions",
  "Integrated card payments and secure checkout, set up by us, with Apple Pay and Google Pay",
  "Shipping, local pickup and sales tax set up",
  "Order alerts by text or email, plus automatic receipts for customers",
  "Your products listed for sale on Google and Facebook",
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
            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-bold tracking-tight">{PACKAGE_PRICE}</span>
              <span className="text-purple-200">package price</span>
            </p>
            <p className="mt-4 max-w-md text-lg text-purple-100">
              Everything you need to start selling online, set up for you. You own the store.
            </p>
            <p className="mt-4 max-w-md text-sm text-purple-200">
              {PACKAGE_DISCLAIMER}
            </p>
            <a
              href="#lead"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-purple-800 hover:bg-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
      intro="DAS Digital sets up online stores for small businesses in South Florida. Customers can find and buy your products any time, on your website, on Google or on Facebook. You get paid by card, and every order shows up on your phone right away."
      serviceName="Online store setup for small business"
      serviceType="E-commerce website design"
      parent={{ name: "Website Design", href: "/website-design" }}
      showAreas
      afterHero={
        <>
          <StarterPackage />
          <section className="pb-4">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <RecentWork title="Sample online store" items={SAMPLES} />
            </div>
          </section>
        </>
      }
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
          { title: "Secure checkout, built in", desc: "We set up integrated card payments for you, so there's no separate payment company to sign up with. Customers pay by card, Apple Pay or Google Pay." },
          { title: "Shipping or pickup", desc: "Ship anywhere, offer local pickup or delivery, and charge the right sales tax automatically." },
          { title: "Orders on your phone", desc: "Get a text or email for every order. Customers get a receipt and updates without you lifting a finger." },
          { title: "Sell on Google and Facebook", desc: "Your products show up in Google Shopping and your Facebook shop, so people can find them where they already look. Orders all come back to one place." },
          { title: "Easy to update", desc: "We show you how to add products, change prices and mark items sold out yourself, in plain English." },
        ],
      }}
      example={[
        "A customer sees your product on Google Shopping or your Facebook shop.",
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
        { q: "How do I get paid?", a: "We set up integrated card payments and a secure checkout for you as part of the package, so you don't need to sign up with a separate payment company. Customers pay by card, Apple Pay or Google Pay, and the money goes to your bank account. We go over your card processing rates with you up front." },
        { q: "Can I sell on Google and Facebook too?", a: "Yes. The package lists your products on Google Shopping and in a Facebook shop, connected to your store, so your products and prices stay the same everywhere and every order comes back to you." },
        { q: "Can I run the store myself after it's set up?", a: "Yes. We show you how to add products, change prices and handle orders. If you'd rather not, we can help with updates too." },
        { q: "Do I own the store?", a: "Yes. You own the store, your products, your customer list and your domain." },
        { q: "What does it cost?", a: "The Online Store Starter Package is a one-time $995. That does not include monthly hosting or store plan fees, domain name fees or other recurring fees charged by other companies. If you need more than the package covers, like a large product catalog or custom features, we give you a clear price before any work starts." },
      ]}
    />
  );
}
