import mobileDevelop from "../assets/images/mobileDevelop.png";
import GithubIcon from "../assets/images/githubIcon.png";

import { LinkBadge } from "../components";

const SliderContent3 = () => {
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
        <img src={mobileDevelop} alt="모바일 이미지" />
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
        <h2>웹 언어를 기반으로 모바일 앱 제작도 진행했습니다.</h2>
        <h2>
          React를 기반으로 웹/앱 제작 및 React Native 및 Flutter를 사용하여
          하이브리드 앱 개발을 하는데 관심있고 swift, kotlin을 통해 네이티브 앱
          제작에도 도전하기 위해 공부 중 입니다.
        </h2>
        <h3>제작 애플리케이션</h3>
        <ol className="numbericOrder">
          <li>슬기로운 문화생활 (Design-sprint 교육) - Flutter </li>
          <LinkBadge
            href="https://github.com/DongYounYim/Design_sprint_team6"
            src={GithubIcon}
            alt="githubIcon"
            name="Github"
          />
          <li>달이 들어주는 오늘 (Silicon Valley Internship) - ReactNative</li>
          <LinkBadge
            href="https://github.com/2022-SiliconValleyInternship-IT23"
            src={GithubIcon}
            alt="githubIcon"
            name="Github"
          />
          <li>BoothStamp (월봉고등학교 Flutter 교육) - Flutter</li>
          <LinkBadge
            href="https://github.com/DongYounYim/AlFestival_Booth"
            src={GithubIcon}
            alt="githubIcon"
            name="Github"
          />
          <li>1kmwine - 사장님 앱 (WineOne 여름 인턴) - React JS</li>
          <li>CheerDo (CNU SWAcademy 프로젝트) - React JS</li>
          <LinkBadge
            href="https://github.com/SWAcademy-Team-3/todoclient"
            src={GithubIcon}
            alt="githubIcon"
            name="Github"
          />
        </ol>
      </div>
    </div>
  );
};

export default SliderContent3;
