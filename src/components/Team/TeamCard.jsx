import { cn } from "@/lib/utils";
import { LinkedinIcon } from "@/components/Shared/SocialIcons";

/**
 * A single team member card for the carousel. `distance` is how many slots
 * away from the active (centered) card this one sits — 0 for the active
 * card itself, 1/-1 for immediate neighbors, and so on. It drives the
 * scale/opacity/blur treatment that makes the carousel feel focused on the
 * active member, matching the reference "premium SaaS card" look.
 */
export default function TeamCard({ member, distance, onSelect }) {
  const isActive = distance === 0;
  const closeness = Math.min(Math.abs(distance), 2);

  const scale = isActive ? 1 : closeness === 1 ? 0.88 : 0.8;
  const opacity = isActive ? 1 : closeness === 1 ? 0.55 : 0.3;
  const blur = isActive ? 0 : closeness === 1 ? 1 : 2;

  return (
    <button
      type="button"
      onClick={() => onSelect?.()}
      aria-current={isActive ? "true" : undefined}
      aria-label={`${member.name}, ${member.role}`}
      style={{
        transform: `scale(${scale})`,
        opacity,
        filter: blur ? `blur(${blur}px)` : "none",
      }}
      className={cn(
        "group relative flex w-[280px] shrink-0 flex-col items-center rounded-[1.75rem] border bg-white px-6 pt-10 pb-8 text-center transition-[transform,opacity,filter,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[320px]",
        isActive
          ? "z-10 border-slate-100 shadow-[0_30px_70px_rgba(15,23,42,0.16)] cursor-default"
          : "cursor-pointer border-slate-100/70 shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:opacity-80",
      )}
    >
      {/* LinkedIn */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label={`${member.name}'s LinkedIn profile`}
        tabIndex={isActive ? 0 : -1}
        className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-[#0077B5]/10 hover:text-[#0077B5]"
      >
        <LinkedinIcon size={18} />
      </a>

      {/* Photo */}
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-[0_8px_20px_rgba(15,23,42,0.15)] ring-1 ring-slate-100 sm:h-28 sm:w-28">
        <img
          src={member.photo}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-[center_18%]"
        />
      </div>

      {/* Name */}
      <h3 className="mt-5 text-lg font-bold text-brand-text sm:text-xl">
        {member.name}
      </h3>

      {/* Role pill */}
      <span className="mt-3 inline-block rounded-full bg-brand-primary/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-primary">
        {member.role}
      </span>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-brand-text-secondary line-clamp-3">
        {member.description}
      </p>
    </button>
  );
}
