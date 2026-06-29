export default function ProductsHeading() {
  return (
    <section className="relative overflow-hidden pt-14 pb-3 text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 ">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      {/* Badge */}
      <div
        className="
      inline-flex items-center gap-2
      rounded-full
      border border-blue-200
      bg-blue-50
      px-5 py-2
      text-sm font-medium
      text-blue-700
      transition-all duration-300
      hover:scale-105 
    "
      >
        ✦ Enterprise SaaS Products
      </div>

      {/* Heading */}
      <h2
        className="
      mt-5
      text-5xl md:text-7xl
      font-black
      tracking-tight
      leading-none
    "
      >
        <span className="block text-slate-900">Real Products.</span>

        <span
          className="
        block
        bg-gradient-to-r
        from-blue-600
        via-sky-500
        to-cyan-500
        bg-clip-text
        text-transparent
        transition-all
        duration-500
        hover:tracking-wide
      "
        >
          Real Business Impact.
        </span>
      </h2>

      {/* Description */}
      <p
        className="
      mx-auto
      mt-6
      max-w-3xl
      text-lg md:text-xl
      text-slate-600
      leading-relaxed
    "
      >
        HRMS. Property Valuation. Institute Management.
        <br />
        Powerful platforms engineered to automate operations, improve
        productivity, and scale organizations.
      </p>

      {/* Animated Line */}
      <div className="mt-12 flex justify-center">
        <div
          className="
        h-[3px]
        w-24
        rounded-full
        bg-gradient-to-r
        from-blue-600
        via-sky-500
        to-cyan-500
        transition-all
        duration-500
        hover:w-40
      "
        />
      </div>
    </section>
  );
}
