import React from "react";
import { SForm } from "./styles/SForm";

interface IForm {
  style?: React.CSSProperties;
}

export const Form: React.FC<IForm & React.HTMLProps<HTMLFormElement>> = ({ ...props }) => {
  return (
    <SForm onSubmit={props.onSubmit} style={props.style}>
      {props.children}
    </SForm>
  );
};
