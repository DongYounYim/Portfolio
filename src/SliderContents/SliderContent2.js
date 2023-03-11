import WebDevelop from "../assets/images/webDevelop.png";

const SliderContent2 = () => {
  return (
    <div
      style={{ display: "flex", height: "-webkit-fill-available" }}
      className="pebbleBackground"
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={WebDevelop} placeholder="프로필 이미지" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          margin: "0 16px",
          justifyContent: "center",
        }}
      >
        <h2>HTML5, CSS3, JavaScript 기반으로 웹 개발 공부를 시작했습니다. </h2>
        <h2>
          현재는 React 기반의 웹페이지를 주로 제작하며, TypeScript, SCSS,
          Next.js 등 웹 개발에 관련된 기술스택들을 습득 중 입니다.
        </h2>
        <h3>제작 웹 페이지</h3>
        <ol>
          <li>CNMusicFestival 홍보 홈페이지 제작</li>
          <li>2022 엔지니어링페어 컴퓨터융합학부 행사 페이지 제작</li>
          <li>Open Source 기여 남여인식모델 테스트 페이지 제작</li>
          <a href="https://github.com/mooooondh/FaceRecognition">
            https://github.com/mooooondh/FaceRecognition
          </a>
          <li>대전 중구 대흥동 문화의 집 웹 페이지 제작 봉사활동 참여</li>
          <a href="https://github.com/4RG0S/2021-web-creation-volunteer">
            https://github.com/4RG0S/2021-web-creation-volunteer
          </a>
        </ol>
      </div>
    </div>
  );
};

export default SliderContent2;
