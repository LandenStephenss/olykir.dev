import React, { ChangeEvent, useState } from "react";
import Styles from "./Input.module.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function useInput(defaultValue = "") {
  const [value, setValue] = useState<string>(defaultValue);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange,
  };
}

type TextInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  placeholder: string;
  style?: any;
  className?: any;
};

export function TextInput(props: TextInputProps) {
  return (
    <div className={Styles.TextInputField} style={props.style}>
      <input {...props} />
    </div>
  );
}

type ButtonInputProps = {
  text: string;
  icon?: IconDefinition;
  backgroundColor?: string;
};

export function ButtonInput({
  text,
  backgroundColor = "#343434",
  icon,
}: ButtonInputProps) {
  return (
    <div
      className={Styles.ButtonInput}
      style={{ backgroundColor: backgroundColor }}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : void 0}
      <p>{text}</p>
    </div>
  );
}
