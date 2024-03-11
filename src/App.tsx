import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faDiscord,
  faSteam,
  faTiktok,
  faReact,
  faNodeJs,
  faFigma,
  faApple,
  faDocker,
  faCloudflare,
  faHtml5,
  faSquareJs,
  faGitAlt,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import React from "react";

// Components
import ProjectCard from "./components/ProjectCard.tsx";
import TypewriterEffectWithMultipleLines from "./components/Typewriter.tsx";

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

const UsedTech = [
  {
    icon: faReact,
    url: "https://google.com",
  },
  {
    icon: faGitAlt,
    url: "https://github.com",
  },
  {
    icon: faFigma,
    url: "https://figma.com",
  },
  {
    icon: faDocker,
    url: "",
  },
  {
    icon: faCloudflare,
    url: "https://cloudflare.com",
  },
  {
    icon: faHtml5,
    url: "",
  },
  {
    icon: faSquareJs,
    url: "",
  },
  {
    icon: faNodeJs,
    url: "",
  },
  {
    icon: faSass,
    url: "",
  },
];

function TechCard(tech) {
  console.log(tech);
  return (
    <a href={tech.url}>
      <div className="TechUsedCard">
        <FontAwesomeIcon icon={tech.icon} />
      </div>
    </a>
  );
}

function App() {
  return (
    <div className="AppGrid">
      <div className="GridInfoArea">
        <div className="InformationBoutSelf">
          <h2 className="BigFatTypewriterName">
            <TypewriterEffectWithMultipleLines
              lines={["Olykir", "Landen", "Oly"]}
            />
          </h2>

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

      <div className="GridTechnologyArea">
        <br />
        <br />
        <h1 className="Header">Technology I've Used</h1>
        <br />
        <div className="TechUsedContainer">{UsedTech.map(TechCard)}</div>
      </div>

      <div className="CenterDivider" />

      <div className="TechDivider" />

      <div className="GridProjectsArea">
        <h1 className="Header ProjectsHeader">Projects</h1>
        <div className="ProjectListContainer">
          {/* projects (as cards)*/}
          {Projects.map(ProjectCard)}
        </div>
      </div>
    </div>
  );
}

export default App;
