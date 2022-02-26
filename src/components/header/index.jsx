import HeaderContainer from "../layout/HeaderContainer";
import Tabbar from "./Tabbar";
import Button from "../ui/Button";

const Header = () => {
  return (
    <HeaderContainer>
      <Tabbar />
      <Button title="Publish Tutorial" />
    </HeaderContainer>
  );
};

export default Header;
