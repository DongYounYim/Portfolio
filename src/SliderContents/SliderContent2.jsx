import { LinkBadge, Spacer } from "../components";

import WebDevelop from "../assets/images/webDevelop.png";
import GithubIcon from "../assets/images/githubIcon.png";

const SliderContent2 = () => {
  return (
    <div style={{ display: "flex" }} className="CardContent pebbleBackground">
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={WebDevelop} alt="웹 이미지" className="CardImage" />
      </div>
      <div className="CardText">
        <h5>제작 웹 페이지 (프로젝트)</h5>
        <ol className="numbericOrder">
          <li>CNMusicFestival 홍보 홈페이지 제작</li>
          <li>2022 엔지니어링페어 컴퓨터융합학부 행사 페이지 제작</li>
          <li>Open Source 기여 남여인식모델 테스트 페이지 제작</li>
          <LinkBadge
            href="https://github.com/mooooondh/FaceRecognition"
            src={GithubIcon}
            alt="githubIcon"
            name="Github"
          />
          <li>대전 중구 대흥동 문화의 집 웹 페이지 제작 봉사활동 참여</li>
          <Spacer type="horizontal" size={8}>
            <LinkBadge
              href="https://github.com/4RG0S/2021-web-creation-volunteer"
              src={GithubIcon}
              alt="githubIcon"
              name="Github"
            />
            <LinkBadge
              href="https://culture.argos.or.kr/index.html"
              alt="home"
              name="WebPage"
              isIcon={true}
            />
          </Spacer>
        </ol>
      </div>
    </div>
  );
};

export default SliderContent2;
