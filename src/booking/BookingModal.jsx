import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  X,
  CalendarDays,
  Clock3,
  Video,
  Globe,
} from "lucide-react";

import BookingHeader from "./BookingHeader";
import MeetingTabs from "./MeetingTabs";
import MeetingInfo from "./MeetingInfo";
import ContactForm from "./ContactForm";
import BookingEmbed from "./BookingEmbed";
import { MEETINGS } from "@/data/meetings";
import { useScrollLock } from "@/hooks/useScrollLock";

export default function BookingModal({
  open,
  setOpen,
  onClose,
  meetingType,
  setMeetingType,
  step,
  contact,
  onSubmitContact,
  onBack,
}) {
  const meeting = MEETINGS[meetingType] ?? MEETINGS.consultation;

  // The site runs on Lenis for smooth scrolling. Lenis captures wheel/touch
  // events at the document level and drives its own virtual scroll, so a
  // plain `overflow: hidden` on the body isn't enough — Lenis will still
  // swallow every wheel/trackpad/touch gesture meant for the modal. The one
  // reliable fix is to pause Lenis itself while the modal is open (which is
  // exactly what the app's shared scroll-lock hook does, and already how
  // the mobile nav handles this), so native scrolling works normally inside
  // the modal and the page behind it can't move.
  useScrollLock(open);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => (next ? setOpen(true) : onClose())}
    >
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
              />
            </Dialog.Overlay>

            {/* Modal — full-screen on mobile, centered card from sm: up.
                On mobile this whole box is ALSO the single scroll
                container (overflow-y-auto): header, tabs, meeting summary,
                contact form and calendar all sit in one natural document
                flow, so a mouse wheel/trackpad/touch/swipe anywhere just
                scrolls the page like normal — no nested scroll region
                fighting for the gesture. At md: and up it switches back to
                overflow-hidden because the desktop layout below takes
                over: header/tabs stay fixed and the sidebar + main content
                scroll independently instead.
                data-lenis-prevent belt-and-braces this against Lenis ever
                capturing scroll inside here, even if the lock above races
                with a fast scroll on mount/unmount. */}
            <Dialog.Content asChild>
              <motion.div
                data-lenis-prevent
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 30 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ WebkitOverflowScrolling: "touch" }}
                className="
                  fixed inset-0 z-50 flex h-full w-full flex-col overflow-y-auto overscroll-contain bg-white
                  sm:inset-auto sm:left-1/2 sm:top-1/2 sm:h-[90vh] sm:w-[95vw] sm:max-w-6xl
                  sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[28px]
                  sm:border sm:border-black/5 sm:shadow-[0_40px_100px_-20px_rgba(15,37,69,0.45)]
                  md:overflow-hidden
                "
              >
                {/* Visually-hidden title/description: Radix requires both
                    for accessibility, but the visible heading + copy inside
                    BookingHeader already do this job for sighted users, so
                    the on-screen design stays exactly as-is. */}
                <Dialog.Title className="sr-only">
                  Schedule a meeting with Karmyug
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  Pick a meeting type, share your contact details, then choose
                  a time on the calendar to book with Karmyug.
                </Dialog.Description>

                <BookingHeader step={step} />

                {/* Close */}
                <Dialog.Close asChild>
                  <button
                    aria-label="Close"
                    className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-md ring-1 ring-black/5 transition hover:scale-105 hover:text-slate-800 hover:shadow-lg sm:right-6 sm:top-6 sm:h-11 sm:w-11"
                  >
                    <X size={19} />
                  </button>
                </Dialog.Close>

                <MeetingTabs
                  meetingType={meetingType}
                  setMeetingType={setMeetingType}
                />

                {/* Compact meeting summary, mobile only — the full info
                    panel is hidden on small screens to save vertical space,
                    but the same key facts (duration, platform, timezone)
                    are surfaced here as scrollable chips so mobile users
                    aren't missing information the desktop panel shows. */}
                <div className="border-b border-[#1F3B66] bg-[#0F2545] px-5 py-4 text-white md:hidden">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFA62B]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#FFA62B]">
                        <CalendarDays size={11} />
                        Meeting details
                      </span>
                      <p className="mt-2 truncate text-base font-bold leading-tight">
                        {meeting.title}
                      </p>
                    </div>

                    {step === "calendar" && (
                      <button
                        onClick={onBack}
                        className="flex shrink-0 items-center gap-1 rounded-full border border-[#1F3B66] px-3 py-1.5 text-xs font-semibold text-[#86C5FF] transition hover:border-[#86C5FF] hover:text-white"
                      >
                        <ArrowLeft size={13} />
                        Edit
                      </button>
                    )}
                  </div>

                  <div className="mt-3 flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <SummaryChip icon={<Clock3 size={13} />}>
                      {meeting.duration}
                    </SummaryChip>
                    <SummaryChip icon={<Video size={13} />}>
                      Google Meet
                    </SummaryChip>
                    <SummaryChip icon={<Globe size={13} />}>
                      Asia / Kolkata
                    </SummaryChip>
                  </div>
                </div>

                {/* Body — on mobile there is no separate scroll owner here
                    at all, this just flows naturally as part of the single
                    page scroll above. At md: and up it becomes exactly two
                    scroll owners: the left info panel (desktop only) and
                    whatever is active on the right (contact form or
                    calendar) — nothing nested inside an already-scrolling
                    ancestor, so there's never more than one scrollbar
                    fighting for the same gesture. */}
                <div className="grid grid-cols-1 md:min-h-0 md:flex-1 md:grid-cols-[320px_1fr] md:overflow-hidden">
                  {/* Left panel — desktop only */}
                  <div className="scrollbar-thin-dark hidden overflow-y-auto overscroll-contain border-r border-[#1F3B66] md:block">
                    <MeetingInfo meetingType={meetingType} />
                  </div>

                  {/* Right panel — contact form, then calendar */}
                  <div className="flex flex-col bg-[#0F2545] md:min-h-0 md:overflow-hidden">
                    {step === "calendar" && (
                      <button
                        onClick={onBack}
                        className="hidden items-center gap-1.5 border-b border-[#1F3B66] px-6 py-3 text-left text-xs font-semibold text-[#86C5FF] transition hover:text-white md:flex"
                      >
                        <ArrowLeft size={14} />
                        Edit details
                      </button>
                    )}

                    <div className="md:min-h-0 md:flex-1">
                      {step === "details" ? (
                        <div className="scrollbar-thin-dark bg-[#0F2545] md:h-full md:overflow-y-auto md:overscroll-contain">
                          <ContactForm
                            meeting={meeting}
                            onSubmit={onSubmitContact}
                          />
                        </div>
                      ) : (
                        <BookingEmbed
                          meetingType={meetingType}
                          contact={contact}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function SummaryChip({ icon, children }) {
  return (
    <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#1F3B66] bg-[#132B54] px-3 py-1.5 text-xs font-medium text-[#9FB3D9]">
      <span className="text-[#86C5FF]">{icon}</span>
      {children}
    </span>
  );
}