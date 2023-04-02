const SliderContainer = ({ type, children, ...props }) => {
  const containerSize =
    type === "mobile"
      ? {
          width: "18vw",
          height: "26vw",
        }
      : {
          width: "32vw",
          height: "22vw",
        };
  return (
    <div className="sliderContainer" style={containerSize}>
      {children}
    </div>
  );
};

export default SliderContainer;
