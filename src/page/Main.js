import { Header, Banner, Slider } from "../components";

import SliderContent1 from "../SliderContents/SliderContent1";

export default function Main() {
  return (
    <div>
      <Header />
      <hr />
      <div className="container">
        <Banner />
        <Slider id="intro">
          <div className="CardContent" id="content1">
            <SliderContent1 />
          </div>
          <div className="CardContent">웹 개발 관련</div>
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
