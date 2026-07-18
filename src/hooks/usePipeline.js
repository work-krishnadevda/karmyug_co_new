import { useEffect, useState } from "react";

export default function usePipeline(totalSteps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSteps]);

  return {
    activeStep,
    setActiveStep,
  };
}
