import useGlobalState from "../store/useGlobalState";
import useTutorial from "../api/useTutorial";

const useCheckTutorials = () => {
  const { setTutorialsLoading } = useGlobalState();
  const { fetchTutorials } = useTutorial();

  const checkTutorials = () => {
    if (
      localStorage.getItem("tutorials") &&
      JSON.parse(localStorage.getItem("tutorials")).length > 0
    ) {
      setTutorialsLoading();
      useGlobalState.setState((state) => ({
        steps: [
          ...state.steps,
          ...JSON.parse(localStorage.getItem("tutorials")),
        ],
        stepsLoading: false,
      }));
    } else {
      setTutorialsLoading();
      fetchTutorials();
    }
  };
  return { checkTutorials };
};

export default useCheckTutorials;
