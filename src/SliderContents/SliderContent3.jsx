import mobileDevelop from "../assets/images/mobileDevelop.png";
import GithubIcon from "../assets/images/githubIcon.png";
import PDFImage from "../assets/images/pdfIcon.webp";

import { LinkBadge, Spacer } from "../components";

const SliderContent3 = () => {
  // TODO 파일 다운로드 구현하기
  return (
    <div
      style={{ display: "flex", height: "-webkit-fill-available" }}
      className="CardContent pebbleBackground"
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={mobileDevelop} alt="모바일 이미지" className="CardImage" />
      </div>
      <div className="CardText">
        <h5>제작 애플리케이션 (프로젝트)</h5>
        <ol className="numbericOrder">
          <li>슬기로운 문화생활 (Design-sprint 교육) - Flutter </li>
          <LinkBadge
            href="https://github.com/DongYounYim/Design_sprint_team6"
            src={GithubIcon}
            alt="githubIcon"
            name="Github"
          />
          <li>달이 들어주는 오늘 (Silicon Valley Internship) - ReactNative</li>
          <Spacer>
            <LinkBadge
              href="https://github.com/2022-SiliconValleyInternship-IT23"
              src={GithubIcon}
              alt="githubIcon"
              name="Github"
            />
            <LinkBadge
              href="./src/files/SVIntership.pdf"
              src={PDFImage}
              alt="pdfDownload"
              name="PDF"
              download={true}
            />
          </Spacer>
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
