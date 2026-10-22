"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, Mic, MicOff, Phone, PhoneOff, RotateCcw } from "lucide-react";

// Live "Talk to Riley" demo: a browser voice call with the DAS Digital AI receptionist through Retell.
// Uses a Retell public key (safe in the browser, limited to our domains in the Retell dashboard),
// fetched from /api/retell-config when the page loads. The private Retell API key is never used here.
// Riley's 3-minute limit is set on the agent in Retell.
const MAX_SECONDS = 180;
// The same Riley demo agent also answers this phone number.
const RILEY_PHONE = { display: "(561) 220-9234", tel: "+15612209234" };

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600";

function formatTime(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

// Turn SDK errors into plain words for visitors.
function friendlyError(err) {
  const msg = String(err?.message || err || "");
  if (/permission|notallowed|denied/i.test(msg) || err?.name === "NotAllowedError") {
    return "Riley needs your microphone. Please allow microphone access in your browser and try again.";
  }
  if (/notfound|no.*device/i.test(msg) || err?.name === "NotFoundError") {
    return "We couldn't find a microphone. Please connect one and try again.";
  }
  return "We couldn't connect the call. Please try again in a moment.";
}

export default function RileyDemo({ className = "py-20" }) {
  // idle → connecting → live → ended, or error
  const [state, setState] = useState("idle");
  const [seconds, setSeconds] = useState(0);
  const [muted, setMuted] = useState(false);
  const [error, setError] = useState("");
  const callRef = useRef(null);
  const cancelledRef = useRef(false);
  // null while loading, then { publicKey, agentId }
  const [config, setConfig] = useState(null);
  const publicKey = config?.publicKey;

  useEffect(() => {
    let active = true;
    fetch("/api/retell-config", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { publicKey: null }))
      .catch(() => ({ publicKey: null }))
      .then((c) => active && setConfig(c));
    return () => { active = false; };
  }, []);

  // Count the call time while live.
  useEffect(() => {
    if (state !== "live") return undefined;
    const t = setInterval(() => setSeconds((s) => Math.min(s + 1, MAX_SECONDS)), 1000);
    return () => clearInterval(t);
  }, [state]);

  // Hang up if the visitor leaves the page mid-call.
  useEffect(() => () => { callRef.current?.end().catch(() => {}); }, []);

  async function start() {
    if (!publicKey || state === "connecting" || state === "live") return;
    setError("");
    setSeconds(0);
    setMuted(false);
    setState("connecting");
    cancelledRef.current = false;
    try {
      // Load the SDK only when someone starts a call, so it doesn't slow down the page.
      const { RetellClient } = await import("retell-client-js-sdk");
      if (cancelledRef.current) return; // Hung up while loading.
      const client = new RetellClient({ key: publicKey });
      let failed = false;
      const call = client.createWebCall({
        agent_id: config.agentId,
        hooks: {
          onStatus: (status) => {
            if (status === "live") setState("live");
          },
          onEnd: () => {
            callRef.current = null;
            if (!failed) setState("ended");
          },
          onError: (err) => {
            // Some errors are not fatal; only show one if the call is over.
            if (call.status === "ended" || call.status === "connecting") {
              failed = true;
              callRef.current = null;
              setError(friendlyError(err));
              setState("error");
            }
          },
        },
      });
      callRef.current = call;
      await call.ready;
    } catch (err) {
      if (cancelledRef.current) return;
      callRef.current = null;
      setError(friendlyError(err));
      setState("error");
    }
  }

  async function hangUp() {
    const call = callRef.current;
    callRef.current = null;
    cancelledRef.current = true;
    setState("ended");
    try {
      await call?.end();
    } catch {
      // The call is already over.
    }
  }

  function toggleMute() {
    const call = callRef.current;
    if (!call) return;
    if (muted) call.unmute();
    else call.mute();
    setMuted(!muted);
  }

  const live = state === "live";

  return (
    <section id="try-riley" className={`scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-purple-700 to-fuchsia-700 px-6 py-10 text-white sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-200">Live demo</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Try our AI receptionist</h2>
            <p className="mt-4 max-w-lg text-lg text-purple-100">
              Talk to Riley, a live AI receptionist, right from your browser. Ask a question, ask about hours, or try booking an
              appointment, and hear how your callers would be helped.
            </p>
            <div className="mt-6 max-w-lg rounded-xl bg-white/10 px-5 py-4 text-sm text-white ring-1 ring-white/20">
              <p>
                <span className="font-semibold">This demo is set up for a home service business</span> (HVAC, electrical and
                plumbing).
              </p>
              <p className="mt-2 text-purple-100">
                We customize your receptionist for any kind of business. It can be as simple as taking down each caller's details,
                or add features like text message confirmations.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-purple-100">
              <li>Works on your phone or computer. Your browser will ask to use your microphone.</li>
              <li>Demo calls last up to 3 minutes.</li>
            </ul>
          </div>

          <div className="order-first rounded-2xl bg-white p-6 text-slate-900 shadow-xl sm:p-8 lg:order-last" aria-live="polite">
            <div className="flex flex-col items-center text-center">
              <div className="relative grid h-24 w-24 place-items-center">
                {live ? <span className="absolute inset-0 animate-ping rounded-full bg-purple-400/40 motion-reduce:animate-none" aria-hidden="true" /> : null}
                <span className={`relative grid h-24 w-24 place-items-center rounded-full ${live ? "bg-gradient-to-br from-purple-600 to-fuchsia-600" : "bg-purple-50"}`}>
                  {state === "connecting" ? (
                    <Loader2 className="h-10 w-10 animate-spin text-purple-700" aria-hidden="true" />
                  ) : (
                    <Phone className={`h-10 w-10 ${live ? "text-white" : "text-purple-700"}`} aria-hidden="true" />
                  )}
                </span>
              </div>

              <div className="mt-5 font-brand text-xl font-bold">Riley</div>
              <div className="text-sm text-slate-500">AI receptionist</div>

              <p className="mt-4 min-h-[3rem] text-sm text-slate-600">
                {config === null && "Loading…"}
                {config && !publicKey && "The live demo is being set up. Check back soon."}
                {publicKey && state === "idle" && "Press the button and start talking when Riley says hello."}
                {state === "connecting" && "Connecting you to Riley…"}
                {live && (
                  <>
                    <span className="font-semibold text-purple-700">On a call with Riley</span>
                    <span className="mt-1 block tabular-nums">
                      {formatTime(seconds)} / {formatTime(MAX_SECONDS)}
                    </span>
                  </>
                )}
                {state === "ended" && "Call ended. Thanks for talking with Riley!"}
                {state === "error" && <span className="text-red-700">{error}</span>}
              </p>

              <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                {live || state === "connecting" ? (
                  <>
                    <button
                      type="button"
                      onClick={hangUp}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      <PhoneOff className="h-4 w-4" aria-hidden="true" /> Hang up
                    </button>
                    {live ? (
                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-pressed={muted}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-purple-300 hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                      >
                        {muted ? <MicOff className="h-4 w-4" aria-hidden="true" /> : <Mic className="h-4 w-4" aria-hidden="true" />}
                        {muted ? "Unmute" : "Mute"}
                      </button>
                    ) : null}
                  </>
                ) : (
                  <button type="button" onClick={start} disabled={!publicKey} className={btnPrimary}>
                    {state === "idle" ? <Mic className="h-4 w-4" aria-hidden="true" /> : <RotateCcw className="h-4 w-4" aria-hidden="true" />}
                    {state === "idle" ? "Talk to Riley" : "Talk to Riley again"}
                  </button>
                )}
              </div>

              {state === "ended" ? (
                <a href="#lead" className="mt-4 text-sm font-semibold text-purple-700 hover:text-purple-900">
                  Get an AI receptionist for your business
                </a>
              ) : null}

              <p className="mt-4 text-sm text-slate-600">
                Rather use your phone? Call Riley at{" "}
                <a href={`tel:${RILEY_PHONE.tel}`} className="whitespace-nowrap font-semibold text-purple-700 hover:text-purple-900">
                  {RILEY_PHONE.display}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
