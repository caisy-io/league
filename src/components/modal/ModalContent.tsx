import React from "react";
import { SModalContent } from "./styles/SModalContent";

export const ModalContent: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return <SModalContent>{props.children}</SModalContent>;
};
