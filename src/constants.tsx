import React from "react";

import {
  faDiscord,
  faReact,
  faNodeJs,
  faFigma,
  faDocker,
  faCloudflare,
  faHtml5,
  faSquareJs,
  faGitAlt,
  faSass,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { Project } from "./components/ProjectCard";
import { Tech } from "./components/TechCard";

export const Projects: Project[] = [
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
  },
  {
    title: "KoiNodes Web",
    description: "KoiNode's front-end user interface, made with MantineUI.",
    tech: [faFigma, faReact, faSass, faNpm],
    link: "https://koinodes.com",
  },
  {
    title: "KoiNodes Backend",
    description:
      "KoiNode's backend-end system to handle payments, server management, etc.",
    tech: [faNpm, faNodeJs, faCloudflare],
    link: "https://koinodes.com",
  },
];

export const UsedTech: Tech[] = [
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
