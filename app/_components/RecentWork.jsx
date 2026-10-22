import Image from "next/image";

// "Recent work" cards: client and sample sites as screenshots. Used on the home and website design pages.
const WEBSITES = [
  {
    title: "Palm Beach Farrier Supply",
    desc: "A farrier supply store in Wellington, Florida.",
    src: "/work/palm-beach-farrier-supply.jpg",
    alt: "Home page of the Palm Beach Farrier Supply website: the headline \u201cEverything for the farrier, just down the road from the show grounds\u201d beside a photo of a farrier leading a horse at sunrise",
  },
  {
    title: "Merchant Sales Academy",
    desc: "A sales training site for merchant services reps.",
    src: "/work/merchant-sales-academy.jpg",
    alt: "Home page of the Merchant Sales Academy website: the headline \u201cStop avoiding the call\u201d beside an illustration of a sales rep on a headset",
  },
  {
    title: "FarriTech",
    kind: "Landing page",
    desc: "A landing page for an all-in-one farrier scheduling and invoicing app.",
    src: "/work/farritech-landing-page.jpg",
    alt: "FarriTech landing page: the headline \u201cFarrier Software That Helps You Run Your Business Like a Pro\u201d on a dark blue background with Get Started Free and See How It Works buttons",
  },
  {
    title: "Premier HVAC",
    kind: "Website \u00b7 Sample design",
    desc: "A sample heating and cooling company website. For illustration purposes only.",
    src: "/work/premier-hvac-sample.jpg",
    alt: "Sample HVAC company home page: the headline \u201cComfort you can count on\u201d beside a smiling technician and a branded service van, with a red Click to Call Now button",
  },
];

export default function RecentWork({ className = "" }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 ${className}`}>
      <h2 className="font-semibold">Recent work</h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {WEBSITES.map((w) => (
          <li key={w.title}>
            <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="relative aspect-[2/1] border-b border-slate-200">
                <Image src={w.src} alt={w.alt} fill sizes="(min-width: 768px) 536px, 100vw" className="object-cover object-left-top" />
              </div>
              <figcaption className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">{w.kind || "Website"}</span>
                <span className="mt-1 block font-semibold text-slate-900">{w.title}</span>
                <span className="mt-1 block text-sm text-slate-600">{w.desc}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
