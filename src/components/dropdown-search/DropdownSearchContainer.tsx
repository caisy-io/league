import React from "react";
import { SDropdownSearchContainer } from "./styles/SDropdownSearchContainer";

export const DropdownSearchContainer: React.FC = ({ ...props }) => {
  return <SDropdownSearchContainer>{props.children}</SDropdownSearchContainer>;
};
