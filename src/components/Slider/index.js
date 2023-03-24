import { useState, useRef, useEffect, useCallback } from "react";
import useTimeoutFn from "../../hooks/useTimeoutFn";

const Slider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [state, setState] = useState(0);
  const scrollRef = useRef();

  const handleMoveRight = () => {
    if (state < children.length) {
      setState(state + 1);
      scrollRef.current.scrollTo({
        top: 0,
        left: (state + 1) * width,
        behavior: "smooth",
      });
    } else {
      setState(0);
      scrollRef.current.scrollRef({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
    scrollRef.current.scrollTo({
      top: 0,
      left: state * window.innerWidth,
      behavior: "smooth",
    });
  }, [state]);

  const [run] = useTimeoutFn(() => {
    if (state < children.length - 1) {
      handleMoveRight();
    } else {
      setState(0);
      scrollRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, 5000);

  useEffect(() => {
    run();
  }, [state, run]);

  useEffect(() => {
    setWidth(window.innerWidth);
    scrollRef.current.scrollTo({
      top: 0,
      left: state * width,
      behavior: "smooth",
    });
    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, [handleResize, state, width, setWidth]);

  return (
    <div
      id="slider"
      style={{ transform: `scrollX(${state * 100}%)` }}
      ref={scrollRef}
    >
      {children}
    </div>
  );
};

export default Slider;
