import { useEffect } from "react";
import MainContainer from "./components/layout/MainContainer";
import MainContentContainer from "./components/layout/MainContentContainer";
import Header from "./components/header";
import Steps from "./components/steps";
import Footer from "./components/footer";
import useCheckTutorials from "./helpers/useCheckTutorials";

const App = () => {
  const { checkTutorials } = useCheckTutorials();

  useEffect(() => {
    checkTutorials();
  }, []);

  return (
    <MainContainer>
      <Header />
      <MainContentContainer>
        <Steps />
      </MainContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default App;
