import PropTypes from "prop-types";

const MainContainer = ({ children }) => {
  return <div className="container h-full flex flex-col">{children}</div>;
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
