import {
  Clock3,
  Video,
  Globe,
  CalendarClock,
  ShieldCheck,
} from "lucide-react";
import { MEETINGS } from "@/data/meetings";
import logo from "./../assets/logos/Karmyuglogo.webp";

export default function MeetingInfo({ meetingType }) {
  const meeting = MEETINGS[meetingType] ?? MEETINGS.consultation;

  return (
    // min-h-full, not h-full: this panel sits inside a scrollable wrapper,
    // and a *fixed* height clips the moment content (e.g. the reassurance
    // card below) makes it taller than the visible area — the navy
    // background stops at that fixed edge while the overflow renders on an
    // unpainted background behind it. min-h-full lets the panel grow with
    // its content instead, so the navy fill always reaches every pixel of
    // what's actually shown, however tall that ends up being.
    <aside className="flex min-h-full flex-col justify-between gap-8 bg-[#0F2545] p-7 text-white lg:p-8">
      {/* Top */}
      <div>
        {/* Company */}
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white p-2 shadow-sm lg:h-14 lg:w-14">
            <img
              src={logo}
              alt="Karmyug"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-base font-bold leading-tight lg:text-lg">
              Karmyug
            </h2>
            <p className="text-xs text-[#9FB3D9] lg:text-sm">AI Solutions</p>
          </div>
        </div>

        <div className="my-6 h-px bg-[#1F3B66] lg:my-7" />

        {/* Meeting */}
        <div>
          <span className="rounded-full bg-[#FFA62B]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FFA62B]">
            Meeting details
          </span>

          <h3 className="mt-4 text-xl font-bold leading-tight lg:text-2xl">
            {meeting.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#9FB3D9]">
            {meeting.description}
          </p>
        </div>

        {/* Information */}
        <div className="mt-7 space-y-4 lg:mt-8 lg:space-y-5">
          <InfoRow
            icon={<Clock3 size={17} />}
            title="Duration"
            value={meeting.duration}
          />
          <InfoRow
            icon={<Video size={17} />}
            title="Platform"
            value="Google Meet"
          />
          <InfoRow
            icon={<Globe size={17} />}
            title="Timezone"
            value="Asia / Kolkata"
          />
          <InfoRow
            icon={<CalendarClock size={17} />}
            title="Availability"
            value="Monday – Saturday"
          />
        </div>
      </div>

      {/* Bottom — reassurance strip */}
      <div className="flex items-start gap-3 rounded-2xl border border-[#1F3B66] bg-[#132B54] p-4">
        <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#86C5FF]" />
        <p className="text-xs leading-5 text-[#9FB3D9]">
          Your slot is confirmed instantly and you'll get a calendar invite
          with the Google Meet link right away.
        </p>
      </div>
    </aside>
  );
}

function InfoRow({ icon, title, value }) {
  return (
    <div className="flex items-center gap-3.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#1F3B66] bg-[#132B54] text-[#86C5FF]">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-widest text-[#7590C2]">
          {title}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}