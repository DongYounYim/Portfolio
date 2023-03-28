import { Ulept } from "../";

export default function Banner() {
  return (
    <div className="Banner">
      <div className="ParagraphDiv">
        <h3>
          프론트엔드 개발자 <Ulept>임동윤</Ulept>입니다.
        </h3>
        <h5>
          편리한 <Ulept>유저사용경험</Ulept>과 <Ulept>차별화된 서비스</Ulept>를
          제공하려 노력중입니다.
        </h5>
        <a className="BorderTextBox" href="#intro">
          Get Start
        </a>
      </div>
    </div>
  );
}
