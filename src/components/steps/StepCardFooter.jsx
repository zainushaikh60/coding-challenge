import PropTypes from "prop-types";
import { forwardRef } from "react";
import useGlobalState from "../../store/useGlobalState";

const StepCardFooter = forwardRef(
  (
    { stepId, stepsLength, editStep, setEditStep, onSelectImage, index },
    ref
  ) => {
    const { removeStep } = useGlobalState();

    return (
      <div className="w-full border-t p-2 flex justify-end space-x-4">
        {editStep && (
          <label
            htmlFor={`image-upload+${index}`}
            className="w-5 h-5 cursor-pointer"
          >
            <img src="/assets/icons/attached.png" alt="attachment" />
          </label>
        )}

        {!editStep && stepsLength === stepId && (
          <label
            htmlFor={`image-upload+${index}`}
            className="w-5 h-5 cursor-pointer"
          >
            <img src="/assets/icons/attached.png" alt="attachment" />
          </label>
        )}

        <input
          ref={ref}
          type="file"
          name="image"
          accept="image/png, image/gif, image/jpeg"
          className="absolute opacity-0 w-1"
          id={`image-upload+${index}`}
          style={{ zIndex: "-1" }}
          onChange={onSelectImage}
        />

        {stepId !== stepsLength && (
          <div
            className="w-5 h-5 cursor-pointer"
            onClick={() => setEditStep((prev) => !prev)}
          >
            <img src="/assets/icons/editing.png" alt="editing" />
          </div>
        )}

        <div
          className="w-5 h-5 cursor-pointer"
          onClick={() => removeStep(stepId)}
        >
          <img src="/assets/icons/trash.png" alt="trash" />
        </div>
      </div>
    );
  }
);

StepCardFooter.propTypes = {
  stepId: PropTypes.number.isRequired,
  stepsLength: PropTypes.number,
  editStep: PropTypes.bool.isRequired,
  setEditStep: PropTypes.func.isRequired,
  onSelectImage: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default StepCardFooter;
