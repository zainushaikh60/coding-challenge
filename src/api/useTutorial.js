import useGlobalState from "../store/useGlobalState";
import tutorials from "../data/tutorials";

const useTutorial = () => {
  const fetchTutorials = async () => {
    useGlobalState.setState((state) => ({
      steps: [...state.steps, ...tutorials.steps],
      stepsLoading: false,
    }));

    // try {
    //   const response = await fetch(
    //     "https://knwrn-frontend-challenge.free.beeceptor.com"
    //   );
    //   const data = await response.json();

    //   if (data) {
    //     localStorage.setItem(
    //       "tutorials",
    //       JSON.stringify([...data.tutorial.steps])
    //     );
    //     useGlobalState.setState((state) => ({
    //       steps: [...state.steps, ...data.tutorial.steps],
    //       stepsLoading: false,
    //     }));
    //   }
    // } catch (error) {
    //   useGlobalState.setState({
    //     stepsLoading: false,
    //   });
    //   console.log(error);
    // }
  };

  return {
    fetchTutorials,
  };
};

export default useTutorial;
