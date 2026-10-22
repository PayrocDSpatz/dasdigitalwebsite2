"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { CONTACT } from "./site";

// Scrolling message bar fixed to the bottom of every page. It pauses on hover and with the
// pause button (WCAG 2.2.2), and stands still for visitors who ask for reduced motion.
// It fades away a minute after the visitor arrives and stays hidden for the rest of the visit.
const ITEMS = [
  { text: "New: Online stores from $995", href: "/online-store" },
  { text: "Talk to Riley, our AI receptionist: (561) 220-9234", href: "/ai-receptionist#try-riley" },
  { text: "Free website review", href: "/#review" },
  { text: "Websites that bring in customers", href: "/website-design" },
  { text: "AI receptionists that answer every call, 24/7", href: "/ai-receptionist" },
  { text: `Call us: ${CONTACT.phoneDisplay}`, href: `tel:${CONTACT.phone}` },
  { text: "Serving Palm Beach, Broward and Miami-Dade", href: "/about" },
];

const SHOW_FOR_MS = 60_000;
const STARTED_KEY = "ticker-started";

export default function TickerBar() {
  const [paused, setPaused] = useState(false);
  // null until we know how long it has been showing this visit, so it never flashes for returning pages.
  const [visible, setVisible] = useState(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let started = Date.now();
    try {
      const saved = Number(sessionStorage.getItem(STARTED_KEY));
      if (saved) started = saved;
      else sessionStorage.setItem(STARTED_KEY, String(started));
    } catch {
      // Storage blocked: just time this page.
    }
    const left = SHOW_FOR_MS - (Date.now() - started);
    if (left <= 0) {
      setVisible(false);
      return undefined;
    }
    setVisible(true);
    const fade = setTimeout(() => setFading(true), left);
    const hide = setTimeout(() => setVisible(false), left + 700);
    return () => {
      clearTimeout(fade);
      clearTimeout(hide);
    };
  }, []);

  // Keep the footer clear of the bar only while it's showing.
  useEffect(() => {
    document.body.style.paddingBottom = visible ? "2.5rem" : "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`ticker fixed inset-x-0 bottom-0 z-40 flex h-10 items-center overflow-hidden bg-gradient-to-r from-purple-800 via-purple-700 to-fuchsia-700 text-sm font-medium text-white shadow-[0_-2px_8px_rgba(15,23,42,0.15)] transition-opacity duration-700 ${fading ? "opacity-0" : "opacity-100"}`}
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
