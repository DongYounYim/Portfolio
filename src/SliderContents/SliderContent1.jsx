// image
import profileImg from "../assets/images/profile.jpg";

const SliderContent1 = () => {
  return (
    <div style={{ display: "flex" }} className="CardContent" id="content1">
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={profileImg} alt="프로필 이미지" className="CardImage" />
      </div>
      <div style={{ flex: 1, margin: "0 16px" }}>
        <h2>안녕하세요</h2>
        <h2>프론트엔드 개발자 임동윤입니다.</h2>
        <span>
          편리한 사용경험과 차별화된 서비스를 제공하는 프론트에드 개발자입니다.
        </span>
        <br />
        <span>
          현재 충남대학교 컴퓨터공학과 학부 4학년으로 공부 중이며, 프론트,
          백엔드뿐만 아니라 CS 전반적인 지식을 기반으로 좋은 프로그램을 개발하려
          노력 중입니다.
        </span>
        <div className="history">
          <div>
            <h4>2018</h4>
            <ol>
              <li>천안중앙고등학교 48회 졸업</li>
              <li>충남대학교 컴퓨터공학과 18학번 입학</li>
            </ol>
          </div>
          <div>
            <h4>2019</h4>
            <ol>
              <li>군 휴학</li>
            </ol>
          </div>
          <div>
            <h4>2021</h4>
            <ol>
              <li>육군 예비역 하사 제대 / 군 복학</li>
              <li>CN Music Festival 홍보 홈페이지 제작</li>
            </ol>
          </div>
          <div>
            <h4>2022</h4>
            <ol>
              <li>Design Sprint 교육 수료</li>
              <li>2022 컴퓨터 융합학부 학생회 MEMORY 기획부장</li>
              <li>충남대학교 보안 정보 동아리 ARGOS 기획부장</li>
              <li>2022 Sillicon Valley Internship 수료</li>
              <li>천안 월봉고등학교 교육 봉사 (Flutter교육)</li>
              <li>(주)나라셀라(WINEONE) 디지털 사업부 팀 인턴</li>
              <li>대흥동 문화의 집 웹 페이지 제작 봉사활동 참여</li>
            </ol>
          </div>
          <div>
            <h4>2023</h4>
            <ol>
              <li>충남대학교 보안 정보 동아리 ARGOS 부회장</li>
              <li>네이버 커넥트 재단 1784 스쿨혁명 멘토 참여</li>
              <li>CNU SWAcademy 프론트엔드 과정 수료</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderContent1;
