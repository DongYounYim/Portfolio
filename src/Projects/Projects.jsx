import { Spacer, ImageSlider } from "../components";

const Projects = () => {
  return (
    <section style={{ backgroundColor: "#00ADB5", padding: "2rem" }}>
      <h3 className="sectionTitle">Projects</h3>
      <Spacer type="vertical" size={30}>
        <div className="projectElementDiv">
          <h5>CheerDo</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀 프로젝트 (3인) - 프론트1 / 백엔드 2<br />
                담당 업무 : 팀원 / 프론트엔드 개발 <br />
                사용 기술/ 툴 : React, JavaScript, Sass, Figma, Slack, Github
                <br />
                프로젝트 기간 : 2022.12.17 ~
              </pre>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                CNU SWAcademy 동계 프론트엔드과정 중 팀프로젝트로 진행한
                프로젝트 입니다. <br />
                TodoList 앱인 Todomate와 2022년 크리스마스에 유행한 진저트리를
                결합시키는 아이디어로 진행하였습니다. <br />
                핵심 기능으로 친구의 TodoList를 확인하고 플랫폼 내에서 서로
                응원메세지를 보내어 서로의 할 일 및 습관을 응원합니다. <br />
                또한 습관을 설정하여 본인의 습관 진행도를 파악하며 지속적인
                습관을 만들어 나갈 수 있고 월별 투두리스트 진행도를 확인하여 할
                일을 해나가는 것에 대한 뿌듯함과 기록을 남길 수 있습니다.
              </pre>
              <p>느낀점</p>
              <pre>
                팀 프로젝트를 진행하면서 처음으로 혼자서 프론트엔드 업무를
                맡아서 진행하였는데, 프로젝트 디자인을 하면서 동계과정 내
                React강의 내에서 배운 컴포넌트 설계를 어떻게 해야할지 많은
                고민을 했습니다. 이런 경험이 처음이라 중간중간 리팩토링을 하여도
                코드가 지저분하다고 느끼긴 했지만 컴포넌트 설계과정을 얻어갈 수
                있었습니다. <br />
                또한, Sass를 처음 적용 시켜 style의 일관성을 유지해보았고, 외부
                패키지를 사용하는 대신 최대한 손수 컴포넌트를 제작하여
                애니매이션 처리라던지 css적인 요소를 많이 배워볼 수 있었습니다.
                <br />
                기본 JavaScript 강의, React 강의를 들으면서 진행하는
                프로젝트였기 때문에 초반에 이상하게 설계된 코드들이 많이 보여서
                수정하는 과정이 재미있었고, 배포까지 진행해보기 위해 현재 사이드
                프로젝트로 팀원들과 계속해서 진행중 입니다.
              </pre>
            </div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>Portfolio</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="web" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 개인 프로젝트
                <br />
                담당 업무 : Fullstack <br />
                사용 기술/ 툴 : React, JavaScript, Sass, Github <br />
                프로젝트 기간 : 2023.01.05 ~
              </pre>
            </div>
            <div>프로젝트 간단 설명</div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>FaceReconginition OpenSource</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="web" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀 프로젝트 (4인) - 프론트 1 / 백엔드 1 / AI 2{" "}
                <br />
                담당 업무 : 프론트엔드개발 <br />
                사용 기술/ 툴 : React, JavaScript, Github <br />
                프로젝트 기간 : 2022.11. ~ 2022.12
              </pre>
            </div>
            <div>프로젝트 간단 설명</div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>대흥동 문화의집 웹페이지 제작</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="web" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀프로젝트 (n명)
                <br />
                담당 업무 : 프론트엔드개발 <br />
                사용 기술/ 툴 : HTML, CSS, JavaScript, Github <br />
                프로젝트 기간 : 2022.05. ~ 2022.11
              </pre>
            </div>
            <div>프로젝트 간단 설명</div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>1kmwine 사장님 앱</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀프로젝트 (n명)
                <br />
                담당 업무 : 프론트엔드개발 <br />
                사용 기술/ 툴 : React, Eslint, Mui, Elasticsearch, Firebase,
                Slack, Github
                <br />
                프로젝트 기간 : 2022.08
              </pre>
            </div>
            <div>프로젝트 간단 설명</div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>Booth stamp</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 개인프로젝트
                <br />
                담당 업무 : Fullstack <br />
                사용 기술/ 툴 : Flutter, Dart, Firebase, Figma, Github
                <br />
                프로젝트 기간 : 2022.07 ~ 2022.08
              </pre>
            </div>
            <div>프로젝트 간단 설명</div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>달이 들어주는 오늘</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀프로젝트 (5인)
                <br />
                담당 업무 : 프론트엔드, 클라우드 <br />
                사용 기술/ 툴 : ReactNative, Expo, Oracle Cloud, Nginx,
                Gunicorn, Figma, Github
                <br />
                프로젝트 기간 : 2022.06 ~ 2022.07
              </pre>
            </div>
            <div>프로젝트 간단 설명</div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>슬기로운 문화생활</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀프로젝트 (5인)
                <br />
                담당 업무 : FullStack <br />
                사용 기술/ 툴 : Flutter, Dart, Firebase, Figma, Github
                <br />
                프로젝트 기간 : 2022.01
              </pre>
            </div>
            <div>프로젝트 간단 설명</div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>CNmusicFesta 홈페이지</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="web" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 개인프로젝트
                <br />
                담당 업무 : FullStack <br />
                사용 기술/ 툴 : HTML, CSS, JavaScript, Apache, AWS, Github
                <br />
                프로젝트 기간 : 2022.06 ~ 2022.07
              </pre>
            </div>
            <div>프로젝트 간단 설명</div>
          </div>
        </div>
      </Spacer>
    </section>
  );
};

export default Projects;
