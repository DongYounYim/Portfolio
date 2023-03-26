import { Header, Banner, Slider } from "../components";

import {
  SliderContent1,
  SliderContent2,
  SliderContent3,
} from "../SliderContents";
import { Aboutme } from "../Aboutme";

export default function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <section id="intro" style={{ backgroundColor: "#f3e8eb" }}>
        <h3 className="sectionTitle" style={{ color: "black" }}>
          Abstract
        </h3>
        <Slider>
          <SliderContent1 />
          <SliderContent2 />
          <SliderContent3 />
        </Slider>
      </section>
      <section style={{ backgroundColor: "#FDD36A" }}>
        <h3 className="sectionTitle">Skills</h3>
        <div>
          <h5>Front-end</h5>
          <p>HTML5, CSS, JavaScript, jQuery, TypeScript, React, Sass, NextJS</p>
          <h5>Mobile-App</h5>
          <p>React Native, Flutter, Dart</p>
          <h5>Back-end</h5>
          <p>Python, Django, Flask, Firebase, MySQL, Oracle</p>
          <h5>Deploy</h5>
          <span>AWS, Naver Cloud, Firebase, Vercel</span>
        </div>
      </section>
      <Aboutme />
    </div>
  );
}
