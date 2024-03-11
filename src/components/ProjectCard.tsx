import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInternetExplorer,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import Styles from "./ProjectCard.module.scss";

export type Project = {
  title: string;
  description: string | ReactNode;
  link?: string;
  tech: any[];
};

export function RenderLinkIcon({ link }: { link: string }) {
  if (link.includes("github")) {
    return <FontAwesomeIcon icon={faGitAlt} />;
  }

  return <FontAwesomeIcon icon={faInternetExplorer} />;
}

export default function ProjectCard(project: Project) {
  return (
    <div className={Styles.CardContainer}>
      <div className={Styles.CardContent}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div className={Styles.ProjectInfoContainer}>
            <h3 className={Styles.ProjectName}>{project.title}</h3>
            <p className={Styles.ProjectDescription}>{project.description}</p>
          </div>
          {project.link ? (
            <a className={Styles.IconLink} href={project.link}>
              <RenderLinkIcon link={project.link} />
            </a>
          ) : (
            void 0
          )}
        </div>
        <div className={Styles.ProjectTechUsedContainer}>
          {project.tech.map((ico) => (
            <FontAwesomeIcon className={Styles.TechIcon} icon={ico} />
          ))}
        </div>
      </div>
    </div>
  );
}
