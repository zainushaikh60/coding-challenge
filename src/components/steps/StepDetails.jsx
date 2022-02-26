import PropTypes from "prop-types";
import StepDetailsImage from "./StepDetailsImage";
import StepsInput from "./StepsInput";

const StepDetails = ({
  index,
  stepId,
  stepsLength,
  stepText,
  editStep,
  setStepText,
  setEditStep,
  stepImage,
  onRemoveImage,
}) => {
  return (
    <div className="w-full flex sm1:flex-col py-3 px-4">
      <div className="flex-[0.1] mr-2 text-7xl text-gray-300 sm1:text-center">
        <p>{index + 1}</p>
      </div>
      <div className="flex-1 flex flex-col text-sm">
        {editStep || stepId === stepsLength ? (
          <StepsInput
            stepId={stepId}
            stepsLength={stepsLength}
            stepText={stepText}
            setStepText={setStepText}
            editStep={editStep}
            setEditStep={setEditStep}
          />
        ) : (
          <p>{stepText}</p>
        )}

        {stepImage && (
          <StepDetailsImage
            stepId={stepId}
            stepsLength={stepsLength}
            editStep={editStep}
            stepImage={stepImage}
            onRemoveImage={onRemoveImage}
          />
        )}
      </div>
    </div>
  );
};

StepDetails.prototypes = {
  index: PropTypes.number.isRequired,
  stepId: PropTypes.number.isRequired,
  stepsLength: PropTypes.number.isRequired,
  stepText: PropTypes.string.isRequired,
  editStep: PropTypes.bool.isRequired,
  setStepText: PropTypes.func.isRequired,
  setEditStep: PropTypes.func.isRequired,
  stepImage: PropTypes.string.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
};

export default StepDetails;
