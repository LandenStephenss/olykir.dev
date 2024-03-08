import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faDiscord,
  faSteam,
  faTiktok,
  faReact,
  faInternetExplorer,
  faGithub,
  faNodeJs,
  faFigma,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import React, { useState, useEffect } from "react";

const Projects = [
  {
    title: "Saber",
    description: (
      <>
        A Discord bot for{" "}
        <a
          style={{ textDecoration: "none", color: "var(--text-secondary)" }}
          href="https://vpsnode.org"
        >
          VPSNode
        </a>
      </>
    ),
    tech: [faDiscord, faNodeJs],
    link: "https://github.com",
  },
  {
    title: "WooferDesigner",
    description: "A specialized tool for designing subwoofer enclosures.",
    tech: [faFigma, faReact, faApple],
    link: "https://facebook.com",
  },
];

/**
 * React Component, not a function
 */
function RenderLinkIcon({ link }) {
  if (link.includes("github")) {
    return <FontAwesomeIcon icon={faGithub} />;
  }

  return <FontAwesomeIcon icon={faInternetExplorer} />;
}

function ProjectCard(project) {
  const MouseMoveEvent = (e) => {
    // const { x, y } = e.currentTarget.getBoundingClientRect();
    // console.log(x, y);
    // e.currentTarget.style.setProperty("--x", e.clientX - x + "px");
    // e.currentTarget.style.setProperty("--y", e.clientY - y + "px");
  };

  return (
    <div className="CardContainer" onMouseMove={MouseMoveEvent}>
      <div className="CardContent">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div className="ProjectInfoContainer">
            <h3 className="ProjectName">{project.title}</h3>
            <p className="ProjectDescription">{project.description}</p>
          </div>
          {project.link ? (
            <a
              className="IconLink IconLinkHover"
              style={{ fontSize: "1.5rem" }}
              href={project.link}
            >
              <RenderLinkIcon link={project.link} />
            </a>
          ) : (
            void 0
          )}
        </div>
        <div className="ProjectTechUsedContainer">
          {project.tech.map((ico) => (
            <FontAwesomeIcon className="TechIcon" icon={ico} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TypewriterEffectWithMultipleLines({ lines }) {
  const [currentLine, setCurrentLine] = useState(lines[0]);

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentText.length < currentLine.length) {
      const MinTime = 100;
      const MaxTime = 275;

      const RandomTime = Math.floor(
        Math.random() * (MaxTime - MinTime + 1) + MinTime
      );

      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentLine[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, RandomTime);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      const timeout = setTimeout(() => {
        if (lines.indexOf(currentLine) + 1 >= lines.length) {
          setCurrentLine(lines[0]);
        } else {
          const idx = lines.indexOf(currentLine);
          console.log(idx);
          setCurrentLine(lines[idx + 1]);
        }

        setCurrentIndex(0);
        setCurrentText("");

        // setCurrentText("");
        // setCurrentIndex(1);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, currentLine, currentText, lines]);

  return (
    <span>
      {currentText}
      <span className="TypewriterBar">_</span>
    </span>
  );
}

function App() {
  return (
    <div className="App">
      <body className="HalfNHalf">
        <div className="LeftContainer">
          <div>
            <div className="InformationBoutSelf">
              {" "}
              <h2 className="BigFatTypewriterName">
                <TypewriterEffectWithMultipleLines
                  lines={["Olykir", "Landen", "Oly"]}
                />
              </h2>{" "}
              <br />
              <p className="LittleSmallUndernameTitle">Spaghetti Code Writer</p>
              <br />
              <p className="IntroductionUnderTitle">
                Coding up innovative websites and vanquishing foes across
                fantastical digital planes, this is the nexus showcasing my
                adventures as a{" "}
                <span className="RedUnderline">full-stack developer</span> and
                gaming aficionado.
              </p>
              {/* <p className="IntroductionUnderTitle">
                &emsp;When Im not furiously keyboard-mashing, you'll find me
                questing through fantasy realms, blasting alien scum, or racing
                cyberpunks down a digital street. This site showcases my latest
                coding shenanigans and gameplay highlights from my double life
                as a <span className="RedUnderline">Web Developer</span> by day,
                gaming guerilla by night.
              </p> */}
            </div>
            <br />
            <br />
            <div className="LinksBoutSelf">
              {/*links (icon buttons)*/}
              <a href="https://github.com/LandenStephenss">
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
              <a href="https://discordapp.com/users/621154191192096778">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a href="https://steamcommunity.com/id/ItsOlykir/">
                <FontAwesomeIcon icon={faSteam} />
              </a>
              <a href="https://www.tiktok.com/@olykir">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
        </div>

        <div className="CenterDivider" />

        <div>
          <div className="ProjectListContainer">
            {/* projects (as cards)*/}
            {Projects.map(ProjectCard)}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
