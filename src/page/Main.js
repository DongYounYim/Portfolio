import { Header, Navigation, Banner, Slider } from "../components";

// 임시이미지
import ProfileImage from "../assets/images/gd.jpg";

export default function Main() {
  return (
    <div>
      <Header />
      <hr />
      <Navigation />
      <div className="container">
        <Banner />
        <Slider id="intro">
          <div className="CardContent" id="content1">
            <div className="Card">
              <img src={ProfileImage} />
              <div>
                <h3>안녕하세요, 웹/앱 프론트엔드 개발자 임동윤입니다.</h3>
                <p>
                  사용자에게 편리한 사용경험과 차별화된 서비스를 제공하기 위한
                  개발을 하는 중입니다.
                </p>
                <p>충남대학교 컴퓨터공학과 4학년에 재학중입니다.</p>
              </div>
            </div>
          </div>
          <div className="CardContent" style={{ backgroundColor: "green" }}>
            2
          </div>
          <div className="CardContent" style={{ backgroundColor: "blue" }}>
            3
          </div>
          <div className="CardContent" style={{ backgroundColor: "gray" }}>
            4
          </div>
        </Slider>
        <section style={{ height: "100vh" }}>
          <h1>ㄴㅇㄹㄹ</h1>
        </section>
      </div>
    </div>
  );
}
