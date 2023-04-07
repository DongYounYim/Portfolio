import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// imageSet
import Port1 from "../../assets/images/Port1.png";
import Todo1 from "../../assets/images/Todo1.png";
import Todo2 from "../../assets/images/Todo2.png";
import Todo3 from "../../assets/images/Todo3.png";
import Todo4 from "../../assets/images/Todo4.png";
import Wine1 from "../../assets/images/1kmwine1.jpeg";
import Wine2 from "../../assets/images/1kmwine2.jpeg";
import Wine3 from "../../assets/images/1kmwine3.jpeg";
import Wine4 from "../../assets/images/1kmwine4.jpeg";
import Booth1 from "../../assets/images/Booth1.jpeg";
import Booth2 from "../../assets/images/Booth2.jpeg";
import Booth3 from "../../assets/images/Booth3.jpeg";
import Booth4 from "../../assets/images/Booth4.jpeg";
import Face1 from "../../assets/images/Face2.png";
import Face2 from "../../assets/images/Face1.png";
import Dae1 from "../../assets/images/Dae1.png";
import Dae2 from "../../assets/images/Dae2.png";
import Dae3 from "../../assets/images/Dae3.png";
import Moon1 from "../../assets/images/Moon1.jpeg";
import Moon2 from "../../assets/images/Moon2.jpeg";
import Moon3 from "../../assets/images/Moon3.png";
import Moon4 from "../../assets/images/Moon4.jpeg";
import Culture1 from "../../assets/images/Culture1.jpeg";
import Culture2 from "../../assets/images/Culture2.jpeg";
import Culture3 from "../../assets/images/Culture3.jpeg";
import Culture4 from "../../assets/images/Culture4.jpeg";
import Music1 from "../../assets/images/Music1.png";
import Music2 from "../../assets/images/Music2.png";
import Music3 from "../../assets/images/Music3.png";
import Music4 from "../../assets/images/Music4.png";
import Music5 from "../../assets/images/Music5.png";

const ImageGroup = {
  Todo: [Todo1, Todo2, Todo3, Todo4],
  Wine: [Wine1, Wine2, Wine3, Wine4],
  Moon: [Moon1, Moon2, Moon3, Moon4],
  Booth: [Booth1, Booth2, Booth3, Booth4],
  Culture: [Culture1, Culture2, Culture3, Culture4],
  Port: [Port1],
  Face: [Face1, Face2],
  Dae: [Dae1, Dae2, Dae3],
  Music: [Music1, Music2, Music3, Music4, Music5],
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
