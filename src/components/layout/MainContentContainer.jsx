import PropTypes from "prop-types";
import { Scrollbars } from "react-custom-scrollbars-2";

const MainContentContainer = ({ children }) => {
  return (
    <Scrollbars className="h-full bg-white" autoHide>
      {children}
    </Scrollbars>
  );
};

MainContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContentContainer;
