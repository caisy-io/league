import React from "react";
import { SModalHeaderTitle } from "./styles/SModalHeaderTitle";

export const ModalHeaderTitle: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return <SModalHeaderTitle>{props.children}</SModalHeaderTitle>;
};
