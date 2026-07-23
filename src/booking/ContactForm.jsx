import { useState } from "react";
import { ArrowRight } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d+][\d\s-]{7,14}$/;

export default function ContactForm({ meeting, onSubmit }) {
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Enter your full name.";
    if (!EMAIL_RE.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (!PHONE_RE.test(values.phone.trim()))
      next.phone = "Enter a valid phone number.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(values);
  }

  return (
    // min-h-full (not h-full) + margin:auto on the child — not
    // justify-center on this element — is deliberate. This box sits inside
    // a scrollable parent, and centering with `justify-content: center`
    // clips its own padding the moment the form is taller than the visible
    // area (the browser trims the "start" side to make room), which is
    // exactly what was cutting off the padding under the submit button and
    // letting the modal's white background show through the navy panel.
    // `margin: auto` doesn't have that problem: it collapses to 0 instead
    // of clipping, so the padding around the content is always intact.
    <div className="flex min-h-full flex-col bg-[#0F2545]">
      <div className="m-auto w-full max-w-md px-5 py-8 sm:px-14 sm:py-14">
        <span className="rounded-full bg-[#FFA62B]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFA62B]">
          Step 1 of 2
        </span>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Before we lock in your slot
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#9FB3D9]">
          Share your details so we can confirm the {meeting.title.toLowerCase()}{" "}
          and reach you if plans change.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
          <Field label="Full name" error={errors.name}>
            <input
              type="text"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Aditi Sharma"
              className={inputClass(errors.name)}
            />
          </Field>

          <Field label="Work email" error={errors.email}>
            <input
              type="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="aditi@company.com"
              className={inputClass(errors.email)}
            />
          </Field>

          <Field label="Phone number" error={errors.phone}>
            <input
              type="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className={inputClass(errors.phone)}
            />
          </Field>

          <p className="text-xs leading-5 text-[#7590C2]">
            We call every new booking to confirm before the meeting — this
            keeps slots free for people who genuinely want to talk to us.
          </p>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2E5AA7] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#234A8B]"
          >
            Continue to calendar
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[#7590C2]">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-red-400">{error}</span>
      )}
    </label>
  );
}

function inputClass(hasError) {
  return `w-full rounded-xl border bg-[#0F2545] px-4 py-3 text-sm text-white placeholder:text-[#5A76A8] focus:outline-none focus:ring-2 ${
    hasError
      ? "border-red-500/60 focus:ring-red-500/40"
      : "border-[#1F3B66] focus:border-[#86C5FF] focus:ring-[#86C5FF]/30"
  }`;
}