// The DAS DigitalAI logo: the gradient bolt icon plus the name, with "AI" in the brand gradient.
// Colors and fonts follow the brand guide (Montserrat ExtraBold, #9333EA to #C026D3).
export function BoltIcon({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="das-bolt" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9333ea" />
          <stop offset="1" stopColor="#c026d3" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="24" fill="url(#das-bolt)" />
      <path d="M69.8 12.9 L27.1 70.7 H55.1 L47.1 106.7 L93.3 46.2 H64 Z" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function Wordmark({ className = "" }) {
  return (
    <a href="/" aria-label="DAS DigitalAI home" className={`inline-flex items-center gap-2.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 ${className}`}>
      <BoltIcon />
      <span className="font-brand text-xl font-extrabold tracking-tight text-slate-900">
        DAS Digital<span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">AI</span>
      </span>
    </a>
  );
}
