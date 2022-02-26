import PropTypes from "prop-types";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import useGlobalState from "../../store/useGlobalState";

const StepsContainer = ({ children }) => {
  const steps = useGlobalState((state) => state.steps);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newItems = [...steps];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    useGlobalState.setState({ steps: newItems });
    localStorage.setItem("tutorials", JSON.stringify(newItems));
  };

  return (
    <div className="mx-3 my-2 flex flex-col">
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {children}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

StepsContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StepsContainer;
