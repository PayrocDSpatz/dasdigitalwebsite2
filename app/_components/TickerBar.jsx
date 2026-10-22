"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { CONTACT } from "./site";

// Scrolling message bar fixed to the bottom of every page. It pauses on hover and with the
// pause button (WCAG 2.2.2), and stands still for visitors who ask for reduced motion.
const ITEMS = [
  { text: "New: Online stores from $995", href: "/online-store" },
  { text: "Talk to Riley, our AI receptionist: (561) 220-9234", href: "/ai-receptionist#try-riley" },
  { text: "Free website review", href: "/#review" },
  { text: "Websites that bring in customers", href: "/website-design" },
  { text: "AI receptionists that answer every call, 24/7", href: "/ai-receptionist" },
  { text: `Call us: ${CONTACT.phoneDisplay}`, href: `tel:${CONTACT.phone}` },
  { text: "Serving Palm Beach, Broward and Miami-Dade", href: "/about" },
];

export default function TickerBar() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="ticker fixed inset-x-0 bottom-0 z-40 flex h-10 items-center overflow-hidden bg-gradient-to-r from-purple-800 via-purple-700 to-fuchsia-700 text-sm font-medium text-white shadow-[0_-2px_8px_rgba(15,23,42,0.15)]"
      data-paused={paused}
      role="region"
      aria-label="Announcements"
    >
      <div className="min-w-0 flex-1 overflow-hidden">
        <ul className="ticker-track flex w-max">
          {[0, 1].map((copy) =>
            ITEMS.map((item) => (
              <li key={`${copy}-${item.text}`} aria-hidden={copy === 1 ? "true" : undefined} className="flex shrink-0 items-center">
                <a
                  href={item.href}
                  tabIndex={copy === 1 ? -1 : undefined}
                  className="whitespace-nowrap px-6 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {item.text}
                </a>
                <span className="text-fuchsia-200" aria-hidden="true">&#9679;</span>
              </li>
            ))
          )}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Play announcements" : "Pause announcements"}
        aria-pressed={paused}
        className="grid h-10 w-10 shrink-0 place-items-center border-l border-white/20 bg-purple-900/40 hover:bg-purple-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        {paused ? <Play className="h-4 w-4" aria-hidden="true" /> : <Pause className="h-4 w-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
