export default function BookingLoader() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0F2545]">
      <div className="space-y-4">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-[3px] border-[#86C5FF] border-t-transparent" />
        <p className="text-center text-sm text-[#9FB3D9]">
          Loading your scheduler…
        </p>
      </div>
    </div>
  );
}