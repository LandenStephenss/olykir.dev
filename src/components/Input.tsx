import React, { ChangeEvent, useState } from "react";
import Styles from "./Input.module.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function useInput(defaultValue = "") {
  const [value, setValue] = useState<string>(defaultValue);

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
  onClick?: (e: any) => unknown;
};

export function ButtonInput({
  text,
  backgroundColor = "#343434",
  icon,
  onClick,
}: ButtonInputProps) {
  return (
    <div
      className={Styles.ButtonInput}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : void 0}
      <p>{text}</p>
    </div>
  );
}

type TextAreaInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => unknown;
  placeholder: string;
  style?: any;
  className?: any;
};

export function TextAreaInput(props: TextAreaInputProps) {
  return (
    <div className={Styles.TextInputField} style={props.style}>
      <textarea {...props} />
    </div>
  );
}
