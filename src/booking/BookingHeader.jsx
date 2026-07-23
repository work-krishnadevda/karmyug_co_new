import { CalendarDays } from "lucide-react";

export default function BookingHeader({ step = "details" }) {
  return (
    <div className="border-b border-gray-200 px-5 pb-5 pr-16 pt-6 sm:px-10 sm:pb-6 sm:pr-10 sm:pt-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFA62B]/15 px-3.5 py-1.5 text-xs font-semibold text-[#B9740F] sm:text-sm">
        <CalendarDays size={15} />
        Schedule meeting
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-[#173B73] sm:text-3xl">
        Book a live demo
      </h1>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
        {step === "details"
          ? "Tell us a little about yourself, then pick a time that works for you."
          : "Choose a date and time — you'll get a Google Meet invite instantly."}
      </p>
    </div>
  );
}