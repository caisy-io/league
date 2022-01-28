import React from "react";
import { SLineInputRequiredIndicator } from "./styles/SLineInputRequiredIndicator";
import { SLineSelectLabel } from "./styles/SLineSelectLabel";

interface ILineSelectLabel {
  children?,
  errorMessage?: String,
  required?: boolean;
  state: "default" | "success" | "error";
}

export const LineSelectLabel: React.FC<ILineSelectLabel> = ({ children, required, errorMessage, state }) => {
  return (
    <SLineSelectLabel>
      {required && <SLineInputRequiredIndicator />}
      {state === "error" && errorMessage ? errorMessage : children}
    </SLineSelectLabel>
  );
};
