const SliderContainer = ({ type, children, ...props }) => {
  const containerSize =
    type === "mobile"
      ? {
          width: "13vw",
          height: "21vw",
        }
      : {
          width: "28vw",
          height: "16vw",
        };
  return (
    <div className="sliderContainer" style={containerSize}>
      {children}
    </div>
  );
};

export default SliderContainer;
