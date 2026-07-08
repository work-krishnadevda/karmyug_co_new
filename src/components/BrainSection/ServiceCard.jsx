export default function ServiceCard({ service }) {
  return (
    <div
      className="
      absolute
      left-1/2
      top-1/2
      w-96
      -translate-x-1/2
      translate-y-40
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
    "
    >
      <h3 className="text-2xl font-bold text-white">
        {service.title}
      </h3>

      <p className="mt-4 text-slate-300">
        {service.description}
      </p>

      <button
        className="
        mt-8
        rounded-full
        bg-cyan-500
        px-6
        py-3
        text-white
        hover:bg-cyan-400
        "
      >
        Learn More
      </button>
    </div>
  );
}