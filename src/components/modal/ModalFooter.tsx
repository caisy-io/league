import React from "react";
import { SModalFooter } from "./styles/SModalFooter";

export const ModalFooter: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return <SModalFooter>{props.children}</SModalFooter>;
};
