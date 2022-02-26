import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import useGlobalState from "../../store/useGlobalState";
import StepCardFooter from "./StepCardFooter";
import StepDetails from "./StepDetails";

const StepCard = ({ index, step }) => {
  const imageInputRef = useRef();
  const stepsLength = useGlobalState((state) => state.stepsLength);
  const [stepText, setStepText] = useState(step.displayText[0].text);
  const [editStep, setEditStep] = useState(false);
  const [stepImage, setStepImage] = useState(null);

  const onSelectImage = (e) => {
    if (e.target.files.length !== 0) {
      setStepImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onRemoveImage = () => {
    setStepImage(null);
    imageInputRef.current.value = "";
  };

  return (
    <Draggable
      key={index}
      draggableId={`draggable-${step.stepId}`}
      index={index}
    >
      {(provided, _) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="bg-white relative border rounded-md flex flex-col items-center my-2">
            <StepDetails
              index={index}
              stepId={step.stepId}
              stepsLength={stepsLength}
              stepText={stepText}
              setStepText={setStepText}
              stepImage={stepImage}
              editStep={editStep}
              setEditStep={setEditStep}
              onRemoveImage={onRemoveImage}
            />
            <StepCardFooter
              index={index}
              stepId={step.stepId}
              stepsLength={stepsLength}
              editStep={editStep}
              setEditStep={setEditStep}
              onSelectImage={onSelectImage}
              ref={imageInputRef}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

StepCard.propTypes = {
  index: PropTypes.number.isRequired,
  step: PropTypes.object.isRequired,
};

export default StepCard;
