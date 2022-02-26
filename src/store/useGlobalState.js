import { devtools } from "zustand/middleware";
import create from "zustand";

const useGlobalState = create(
  devtools((set, get) => ({
    steps: [],
    stepsLoading: false,
    stepsLength: null,

    setTutorialsLoading: () => {
      set({
        stepsLoading: true,
      });
    },

    publishTutorial: () => {},

    addStep: (stepsLength) => {
      set((state) => ({
        steps: [
          ...state.steps,
          {
            imagePath: "",
            stepId: state.steps.length + 2,
            displayText: [
              {
                language: "en",
                text: "",
              },
              {
                language: "de",
                text: "",
              },
            ],
            documentReference: "",
          },
        ],
        stepsLength: stepsLength + 2,
      }));

      localStorage.setItem("tutorials", JSON.stringify(get().steps));
    },

    updateStep: (id, text, img) => {
      set((state) => ({
        steps: state.steps.map((step) =>
          step.stepId === id
            ? {
                ...step,
                displayText: step.displayText.map((dT) =>
                  dT.language === "en" ? { ...dT, text: text } : dT
                ),
              }
            : step
        ),
      }));

      localStorage.setItem("tutorials", JSON.stringify(get().steps));
    },

    removeStep: (id) => {
      set((state) => ({
        steps: state.steps.filter((step) => step.stepId !== id),
      }));
      localStorage.setItem("tutorials", JSON.stringify(get().steps));
    },
  }))
);

export default useGlobalState;
