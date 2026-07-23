import { useEffect, useState } from "react";
import Cal from "@calcom/embed-react";
import { MEETINGS } from "@/data/meetings";
import { initCalUi } from "@/lib/cal";
import BookingLoader from "./BookingLoader";

export default function BookingEmbed({ meetingType, contact }) {
  const meeting = MEETINGS[meetingType] ?? MEETINGS.consultation;

  // Track *which* meeting has finished loading rather than a plain
  // true/false flag, so switching meeting types derives a fresh "not ready"
  // state for free instead of needing an explicit reset inside the effect.
  const [readyFor, setReadyFor] = useState(null);
  const ready = readyFor === meeting.id;

  useEffect(() => {
    let cancelled = false;

    // Cal's "linkReady" event tells us the booker has actually painted, so
    // we can swap the loader for the real calendar instead of guessing.
    // It isn't 100% guaranteed to fire on every embed version, so a short
    // fallback timeout guarantees the loader never gets stuck either way.
    (async () => {
      const cal = await initCalUi();
      cal("on", {
        action: "linkReady",
        callback: () => {
          if (!cancelled) setReadyFor(meeting.id);
        },
      });
    })();

    const fallback = setTimeout(() => {
      if (!cancelled) setReadyFor(meeting.id);
    }, 2500);

    return () => {
      cancelled = true;
      clearTimeout(fallback);
    };
  }, [meeting.id]);

  return (
    // On desktop (md: and up) this is the single scroll owner for the
    // calendar step. Earlier this relied on the Cal iframe scrolling
    // *internally*, but Radix's dialog scroll-lock (react-remove-scroll)
    // can't see inside a cross-origin iframe to know it's scrollable, so it
    // was cancelling every wheel/trackpad/touch gesture over it before the
    // iframe ever got a chance to scroll — the only thing that "worked" was
    // manually dragging, because that isn't a wheel/touchmove event.
    // Letting the iframe grow to its natural content height (no fixed
    // height) and giving *this* div the real overflow means the scroll
    // happens in the normal document, so the scroll-lock correctly
    // recognizes it as scrollable and every input method behaves the same,
    // natural way.
    //
    // On mobile there's no independent scroll region here at all — the
    // whole booking modal (header, tabs, meeting details, this calendar)
    // is one continuous page scroll owned by BookingModal, so this div just
    // grows to its natural content height instead of clipping/scrolling
    // on its own.
    <div
      className="scrollbar-thin-dark relative w-full bg-[#0F2545] md:h-full md:overflow-y-auto md:overscroll-contain"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {!ready && <BookingLoader />}

      <Cal
        key={meeting.id}
        calLink={meeting.calLink}
        config={{
          layout: "month_view",
          theme: "dark",
          // Prefill with what the visitor already gave us in step 1,
          // so they don't have to retype it on the Cal.com form.
          name: contact?.name,
          email: contact?.email,
          notes: contact?.phone ? `Phone: ${contact.phone}` : undefined,
        }}
        style={{
          width: "100%",
          // No fixed height here on purpose — Cal's embed auto-resizes the
          // iframe to match its real content height (e.g. once time slots
          // expand the layout), and minHeight just keeps a sane baseline
          // while it's loading.
          minHeight: "560px",
          border: "none",
          opacity: ready ? 1 : 0,
          transition: "opacity 300ms ease",
        }}
      />
    </div>
  );
}