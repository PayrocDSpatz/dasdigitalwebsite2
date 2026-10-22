"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// "Recent work" cards: client and sample sites as screenshots. Used on the home and website design pages.
// Clicking a card opens the full page image in a dialog.
const WEBSITES = [
  {
    title: "Radiant Med Spa",
    kind: "Website \u00b7 Sample design",
    desc: "A sample med spa website. For illustration purposes only.",
    src: "/work/radiant-med-spa-sample.jpg",
    width: 762,
    height: 1024,
    alt: "Sample med spa home page: the headline \u201cNatural Results, Real Confidence\u201d in soft rose and cream beside a portrait of a smiling woman, with a Click to Call Now button",
  },
  {
    title: "Bright Smiles Dental Care",
    kind: "Website \u00b7 Sample design",
    desc: "A sample family dental office website. For illustration purposes only.",
    src: "/work/bright-smiles-dental-sample.jpg",
    width: 763,
    height: 1024,
    alt: "Sample dental office home page: the headline \u201cExpert Dental Care for the Whole Family\u201d in navy and blue beside a smiling family, with a Click to Call Now button",
  },
  {
    title: "Palm Beach Farrier Supply",
    desc: "A farrier supply store in Wellington, Florida.",
    src: "/work/palm-beach-farrier-supply.jpg",
    width: 1896,
    height: 705,
    alt: "Home page of the Palm Beach Farrier Supply website: the headline \u201cEverything for the farrier, just down the road from the show grounds\u201d beside a photo of a farrier leading a horse at sunrise",
  },
  {
    title: "Merchant Sales Academy",
    desc: "A sales training site for merchant services reps.",
    src: "/work/merchant-sales-academy.jpg",
    width: 1340,
    height: 635,
    alt: "Home page of the Merchant Sales Academy website: the headline \u201cStop avoiding the call\u201d beside an illustration of a sales rep on a headset",
  },
  {
    title: "FarriTech",
    kind: "Landing page",
    desc: "A landing page for an all-in-one farrier scheduling and invoicing app.",
    src: "/work/farritech-landing-page.jpg",
    width: 1337,
    height: 633,
    alt: "FarriTech landing page: the headline \u201cFarrier Software That Helps You Run Your Business Like a Pro\u201d on a dark blue background with Get Started Free and See How It Works buttons",
  },
  {
    title: "Premier HVAC",
    kind: "Website \u00b7 Sample design",
    desc: "A sample heating and cooling company website. For illustration purposes only.",
    src: "/work/premier-hvac-sample.jpg",
    width: 1024,
    height: 1536,
    alt: "Sample HVAC company home page: the headline \u201cComfort you can count on\u201d beside a smiling technician and a branded service van, with a red Click to Call Now button",
  },
];

export default function RecentWork({ className = "" }) {
  const [open, setOpen] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <div className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 ${className}`}>
      <h2 className="font-semibold">Recent work</h2>
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {WEBSITES.map((w) => (
          <li key={w.title}>
            <button
              type="button"
              onClick={() => setOpen(w)}
              aria-label={`View the full ${w.title} page`}
              className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:border-purple-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              <div className="relative aspect-[2/1] w-full border-b border-slate-200">
                <Image src={w.src} alt={w.alt} fill sizes="(min-width: 768px) 536px, 100vw" className="object-cover object-left-top" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-purple-700">{w.kind || "Website"}</span>
                <span className="mt-1 block font-semibold text-slate-900">{w.title}</span>
                <span className="mt-1 block text-sm text-slate-600">{w.desc}</span>
                <span className="mt-2 block text-sm font-semibold text-purple-700 group-hover:text-purple-900">View full page</span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        aria-label={open ? `${open.title}, full page` : undefined}
        className="max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-slate-900/70"
      >
        {open ? (
          <div className="flex max-h-[90vh] flex-col">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-3">
              <span className="font-semibold text-slate-900">{open.title}</span>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="overflow-auto">
              {/* Sized to fit the whole page in the window, so nothing is cut off. */}
              <Image src={open.src} alt={open.alt} width={open.width} height={open.height} sizes="(min-width: 1024px) 1024px, 100vw" className="mx-auto block h-auto max-h-[calc(90vh-4rem)] w-auto max-w-full" />
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
