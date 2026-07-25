import { useState } from "react";
import { ArrowRight } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\d{10}$/; // Only 10 digits

export default function ContactForm({ meeting, onSubmit }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next = {};

    if (values.name.trim().length < 2) {
      next.name = "Enter your full name.";
    }

    if (!EMAIL_RE.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (!PHONE_RE.test(values.phone.trim())) {
      next.phone = "Enter a valid 10-digit phone number.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(values);
  }

  return (
    <div className="flex min-h-full flex-col bg-[#0F2545]">
      <div className="m-auto w-full max-w-md px-5 py-8 sm:px-14 sm:py-14">
        <span className="rounded-full bg-[#FFA62B]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFA62B]">
          Step 1 of 2
        </span>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Before we lock in your slot
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#9FB3D9]">
          Share your details so we can confirm the{" "}
          {meeting.title.toLowerCase()} and reach you if plans change.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
          {/* Name */}
          <Field label="Full name" error={errors.name}>
            <input
              type="text"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Aditi Sharma"
              className={inputClass(errors.name)}
            />
          </Field>

          {/* Email */}
          <Field label="Work email" error={errors.email}>
            <input
              type="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="aditi@company.com"
              className={inputClass(errors.email)}
            />
          </Field>

          {/* Phone */}
          <Field label="Phone number" error={errors.phone}>
            <input
              type="tel"
              value={values.phone}
              onChange={(e) => {
                // Allow ONLY numbers
                const value = e.target.value
                  .replace(/\D/g, "") // Remove everything except digits
                  .slice(0, 10); // Limit to 10 digits

                update("phone", value);
              }}
              placeholder="9876543210"
              inputMode="numeric"
              maxLength={10}
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