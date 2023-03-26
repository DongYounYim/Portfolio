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
            <h5>이름</h5>
            <p>임동윤</p>
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
            <h5>생년월일</h5>
            <p>1999/09/02</p>
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
            <h5>학력</h5>
            <p>충남대학교 컴퓨터공학과</p>
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
            <h5>이메일</h5>
            <p>dyyim4725@gmail.com</p>
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
            <h5>연락처</h5>
            <p>010-9442-4725</p>
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
            <h5>MBTI</h5>
            <p>ESTJ</p>
          </div>
        </div>
      </div>
      <p
        className="sectionParagraph"
        style={{ backgroundColor: "#dbc1ad", margin: 10 }}
      >
        외주/사이드프로젝트협업/강의 문의 환영합니다.
      </p>
    </section>
  );
};

export default Aboutme;
