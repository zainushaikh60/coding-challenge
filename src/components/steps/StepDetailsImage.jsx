import PropTypes from "prop-types";

const StepDetailsImage = ({
  stepId,
  stepsLength,
  editStep,
  stepImage,
  onRemoveImage,
}) => {
  return (
    <div className="self-start sm1:self-center rounded-md flex my-2 border overflow-hidden p-1">
      <img
        src={stepImage ? stepImage : "/sample-bg.jpeg"}
        className="max-w-[150px] rounded-md"
        alt="sample"
      />

      {editStep && (
        <div className="flex items-center" onClick={() => onRemoveImage()}>
          <img
            src="/assets/icons/cancel-primary.png"
            alt="cancel-primary"
            className="w-6 h-6 mx-2 cursor-pointer"
          />
        </div>
      )}

      {!editStep && stepId === stepsLength && (
        <div className="flex items-center" onClick={() => onRemoveImage()}>
          <img
            src="/assets/icons/cancel-primary.png"
            alt="cancel-primary"
            className="w-6 h-6 mx-2 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

StepDetailsImage.prototypes = {
  stepId: PropTypes.number.isRequired,
  stepsLength: PropTypes.number.isRequired,
  stepImage: PropTypes.string.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
};

export default StepDetailsImage;
