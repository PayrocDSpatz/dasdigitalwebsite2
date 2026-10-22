import Image from "next/image";
import { Leaf, Scissors, Sprout, Sun, Trees } from "lucide-react";

// "Recent work" cards: real client sites as screenshots, plus one drawn sample design. Used on the home and website design pages.
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
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">Website</span>
                <span className="mt-1 block font-semibold text-slate-900">{w.title}</span>
                <span className="mt-1 block text-sm text-slate-600">{w.desc}</span>
              </figcaption>
            </figure>
          </li>
        ))}
        <li>
          <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
            <TopCutMock />
            <figcaption className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">Website &middot; Sample design</span>
              <span className="mt-1 block font-semibold text-slate-900">Top Cut Lawn and Landscaping</span>
              <span className="mt-1 block text-sm text-slate-600">
                A sample lawn care website. For illustration purposes only.
              </span>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  );
}

// A made-up lawn care company's home page, drawn in markup. Illustrative only.
function TopCutMock() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Nav */}
      <div className="flex items-center justify-between bg-white px-3 py-2 sm:px-4">
        <span className="flex items-center gap-1.5">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-green-700 text-white">
            <Leaf className="h-3 w-3" />
          </span>
          <span className="text-[11px] font-extrabold tracking-tight text-green-900 sm:text-xs">
            TOP CUT <span className="font-semibold text-green-700">Lawn &amp; Landscaping</span>
          </span>
        </span>
        <span className="hidden items-center gap-3 text-[9px] font-medium text-slate-600 sm:flex">
          <span>Services</span>
          <span>Gallery</span>
          <span className="rounded-full bg-green-700 px-2 py-0.5 font-semibold text-white">(555) 014-3300</span>
        </span>
      </div>

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-700">
        <svg viewBox="0 0 300 120" preserveAspectRatio="xMaxYMax slice" className="absolute inset-0 h-full w-full">
          <circle cx="250" cy="28" r="14" fill="#fde68a" opacity="0.9" />
          <path d="M120 120 Q190 60 300 78 L300 120 Z" fill="#15803d" />
          <path d="M150 120 Q220 82 300 92 L300 120 Z" fill="#16a34a" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path key={i} d={`M${170 + i * 22} 120 L${190 + i * 22} 95`} stroke="#22c55e" strokeWidth="7" opacity="0.55" />
          ))}
          <rect x="262" y="60" width="4" height="20" fill="#713f12" />
          <circle cx="264" cy="55" r="13" fill="#166534" />
          <circle cx="256" cy="61" r="9" fill="#15803d" />
          <circle cx="272" cy="61" r="9" fill="#15803d" />
          <g transform="translate(205 92)" className="hidden sm:inline">
            <rect x="0" y="0" width="22" height="9" rx="2" fill="#dc2626" />
            <circle cx="5" cy="11" r="3" fill="#1f2937" />
            <circle cx="18" cy="11" r="3" fill="#1f2937" />
            <path d="M20 0 L30 -12" stroke="#e5e7eb" strokeWidth="2" />
          </g>
        </svg>
        <div className="relative px-3 py-4 sm:px-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-lime-200">
            <Sun className="h-2.5 w-2.5" /> Now booking spring cleanups
          </span>
          <div className="mt-2 max-w-[58%] text-base font-bold leading-tight text-white sm:text-xl">
            A greener lawn without lifting a finger
          </div>
          <div className="mt-1 max-w-[55%] text-[10px] text-green-100 sm:text-[11px]">Weekly mowing, landscaping and cleanups.</div>
          <div className="mt-3 flex gap-2">
            <span className="rounded-md bg-lime-400 px-2.5 py-1 text-[10px] font-semibold text-green-950 shadow sm:text-[11px]">Get a free quote</span>
            <span className="rounded-md border border-white/60 px-2.5 py-1 text-[10px] font-semibold text-white sm:text-[11px]">Call now</span>
          </div>
        </div>
      </div>

      {/* Services strip */}
      <div className="grid grid-cols-3 gap-2 bg-green-50 px-3 py-2.5 sm:px-4">
        {[
          { icon: Scissors, label: "Mowing" },
          { icon: Trees, label: "Landscaping" },
          { icon: Sprout, label: "Cleanups" },
        ].map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center justify-center gap-1.5 rounded-lg bg-white px-2 py-1.5 text-[10px] font-semibold text-green-900 shadow-sm">
            <Icon className="h-3 w-3 text-green-700" /> {label}
          </span>
        ))}
      </div>
    </div>
  );
}
