import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// imageSet
import Wine1 from "../../assets/images/1kmwine1.jpeg";
import Wine2 from "../../assets/images/1kmwine2.jpeg";
import Wine3 from "../../assets/images/1kmwine3.jpeg";
import Wine4 from "../../assets/images/1kmwine4.jpeg";
import Booth1 from "../../assets/images/Booth1.jpeg";
import Booth2 from "../../assets/images/Booth2.jpeg";
import Booth3 from "../../assets/images/Booth3.jpeg";
import Booth4 from "../../assets/images/Booth4.jpeg";
import Moon1 from "../../assets/images/Moon1.jpeg";
import Moon2 from "../../assets/images/Moon2.jpeg";
import Moon3 from "../../assets/images/Moon3.png";
import Moon4 from "../../assets/images/Moon4.jpeg";
import Culture1 from "../../assets/images/Culture1.jpeg";
import Culture2 from "../../assets/images/Culture2.jpeg";
import Culture3 from "../../assets/images/Culture3.jpeg";
import Culture4 from "../../assets/images/Culture4.jpeg";

const ImageGroup = {
  Todo: [],
  Wine: [Wine1, Wine2, Wine3, Wine4],
  Moon: [Moon1, Moon2, Moon3, Moon4],
  Booth: [Booth1, Booth2, Booth3, Booth4],
  Culture: [Culture1, Culture2, Culture3, Culture4],
  Port: [],
  Face: [],
  Dae: [],
  Music: [],
};

export default function SliderItem({ groupName }) {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {ImageGroup[groupName].map((val, index) => (
        <img src={val} alt="Moon" key={index} />
      ))}
    </Slider>
  );
}
