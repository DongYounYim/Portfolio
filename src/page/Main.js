import { Header, Banner, Slider } from "../components";

import {
  SliderContent1,
  SliderContent2,
  SliderContent3,
} from "../SliderContents";
import { Aboutme } from "../Aboutme";

export default function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <section id="intro" style={{ backgroundColor: "#f3e8eb" }}>
        <h3 className="sectionTitle">Abstract</h3>
        <Slider>
          <SliderContent1 />
          <SliderContent2 />
          <SliderContent3 />
        </Slider>
      </section>
      <Aboutme />
    </div>
  );
}
