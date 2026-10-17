import { Zap } from "lucide-react";

// The DAS Digital wordmark: the lightning mark from the original site plus the name.
export default function Wordmark({ className = "" }) {
  return (
    <a href="/" className={`inline-flex items-center gap-2.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-600 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-purple-700 text-white">
        <Zap className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-slate-900">DAS Digital</span>
    </a>
  );
}
