import Button from "../ui/Button";

const Tabbar = () => {
  return (
    <div className="sm1:order-2 sm1:mt-2">
      <Button title="English" isTabButton={true} active />
      <Button title="Deutsch" isTabButton={true} />
    </div>
  );
};

export default Tabbar;
