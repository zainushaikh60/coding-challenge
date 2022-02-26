import PropTypes from "prop-types";

const Button = ({
  height,
  padding,
  title,
  icon,
  isTabButton,
  active,
  onClick,
}) => {
  return (
    <button
      className={`
      text-center
      ${height ? height : "h-8"} 
      ${padding ? padding : "px-4"} 
      ${
        isTabButton
          ? `h-11 px-6 ${
              active ? "bg-white text-primary" : "bg-transparent text-gray-400"
            } capitalize`
          : "text-white bg-primary rounded-md shadow-md"
      }  uppercase text-sm font-black`}
      onClick={onClick}
    >
      {icon && <span className="mx-1">+</span>}
      {title}
    </button>
  );
};

Button.propTypes = {
  height: PropTypes.string,
  padding: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isTabButton: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
