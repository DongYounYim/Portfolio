import { Spacer, ImageSlider, SlickSlider } from "../components";

const Projects = () => {
  return (
    <section style={{ backgroundColor: "#00ADB5", padding: "2rem" }}>
      <h3 className="sectionTitle">Projects</h3>
      <Spacer type="vertical" size={30}>
        <div className="projectElementDiv">
          <h5>CheerDo</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" groupName="Moon" />
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
                (제작/수정 중) <br />
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
              <ImageSlider type="web" groupName="Moon" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 개인 프로젝트
                <br />
                담당 업무 : Fullstack <br />
                사용 기술/ 툴 : React, JavaScript, Sass, Github <br />
                프로젝트 기간 : 2023.01.05 ~
              </pre>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                (제작중) <br />
                저의 작업물들을 보여주기 위해 포트폴리오 사이트를
                제작하였습니다. <br />
                연혁과 저의 개발자로써 진행한 모든 것들을 포함하려 노력중입니다.{" "}
                <br />
                처음에 시작을 단순히 리액트 프로젝트로 시작하였지만, 동적으로
                변하는 것들이 많지 않기 때문에 추후에 정적 웹페이지로 전환할
                예정이며 Gatsby.js 로 전환할 예정입니다. <br />
              </pre>
              <p>느낀점</p>
              <pre>
                리액트로 프로젝트하는편이 편안해진 상황이여서 리액트로
                만들어야겠다고 단순히 생각하고 시작한 프로젝트 입니다. 하지만
                점점 사이트를 제작하다보니 정적인 콘텐츠가 주가 되었고 단순
                리액트 프로젝트로 만드는 것이 의미 있다고 생각이 들지
                않았습니다. 그래서 단순 HTML, CSS, JS로 다시 만들까
                생각하였는데, 같이 프론트엔드 개발을 했던 친구에게 리액트 기반의
                정적 웹페이지를 만들 수 있는 Gatsby.js 를 알게 되었고 인프런을
                통한 강의 한개를 수료하고 추후에 변경하여 제작할 예정입니다.
              </pre>
            </div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>FaceReconginition OpenSource</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="web" groupName="Moon" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀 프로젝트 (4인) - 프론트 1 / 백엔드 1 / AI 2{" "}
                <br />
                담당 업무 : 프론트엔드개발 <br />
                사용 기술/ 툴 : React, JavaScript, Github <br />
                프로젝트 기간 : 2022.11. ~ 2022.12
              </pre>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                학부 3학년 과목 중 공개소프트웨어실습 과목의 팀프로젝트입니다.
                <br />
                공개소프트웨어 실습과목에서 오픈소스에 대해 알아보고 실제로
                기여까지 해보는 것을 중점적으로 배우게 됐습니다.
                <br />
                실제로 참여해보고 싶은 프로젝트 중 여름 방학 내에 사용했던
                리액트 네이티브 오픈소스 라이브러리에서 버그를 겪었던 re-animate
                같은 것들을 직접 코드를 열어보고 수정해보고 싶었습니다.
                <br />
                하지만 팀프로젝트로 진행해야 했기 때문에, 팀원들간의 협의가
                필요했고, 절충안으로 다 같이 수강하던 기계학습과 관련된
                레포지토리에 기여하게 됐습니다. <br />
                남녀구분 모델에 대해 모델 개선 및 테스팅 페이지 제작을 통해
                오픈소스 기여에 참여하였고, 테스팅 페이지 부분에 프론트엔드
                부분을 맡아 개발하여 참여했습니다.
              </pre>
              <p>느낀점</p>
              <pre>
                오픈소스를 사용만 해봤고 기여를 해보는 경험을 처음으로
                진행했습니다. <br />
                비록 작은 규모의 프로젝트였지만 모르는 사람의 레포지토리에
                기여를 해보는 경험을 통해 모르는 개발자 분과 소통해서 기여하는
                것이 재밌고 의미있던 프로젝트 였습니다. <br />
                작업한 후 PR을 통해 Merge가 됐을 때의 기분이 많이 뿌듯하게
                느꼈기 때문에, 이 후에 오픈소스에 참여할 수 있다는 자신감이
                생겼고, 사용하는 오픈소스 중에 필요한 점이 보인다면 참여를
                반드시 더 해볼 생각입니다.
              </pre>
            </div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>대흥동 문화의집 웹페이지 제작</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="web" groupName="Moon" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀프로젝트 (n명)
                <br />
                담당 업무 : 프론트엔드개발 <br />
                사용 기술/ 툴 : HTML, CSS, JavaScript, Github <br />
                프로젝트 기간 : 2022.05. ~ 2022.11
              </pre>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                학과 내 동아리 활동 중 봉사활동을 위한 웹사이트 제작을
                진행했습니다. <br />
                동아리 내에서 청소년기관의 청소년들이 쉽게 참여할 수 있는 게임
                사이트를 2021년에 제작을 시작하였고, 2022년에 추가 제작을
                담당하여 제작했습니다. <br />총 4가지 게임만 존재했던 사이트에서
                2개의 게임을 추가하고 컴포넌트 조정 및 스코어보드를 만들어
                지속적으로 사이트를 사용할 수 있게 서버이전도 진행하였습니다.
              </pre>
              <p>느낀점</p>
              <pre>
                처음부터 제작한 프로젝트가 아닌 중간에 참여한 프로젝트입니다.
                한참 리액트로만 작업하다가 다시 HTML, CSS, JS로 작업하려니까
                생각보다 버벅이는 부분이 많게 느꼈던 프로젝트입니다. <br />
                그렇기 때문에 기본에 충실하게 코드를 다시 공부해보면서 돔 조작을
                다시 알아보면서 프로젝트에 참여할 수 있었습니다. <br />
              </pre>
            </div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>1kmwine 사장님 앱</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" groupName="Moon" />
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
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                (주)나라셀라의 디지털사업부 인턴으로 합격하게 되어 한달 간
                진행했던 프로젝트 입니다. <br />
                와인 픽&오더 어플리케이션에서 사용자 입장 유저 테스트 진행 및
                버그를 찾는 과정을 진행하였고 코드분석을 하였습니다. 이후
                플랫폼내 판매자(vendor)의 판매과정을 도울 수 있는 사장님 전용
                어플리케이션을 개발했습니다. <br />
                제가 개발한 부분은 판매자가 소유한 와인의 물량을 등록하고 관리
                및 검색할 수 있는 기능과 본 회사와의 1:1 문의, 공지사항 등
                소통할 수 있는 부분을 제작하였습니다. <br />
              </pre>
              <p>느낀점</p>
              <pre>
                처음으로 진행한 인턴경험이라 많이 긴장도하고 떨렸습니다. 우선
                면접시 React와 Elasticsearch, Firebase에 대해서 여쭤보셨는데
                React와 Firebase에 대한 경험은 있었지만 Elasticsearch는 사용해본
                적이 없었습니다. <br />
                그래서 처음 일주일간은 앞서 선배 개발자분들이 만든 사용자 앱
                플랫폼의 코드를 확인하며 코드 스타일 파악과 React 사용법,
                Firebase, Elasticsearch에 대해서 공부하면서 테스팅을 계속
                진행하였습니다. <br />이 후 판매자(관리자) 웹 사이트와 디자인을
                토대로 선배 개발자분과 함께 개발을 진행하였습니다. 매 주
                온보딩을 통해 개발한 내용을 공유하고 어떻게 구현해야할지 애매한
                사항에 대해서는 직접 여쭤보면서 차근차근 코드를 작성해나갔고,
                프로토타입의 디자인과 요구사항에 맞추어 개발해 낼 수 있었습니다.
              </pre>
            </div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>Booth stamp</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" groupName="Moon" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 개인프로젝트
                <br />
                담당 업무 : Fullstack <br />
                사용 기술/ 툴 : Flutter, Dart, Firebase, Figma, Github
                <br />
                프로젝트 기간 : 2022.07 ~ 2022.08
              </pre>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                월봉고등학교 교내 축제인 SW/AI Festival의 부스체험시
                어플리케이션을 통해 스탬프를 모으는 어플리케이션을 개발했습니다.{" "}
                <br />
                부스 체험 후 부스의 스태프에게 QR코드를 받아 QR코드를 찍으면
                도장을 모을 수 있는 형태로 도장을 다 모았을 시 경품추첨에 응모할
                수 있도록 쿠폰을 발급하는 형태입니다. 사용하고 난 쿠폰은
                현장관리자가 비밀번호를 입력해 쿠폰 사용여부를 체크합니다.
              </pre>
              <p>느낀점</p>
              <pre>
                대학교에서 받은 Design-sprint교육을 통해 배운 것이 인상 깊었고,
                Flutter의 발전 가능성과 사용편의성을 토대로 학생들에게 강의할 수
                있는 기회에 7월동안 Flutter로 앱 만드는 강의를 진행했습니다.
                <br />
                매주 토요일마다 4시간 혹은 8시간동안 강의를 진행하면서 빠르게
                하이브리드 앱을 만드는 과정을 보여줬고, 코딩에 관심은 있지만
                코딩의 베이스가 많이 없는 친구들이 대부분이였기 때문에 실습과
                추후에 학습하는 방법 위주로 강의를 진행했습니다. <br />
                원래 학생들의 코드를 받아서 리팩토링하면서 어플리케이션을
                만들려고 했지만, 생각보다는 많은 과정이 진행되지는 않아서
                처음부터 작업을 했습니다. 초창기에 요구사항으로 iPad전용 IOS앱을
                만드는 것을 목표로 하였지만, Xcode를 제가 처음사용해봤기 때문에
                배포를 정상적으로 진행하지 못하였고, Flutter의 장점을 이용해
                웹으로 호스팅하여 사용할 수 있게 하였습니다. <br />
                하루동안 실제 사용하는 트래픽을 모니터링 해볼 수 있어서 소중한
                경험이었고, 외부 패키지 사용에서 오류를 범해 서비스가 종종
                정상적으로 돌아가지 못해 패키지 스펙을 잘 봐야겠다는 교훈을
                얻었습니다.
              </pre>
            </div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>달이 들어주는 오늘</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" groupName="Moon" />
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
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                2022년 여름방학 SilliconValley-internship 프로그램에 참여해
                진행한 프로젝트 입니다. <br />
                어렸을 때 일기를 써가면 선생님께서 코맨트를 달아주시는 것에서
                아이디어를 착안하였고, 바쁜 현대인에게 일상을 기록하고 AI의
                코멘트 통해 위로받는 어플리케이션을 기획했습니다. <br />
                실제 SilliconValley에 위치한 회사인 HeadStart 사의 대표님과 미국
                현지 개발자들의 강연을 오전에 들으면서 오후에는 팀 단위로
                프로젝트를 진행했습니다. <br />
                빠른 하이브리드앱 개발과 React 공부를 더 해보기 위해
                ReactNative를 선택했고, 애뮬레이터 사용이 컴퓨터의 사양문제로
                매우 느렸기 때문에, Expo를 통해 핸드폰으로 실시간 확인하면서
                개발을 진행했습니다.
              </pre>
              <p>느낀점</p>
              <pre>
                온라인 강의를 통해 React를 학습하고 처음으로 프로젝트에 적용해본
                프로젝트였습니다. React와 ReactNative의 차이가 웹 페이지, 앱
                개발의 차이점에서 명확했지만 상태관리 훅이 같고 작동방식이 같은
                점을 알 수 있었고, 나도 앱 개발을 할 수 있겠다고 생각했습니다.
                <br />
                이전까지 프로젝트를 진행할 때 혼자서 혹은 같은 학교의 동기,
                선/후배들과만 진행했었는데, 타 학교의 친구들과 협업하는 과정에서
                기술공유도 많이 될 수 있었고 인맥을 쌓을 수 있어서 좋았습니다.
                <br />
                가장 좋았던 점은 실리콘벨리 현업에서 Front-end 개발자로 일하시는
                Danny Song 멘토님과의 코드 리뷰 과정이 좋았습니다. 프로젝트
                전반적인 폴더구조와 모듈, 컴포넌트화를 시켜야 할 것들을 코드
                하나하나씩 봐주시면서 수정할 수 있도록 도와주셨고, 그것을 토대로
                코드를 정리하다보니 코드가 훨씬 깔끔해지고, 다음부터는
                컴포넌트를 잘 분리해서 만들어야겠다는 다짐을 갖게 됐습니다.
              </pre>
            </div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>슬기로운 문화생활</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="mobile" groupName="Moon" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 팀프로젝트 (5인)
                <br />
                담당 업무 : FullStack <br />
                사용 기술/ 툴 : Flutter, Dart, Firebase, Figma, Github
                <br />
                프로젝트 기간 : 2022.01
              </pre>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                겨울 방학 특강으로 Design-sprint 교육을 받으면서 진행한
                프로젝트로 처음으로 Flutter, Dart, Firebase, Figma를 사용해 첫
                모바일 앱 구현 프로젝트였습니다. <br />
                대전에 놀 거리가 없다라는 것에서 시작해 볼 거리, 즐길 거리를
                한눈에 볼 수 있는 슬기로운 문화생활이라는 어플리케이션을
                제작했습니다. <br />
                기존 놀거리를 확인할 때는 네이버/인스타그램 검색을 통해
                알아봐야만 했는데, 사용자들이 직접 놀 공간을 추가하고 공유함으로
                자유도를 두었고, 또한 버스킹도 등록하여 사람들이 많이 찾아올 수
                있도록 하여, 아티스트들의 홍보성을 넣었습니다.
              </pre>
              <p>느낀점</p>
              <pre>
                Desgin-sprint : 빠르게 아이디어 도출하고 앱 개발하기라는 교육을
                통해서 프로젝트 개발/ 진행에 대해 많을 것을 배울 수 있었습니다.
                <br />
                우선 아이디어 도출과정에서 브레인스토밍, voting과정, paper
                prototype 등을 사용해 프로젝트 아이디어 도출과정을 재밌게 진행할
                수 있었습니다. 더하여 Figma라는 프로토타이핑 툴을 처음
                사용함으로써 앱의 디자인 설계를 진행할 수 있었고, 짧은 시간동안
                Flutter/Dart 공식문서 사용해 언어를 배우고 사용하는 과정을
                겪으면서 공식 문서의 유용함을 알 수 있었고, 다른 언어를 배울
                때도 공식문서를 통해 학습하게 됐습니다.
              </pre>
            </div>
          </div>
        </div>
        <div className="projectElementDiv">
          <h5>CNmusicFesta 홈페이지</h5>
          <div className="projectContent">
            <div>
              <ImageSlider type="web" groupName="Moon" />
              <pre style={{ textAlign: "left" }}>
                프로젝트 형태 : 개인프로젝트
                <br />
                담당 업무 : FullStack <br />
                사용 기술/ 툴 : HTML, CSS, JavaScript, Apache, AWS, Github
                <br />
                프로젝트 기간 : 2021.09 ~ 2021.12
              </pre>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>프로젝트 개요</p>
              <pre>
                2021년 웹 프로그래밍 교과목의 텀프로젝트 및 충청남도청의
                CNMusicFestival 페이지 개발 외주로 진행한 프로젝트 입니다.
                <br />웹 프로그래밍 교과목을 통해 처음 HTML, CSS, JS를
                학습하면서 텀프로젝트 주제로 뭘 할지를 고민하다가, 지인이
                연관되어 있는 CNMusicFesta 홈페이지를 만들어줄 수 있겠냐는 말에
                학습목적으로 시작했습니다. CSS 템플릿과 자료들을 받아서
                홈페이지를 구성하는 역할을 하였습니다. <br />
                처음으로 AWS를 통해 웹 페이지 호스팅을 진행하였고 직접 수정된
                페이지를 업데이트를 하였습니다.
              </pre>
              <p>느낀점</p>
              <pre>
                처음 웹페이지 개발을 진행했기 때문에 학교 과정보다 빠르게
                학습해야했지만 개발 속도는 느리게 진행됐습니다. 그래서 행사
                날짜가 개발도중에도 진행됐기 때문에 행사 홍보 페이지를 빠르게
                구성하여 배포하였고, 지속적인 수정을 통해 관리를 하였습니다.
                AWS의 free-tier통해서 페이지 배포를 진행하였고 트래픽이 그렇게
                많지는 않았기 때문에 느리긴했지만 페이지는 버틸 수 있었습니다.
                <br />이 과정에서 실제 서비스를 배포함으로 많지는 않지만
                유저들이 접속해서 사용하는 것을 확인할 수 있었고, 내가 실제
                이용되는 서비스를 만든다는 것에 큰 기쁨을 얻을 수 있었습니다.
                그렇기 때문에 많이 부족한 페이지였다고 생각하지만 웹 페이지
                개발에 큰 관심을 가질 수 있었고 개발자로써 동기부여를 얻은 가장
                큰 프로젝트 입니다.
              </pre>
            </div>
          </div>
        </div>
      </Spacer>
    </section>
  );
};

export default Projects;
