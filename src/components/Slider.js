import { useState, useRef } from "react";

const Slider = ({ children, id }) => {
  const [state, setState] = useState(0);
  const scrollRef = useRef();
  const handleMoveLeft = () => {
    if (state !== 0) {
      setState(state - 1);
    }
  };

  const handleMoveRight = () => {
    setState(state + 1);
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={handleMoveLeft}>왼쪽</button>
      <section
        id={id}
        className="slider"
        ref={scrollRef}
        style={{ transform: `scrollX(${state * 100}%)`, fontSize: "16px" }}
      >
        {children}
      </section>
      <button onClick={handleMoveRight}>오른쪽</button>
    </div>
  );
};

export default Slider;
