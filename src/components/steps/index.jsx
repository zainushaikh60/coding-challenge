import StepsContainer from "../layout/StepsContainer";
import StepCard from "./StepCard";
import useGlobalState from "../../store/useGlobalState";

const Steps = () => {
  const { steps, stepsLoading } = useGlobalState((state) => state);

  if (!stepsLoading && steps.length === 0) {
    return (
      <div className="h-full flex items-center justify-center text-center">
        <p>No Steps Found for this Tutorial</p>
      </div>
    );
  }

  return (
    <StepsContainer>
      {steps.map((step, index) => (
        <StepCard key={step.stepId} index={index} step={step} />
      ))}
    </StepsContainer>
  );
};

export default Steps;
