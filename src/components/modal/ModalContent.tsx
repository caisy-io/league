import React from "react";
import { SModalContent } from "./styles/SModalContent";

export const ModalContent: React.FC = ({ ...props }) => {
  return <SModalContent>{props.children}</SModalContent>;
};
