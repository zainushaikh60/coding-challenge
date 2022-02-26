import PropTypes from "prop-types";

const HeaderContainer = ({ children }) => {
  return (
    <div className="flex sm1:flex-col sm1:mt-1 items-center justify-between bg-gray-100 mr-1">
      {children}
    </div>
  );
};

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderContainer;
