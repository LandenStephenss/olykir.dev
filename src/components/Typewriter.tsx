import React, { useState, useEffect } from "react";
import Styles from "./Typewriter.module.css";

export default function TypewriterEffectWithMultipleLines({
  lines,
}: {
  lines: string[];
}) {
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
          setCurrentLine(lines[idx + 1]);
        }

        setCurrentIndex(0);
        setCurrentText("");
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, currentLine, currentText, lines]);

  return (
    <span>
      {currentText}
      <span className={Styles.TypewriterBar}>_</span>
    </span>
  );
}
