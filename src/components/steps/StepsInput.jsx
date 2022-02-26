import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import useGlobalState from "../../store/useGlobalState";
import Button from "../ui/Button";

const StepsInput = ({
  stepId,
  stepsLength,
  stepText,
  setStepText,
  editStep,
  setEditStep,
}) => {
  const textAreaRef = useRef(null);
  const { updateStep } = useGlobalState();

  const onUpdateStep = () => {
    if (stepText === "") {
      alert("Step description can't be empty");
      return;
    }

    updateStep(stepId, stepText);
    setEditStep(false);

    if (stepId === stepsLength) {
      useGlobalState.setState({ stepsLength: null });
    }
  };

  useEffect(() => {
    if (editStep) {
      textAreaRef.current.selectionStart = textAreaRef.current.value.length;
      textAreaRef.current.selectionEnd = textAreaRef.current.value.length;
    }
  }, [editStep]);

  return (
    <div>
      <textarea
        ref={textAreaRef}
        className="border w-full rounded-md p-2 focus:border-primary"
        rows="5"
        cols="5"
        value={stepText ? stepText : ""}
        autoFocus
        onChange={(e) => {
          setStepText(e.target.value);
        }}
      />
      <Button
        onClick={onUpdateStep}
        title={stepId === stepsLength ? "Add" : "Update"}
      />
    </div>
  );
};

StepsInput.prototypes = {
  stepId: PropTypes.number.isRequired,
  stepsLength: PropTypes.number.isRequired,
  stepText: PropTypes.string.isRequired,
  setStepText: PropTypes.func.isRequired,
  editStep: PropTypes.bool.isRequired,
  setEditStep: PropTypes.func.isRequired,
};

export default StepsInput;
