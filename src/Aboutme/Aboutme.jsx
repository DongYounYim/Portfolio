import { Icon } from "../components";

const Aboutme = () => {
  return (
    <section style={{ backgroundColor: "#E7AB9A" }}>
      <h3 className="sectionTitle">About me</h3>
      <div className="gridContainer">
        <div className="icon-text-flex-container">
          <Icon
            name="user"
            size={32}
            color="white"
            style={{ padding: "0 8px" }}
          />
          <div>
            <h4>이름</h4>
            <span>임동윤</span>
          </div>
        </div>
        <div className="icon-text-flex-container">
          <Icon
            name="calendar"
            size={32}
            color="white"
            style={{ padding: "0 8px" }}
          />
          <div>
            <h4>생년월일</h4>
            <span>1999/09/02</span>
          </div>
        </div>
        <div className="icon-text-flex-container">
          <Icon
            name="book-open"
            size={32}
            color="white"
            style={{ padding: "0 8px" }}
          />
          <div>
            <h4>학력</h4>
            <span>충남대학교 컴퓨터공학과</span>
          </div>
        </div>
        <div className="icon-text-flex-container">
          <Icon
            name="mail"
            size={32}
            color="white"
            style={{ padding: "0 8px" }}
          />
          <div>
            <h4>이메일</h4>
            <span>dyyim4725@gmail.com</span>
          </div>
        </div>
        <div className="icon-text-flex-container">
          <Icon
            name="phone"
            size={32}
            color="white"
            style={{ padding: "0 8px" }}
          />
          <div>
            <h4>연락처</h4>
            <span>010-9442-4725</span>
          </div>
        </div>
        <div className="icon-text-flex-container">
          <Icon
            name="info"
            size={32}
            color="white"
            style={{ padding: "0 8px" }}
          />
          <div>
            <h4>MBTI</h4>
            <span>ESTJ</span>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#dbc1ad", margin: "40px" }}>
        <p>외주/사이드프로젝트협업/강의 문의 환영합니다. </p>
      </div>
    </section>
  );
};

export default Aboutme;
