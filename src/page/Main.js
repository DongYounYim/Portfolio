import { Header, Banner, Slider } from "../components";

import SliderContent1 from "../SliderContents/SliderContent1";
import SliderContent2 from "../SliderContents/SliderContent2";

export default function Main() {
  return (
    <div>
      <Header style={{ marginBottom: "16px " }} />
      <div className="container">
        <Banner />
        <Slider id="intro">
          <div className="CardContent" id="content1">
            <SliderContent1 />
          </div>
          <div className="CardContent">
            <SliderContent2 />
          </div>
          <div className="CardContent">모바일 관련</div>
          <div className="CardContent">기타</div>
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
    </div>
  );
}
