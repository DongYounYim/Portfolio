import SliderContainer from "./SliderContainer";

const ImageSlider = ({ type }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>{"<"}</span>
      <SliderContainer type={type} />
      <span>{">"}</span>
    </div>
  );
};

export default ImageSlider;
