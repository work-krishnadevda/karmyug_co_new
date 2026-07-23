import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/Shared/Container";
import TeamCard from "./TeamCard";
import { team } from "@/data/teamData";

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 45;

export default function TeamSection() {
  const [active, setActive] = useState(0);
  const [gap] = useState(24);
  const [cardWidth, setCardWidth] = useState(320);
  const [offset, setOffset] = useState(0);

  const viewportRef = useRef(null);
  const cardRef = useRef(null);
  const dragRef = useRef({ startX: 0, dragging: false, delta: 0 });
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const count = team.length;

  const goTo = useCallback(
    (index) => {
      setActive(((index % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const previous = useCallback(() => goTo(active - 1), [active, goTo]);

  // Measure the viewport + a card so the track can be centered at any
  // breakpoint — this is what naturally yields "3 visible on desktop, 2 on
  // tablet, 1 on mobile" without separate layout logic per breakpoint.
  useLayoutEffect(() => {
    const measure = () => {
      const viewportWidth = viewportRef.current?.offsetWidth ?? 0;
      const width = cardRef.current?.offsetWidth ?? cardWidth;
      setCardWidth(width);
      setOffset(viewportWidth / 2 - width / 2);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Autoplay, paused while the user is dragging.
  useEffect(() => {
    if (isDragging) return undefined;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [count, active, isDragging]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      previous();
    }
  };

  // --- Swipe support (touch + mouse drag) ---
  const onDragStart = (clientX) => {
    dragRef.current = { startX: clientX, dragging: true, delta: 0 };
    setIsDragging(true);
  };

  const onDragMove = (clientX) => {
    if (!dragRef.current.dragging) return;
    const delta = clientX - dragRef.current.startX;
    dragRef.current.delta = delta;
    setDragDelta(delta);
  };

  const onDragEnd = () => {
    const { delta } = dragRef.current;
    dragRef.current.dragging = false;
    setIsDragging(false);
    setDragDelta(0);

    if (delta > SWIPE_THRESHOLD) previous();
    else if (delta < -SWIPE_THRESHOLD) next();
  };

  const step = cardWidth + gap;
  const trackX = offset - active * step + dragDelta;

  return (
    <section
      id="meet-our-team"
      aria-labelledby="meet-our-team-heading"
      className="relative overflow-hidden bg-white py-24 md:py-10"
    >
      <Container className="relative flex flex-col items-center">
        {/* Badge + heading */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
          <Sparkles size={13} aria-hidden="true" />
          Behind the Success
        </span>

        <h2
          id="meet-our-team-heading"
          className="mt-5 text-center font-heading text-4xl font-extrabold tracking-tight text-brand-text sm:text-5xl"
        >
          Meet Our Team
        </h2>

        <p className="mt-4 max-w-xl text-center text-base leading-relaxed text-brand-text-secondary sm:text-lg">
          The passionate people building Karmyug&apos;s AI-first products every
          single day.
        </p>

        {/* Carousel */}
        <div
          className="relative mt-14 w-full"
          role="region"
          aria-roledescription="carousel"
          aria-label="Team members"
          onKeyDown={handleKeyDown}
        >
          {/* Arrows */}
          <button
  type="button"
  onClick={previous}
  aria-label="Previous team member"
  className="absolute left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-lg transition-all duration-300 hover:scale-110 hover:text-brand-primary md:flex lg:left-6"
>
  <ChevronLeft size={20} />
</button>
         <button
  type="button"
  onClick={next}
  aria-label="Next team member"
  className="absolute right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-lg transition-all duration-300 hover:scale-110 hover:text-brand-primary md:flex lg:right-6"
>
  <ChevronRight size={20} />
</button>

          <div ref={viewportRef} className="overflow-hidden px-4 py-4">
            <motion.div
              className="flex items-stretch"
              style={{ gap }}
              animate={{ x: trackX }}
              transition={
                isDragging
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 300, damping: 32 }
              }
              onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
              onTouchEnd={onDragEnd}
              onMouseDown={(e) => {
                e.preventDefault();
                onDragStart(e.clientX);
              }}
              onMouseMove={(e) => {
                if (dragRef.current.dragging) onDragMove(e.clientX);
              }}
              onMouseUp={onDragEnd}
              onMouseLeave={() => {
                if (dragRef.current.dragging) onDragEnd();
              }}
            >
              {team.map((member, index) => (
                <div key={member.id} ref={index === 0 ? cardRef : undefined}>
                  <TeamCard
                    member={member}
                    distance={index - active}
                    onSelect={() => goTo(index)}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {team.map((member, index) => (
              <button
                key={member.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${member.name}`}
                aria-current={index === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-6 bg-brand-primary"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
