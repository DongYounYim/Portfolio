import { Header, Navigation, Banner, Slider } from "../components";

// 임시이미지
import introImage from "../assets/images/intro.png";

export default function Main() {
  return (
    <div>
      <Header />
      <hr />
      <div className="container">
        <Banner />
        <Slider id="intro">
          <div className="CardContent" id="content1">
            <img className="CardImage" src={introImage} />
          </div>
          <div className="CardContent">
            <div>다양한 프로젝트 경험을 통한 경험치 축적</div>
          </div>
          <div className="CardContent">
            <div>지속적인 공부를 통한 성장 욕심</div>
          </div>
          <div className="CardContent">
            <div>
              프론트엔드 뿐만아니라 백엔드 Cloud 보안에 모든 관심을 두고
              있습니다.
            </div>
          </div>
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
