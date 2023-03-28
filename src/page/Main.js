import { Header, Banner, Slider } from "../components";

import {
  SliderContent1,
  SliderContent2,
  SliderContent3,
} from "../SliderContents";
import { Aboutme } from "../Aboutme";
import { Skills } from "../Skills";

export default function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <section id="intro" style={{ backgroundColor: "#f3e8eb" }}>
        <h3 className="sectionTitle" style={{ color: "black" }}>
          Abstract
        </h3>
        <Slider>
          <SliderContent1 />
          <SliderContent2 />
          <SliderContent3 />
        </Slider>
      </section>
      <Skills />
      <Aboutme />
    </div>
  );
}
