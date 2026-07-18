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
          <span className="text-[--brand-primary] font-semibold uppercase tracking-[3px]">
            Process
          </span>
          <h2 className="mt-5 text-5xl md:text-7xl font-black tracking-tight leading-none">
            <span className="block text-[var(--brand-primary)] ">
              How We Work
            </span>
          </h2>

          <p className="text-[--brand-text-secondary] mt-5 max-w-3xl mx-auto">
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
