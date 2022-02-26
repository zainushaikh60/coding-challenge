import FooterContainer from "../layout/FooterContainer";
import Button from "../ui/Button";
import useGlobalState from "../../store/useGlobalState";

const Footer = () => {
  const { addStep } = useGlobalState();
  const stepsLength = useGlobalState((state) => state.steps.length);

  return (
    <FooterContainer>
      <Button
        icon="add"
        title="step"
        height="h-10"
        onClick={() => addStep(stepsLength)}
      />
    </FooterContainer>
  );
};

export default Footer;
