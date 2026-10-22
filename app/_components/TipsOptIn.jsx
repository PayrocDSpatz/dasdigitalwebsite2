// Unchecked opt-in for the weekly automation tips email, shared by the contact and guide forms.
// When ticked, the form sends tips: "yes" and the server fills the Sheet's "Weekly tips" column with Yes.
export default function TipsOptIn() {
  return (
    <label className="flex items-start gap-3 text-sm text-slate-700">
      <input
        type="checkbox"
        name="tips"
        value="yes"
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-purple-700 accent-purple-700 focus:ring-2 focus:ring-purple-600/30"
      />
      <span>Yes, send me weekly automation tips by email. You can stop them any time.</span>
    </label>
  );
}

