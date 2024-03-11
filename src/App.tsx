import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faDiscord,
  faSteam,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import React from "react";

// Components
import ProjectCard from "./components/ProjectCard.tsx";
import TypewriterEffectWithMultipleLines from "./components/Typewriter.tsx";
import TechCard from "./components/TechCard.tsx";

import { Projects, UsedTech } from "./constants.tsx";

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
