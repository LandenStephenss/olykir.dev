import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import Styles from "./TechCard.module.scss";

export type Tech = {
  icon: IconDefinition;
  url: string;
};

export default function TechCard(tech: Tech) {
  return (
    <a href={tech.url}>
      <div className={Styles.TechCard}>
        <FontAwesomeIcon icon={tech.icon} />
      </div>
    </a>
  );
}
