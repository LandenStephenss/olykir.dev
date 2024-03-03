import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faDiscord,
  faSteam,
  faTiktok,
  faReact,
  faNode,
  faInternetExplorer,
  faGithub,
  faNodeJs,
  faFigma,
  faApple,
  faAndroid,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import React from "react";

const Projects = [
  {
    title: "Saber",
    description: "A Discord bot for VPSNode.",
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
  return (
    <div className="CardContainer">
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
              <h2 className="BigFatTypewriterName">Olykir</h2>{" "}
              {/* maybe do cool typewriter effect with bunch of different aliases */}
              <p className="LittleSmallUndernameTitle">
                Awesome Sauce Spaghetti Code
              </p>
            </div>
          </div>
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
