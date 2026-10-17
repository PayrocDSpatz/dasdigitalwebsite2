"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";
import { SERVICES, serviceHref } from "./site";

// Site-wide header for the light design: wordmark, the four services, About, and the contact button.
// Below the lg breakpoint the links move into a menu opened by a button.
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {SERVICES.map((s) => (
            <a key={s.key} href={serviceHref(s)} className="rounded hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600">
              {s.label}
            </a>
          ))}
          <a href="/about" className="rounded hover:text-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600">
            About
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#lead" className="hidden rounded-lg bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:inline-flex">
            Let's Talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-600 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-slate-200 bg-white px-4 pb-4 sm:px-6 lg:hidden">
          <ul className="mx-auto max-w-6xl divide-y divide-slate-100">
            {SERVICES.map((s) => (
              <li key={s.key}>
                <a href={serviceHref(s)} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-800">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/about" onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-slate-800">
                About
              </a>
            </li>
          </ul>
          <a href="/#lead" onClick={() => setOpen(false)} className="mt-3 flex justify-center rounded-lg bg-purple-700 px-4 py-3 text-sm font-semibold text-white">
            Let's Talk
          </a>
        </nav>
      ) : null}
    </header>
  );
}
