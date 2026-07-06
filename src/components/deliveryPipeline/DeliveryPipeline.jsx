import pipeline from "../../data/pipelineData";
import usePipeline from "../../hooks/usePipeline";
import Timeline from "./Timeline";
import PhaseContent from "./PhaseContent";

const DeliveryPipeline = () => {
  const { activeStep, setActiveStep } = usePipeline(pipeline.length);

  return (
    <section className="bg-white py-24" aria-labelledby="workflow-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <header className="text-center mb-16">
          <span className="text-[#20878E] font-semibold uppercase tracking-[3px]">
            Process
          </span>
          <h2
            className="
      mt-5
      text-5xl md:text-7xl
      font-black
      tracking-tight
      leading-none
    "
          >
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
              How We Work
            </span>
          </h2>

          <p className="text-slate-500 mt-5 max-w-3xl mx-auto">
            From understanding your business to long-term support, our
            streamlined process ensures transparency, quality, and continuous
            growth.
          </p>
        </header>

        <Timeline
          steps={pipeline}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />

        <div className="mt-20">
          <PhaseContent phase={pipeline[activeStep]} />
        </div>
      </div>
    </section>
  );
};

export default DeliveryPipeline;
