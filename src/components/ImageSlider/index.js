import SliderContainer from "./SliderContainer";
import SliderItem from "./SliderItem";

const ImageSlider = ({ type, groupName }) => {
  return (
    <div
      style={{
        display: "inline-block",
      }}
    >
      <SliderContainer type={type}>
        <SliderItem groupName={groupName} />
      </SliderContainer>
    </div>
  );
};

export default ImageSlider;
