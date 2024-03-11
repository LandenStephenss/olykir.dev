import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faSteam,
  faTiktok,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Styles from "./App.module.scss";
import React, { ComponentProps } from "react";

// Components
import ProjectCard from "./components/ProjectCard.tsx";
import TypewriterEffectWithMultipleLines from "./components/Typewriter.tsx";
import TechCard from "./components/TechCard.tsx";
import { useInput, TextInput, ButtonInput } from "./components/Input.tsx";

import { Projects, UsedTech } from "./constants.tsx";

function InformationAboutSelf() {
  return (
    <div className={Styles.GridInfoArea}>
      <div className={Styles.InformationBoutSelf}>
        <h2 className={Styles.BigFatTypewriterName}>
          <TypewriterEffectWithMultipleLines
            lines={["Olykir", "Landen", "Oly"]}
          />
        </h2>

        <br />
        <p className={Styles.LittleSmallUndernameTitle}>
          Spaghetti Code Writer
        </p>
        <br />
        <p className={Styles.IntroductionUnderTitle}>
          Coding up innovative websites and vanquishing foes across fantastical
          digital planes, this is the nexus showcasing my adventures as a{" "}
          <span className={Styles.RedUnderline}>full-stack developer</span> and
          gaming aficionado.
        </p>
        {/* <p className={Styles.IntroductionUnderTitle}>
                &emsp;When Im not furiously keyboard-mashing, you'll find me
                questing through fantasy realms, blasting alien scum, or racing
                cyberpunks down a digital street. This site showcases my latest
                coding shenanigans and gameplay highlights from my double life
                as a <span className={Styles.RedUnderline}>Web Developer</span> by day,
                gaming guerilla by night.
              </p> */}
      </div>
      <br />
      <br />
      <div className={Styles.LinksBoutSelf}>
        {/*links (icon buttons)*/}
        <a
          href="https://github.com/LandenStephenss"
          aria-label="My GitHub Profile"
        >
          <FontAwesomeIcon icon={faGitAlt} />
        </a>
        <a href="https://discordapp.com/users/621154191192096778">
          <FontAwesomeIcon icon={faDiscord} aria-label="My Discord Profile" />
        </a>
        <a href="https://steamcommunity.com/id/ItsOlykir/">
          <FontAwesomeIcon icon={faSteam} aria-label="My Steam Profile" />
        </a>
        <a href="https://www.tiktok.com/@olykir">
          <FontAwesomeIcon icon={faTiktok} aria-label="My TikTok Profile" />
        </a>
      </div>
    </div>
  );
}

function TechnologyUsed() {
  return (
    <div className={Styles.GridTechnologyArea}>
      <br />
      <br />
      <h1 className={Styles.Header}>Technology I've Used</h1>
      <br />
      <div className={Styles.TechUsedContainer}>{UsedTech.map(TechCard)}</div>
    </div>
  );
}

function Divider({ className }: ComponentProps<any>) {
  return <div className={className} />;
}

function ProjectsList() {
  return (
    <div className={Styles.GridProjectsArea}>
      <h1 className={[Styles.Header, Styles.ProjectsHeader].join(" ")}>
        Projects
      </h1>
      <div className={Styles.ProjectListContainer}>
        {/* projects (as cards)*/}
        {Projects.map(ProjectCard)}
      </div>
    </div>
  );
}

function ContactMe() {
  const emailInputProps = useInput();
  const nameInputProps = useInput();
  const messageInputProps = useInput();

  // need to send email on button click kthx later gator

  return (
    <div className={Styles.ContactMeArea}>
      <br />
      <br />
      <h1 className={Styles.HaveIdea}>Have an idea?</h1>
      <h1 className={Styles.LetsChat}>Let's have a chat!</h1>
      <div className={Styles.ContactMeInputs}>
        <TextInput
          style={{ gridArea: "email" }}
          {...emailInputProps}
          placeholder="Your Email"
        />

        <TextInput
          style={{ gridArea: "name" }}
          {...nameInputProps}
          placeholder="Your Name"
        />

        <TextInput
          style={{ gridArea: "message" }}
          {...messageInputProps}
          placeholder="Your Message"
        />
      </div>
      <br />
      <br />
      <ButtonInput text="Send Message" icon={faPaperPlane} />
    </div>
  );
}

export default function App() {
  return (
    <div className={Styles.AppGrid}>
      <InformationAboutSelf />

      <TechnologyUsed />

      <Divider className={Styles.CenterDivider} />

      <Divider className={Styles.TechDivider} />

      <ProjectsList />

      <Divider className={Styles.ContactDivider} />

      <ContactMe />
    </div>
  );
}
