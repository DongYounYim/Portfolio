import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// imageSet
import Moon1 from "../../assets/images/Moon1.png";
import Moon2 from "../../assets/images/Moon2.png";
import Moon3 from "../../assets/images/Moon3.png";
import Moon4 from "../../assets/images/Moon4.png";

const ImageGroup = {
  Moon: [Moon1, Moon2, Moon3, Moon4],
};

export default function SliderItem() {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {ImageGroup["Moon"].map((val, index) => (
        <img src={val} alt="Moon" key={index} />
      ))}
    </Slider>
  );
}
