import { MEETING_LIST } from "@/data/meetings";

export default function MeetingTabs({ meetingType, setMeetingType }) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-200 px-5 py-4 sm:gap-3 sm:px-10 sm:py-5">
      {MEETING_LIST.map((meeting) => {
        const active = meetingType === meeting.id;
        const Icon = meeting.icon;
        return (
          <button
            key={meeting.id}
            type="button"
            onClick={() => setMeetingType(meeting.id)}
            className={`flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-left transition-all duration-200 sm:px-5 ${
              active
                ? "border-[#2E5AA7] bg-[#2E5AA7] text-white shadow-md shadow-[#2E5AA7]/20"
                : "border-gray-200 bg-white text-gray-700 hover:border-[#86C5FF] hover:text-[#2E5AA7]"
            }`}
          >
            {Icon && (
              <Icon
                size={16}
                className={active ? "text-white" : "text-[#7590C2]"}
              />
            )}
            <span>
              <span className="block text-sm font-semibold leading-tight">
                {meeting.shortLabel}
              </span>
              <span
                className={`block text-xs leading-tight ${
                  active ? "text-[#DCEBFF]" : "text-gray-400"
                }`}
              >
                {meeting.duration}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}