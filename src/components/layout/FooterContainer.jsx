import PropTypes from "prop-types";

const FooterContainer = ({ children }) => {
  return (
    <div className="bg-white p-2 border-t flex justify-center">{children}</div>
  );
};

FooterContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterContainer;
