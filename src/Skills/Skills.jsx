import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <section style={{ backgroundColor: "#FDD36A" }}>
      <h3 className="sectionTitle">Skills</h3>
      <div className="gridContainer">
        <div className="skillSetContainer">
          <h5>Front-end</h5>
          <div className="skillIconContainer">
            <Icon icon="logos:html-5" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:css-3" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:javascript" style={{ fontSize: "6rem" }} />
            <Icon icon="skill-icons:jquery" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:typescript-icon" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:react" style={{ fontSize: "6rem" }} />
            <Icon icon="skill-icons:sass" style={{ fontSize: "6rem" }} />
            <Icon
              icon="skill-icons:nextjs-light"
              style={{ fontSize: "6rem" }}
            />
          </div>
        </div>
        <div className="skillSetContainer">
          <h5>Back-end</h5>
          <div className="skillIconContainer">
            <Icon icon="logos:python" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:django-icon" style={{ fontSize: "6rem" }} />
            <Icon icon="skill-icons:flask-dark" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:firebase" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:mysql" style={{ fontSize: "6rem" }} />
            <Icon icon="simple-icons:oracle" style={{ fontSize: "6rem" }} />
          </div>
        </div>
        <div className="skillSetContainer">
          <h5>Deploy</h5>
          <div className="skillIconContainer">
            <Icon icon="mdi:aws" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:firebase" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:vercel" style={{ fontSize: "4rem" }} />
          </div>
        </div>
        <div className="skillSetContainer">
          <h5>Mobile-App</h5>
          <div className="skillIconContainer">
            <Icon icon="skill-icons:react-dark" style={{ fontSize: "6rem" }} />
            <Icon
              icon="skill-icons:flutter-light"
              style={{ fontSize: "6rem" }}
            />
            <Icon icon="logos:dart" style={{ fontSize: "6rem" }} />
          </div>
        </div>
        <div className="skillSetContainer">
          <h5>Version Control</h5>
          <div className="skillIconContainer">
            <Icon icon="mdi:git" style={{ fontSize: "6rem" }} />
            <Icon icon="mdi:github" style={{ fontSize: "6rem" }} />
          </div>
        </div>
        <div className="skillSetContainer">
          <h5>Others</h5>
          <div className="skillIconContainer">
            <Icon icon="logos:elasticsearch" style={{ fontSize: "6rem" }} />
            <Icon icon="skill-icons:figma-dark" style={{ fontSize: "6rem" }} />
            <Icon icon="logos:linux-tux" style={{ fontSize: "6rem" }} />
            <Icon
              icon="vscode-icons:file-type-nginx"
              style={{ fontSize: "6rem" }}
            />
            <Icon
              icon="vscode-icons:file-type-apache"
              style={{ fontSize: "6rem" }}
            />
            <Icon icon="skill-icons:docker" style={{ fontSize: "6rem" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
