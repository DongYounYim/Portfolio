import { Header, Banner, Slider } from "../components";

import {
  SliderContent1,
  SliderContent2,
  SliderContent3,
} from "../SliderContents";

export default function Main() {
  return (
    <div>
      <Header style={{ marginBottom: "16px " }} />
      <Banner />
      <Slider>
        <SliderContent1 />
        <SliderContent2 />
        <SliderContent3 />
      </Slider>
      <section style={{ height: "100vh" }}>
        <div style={{ display: "flex" }}>
          <div>
            <h3>하나하나</h3>
          </div>
          <p>둘둘</p>
        </div>
        <div>
          <p>더알아보기</p>
        </div>
      </section>
    </div>
  );
}
