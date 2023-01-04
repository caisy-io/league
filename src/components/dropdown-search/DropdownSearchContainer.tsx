import React from "react";
import { SDropdownSearchContainer } from "./styles/SDropdownSearchContainer";

export const DropdownSearchContainer: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return <SDropdownSearchContainer>{props.children}</SDropdownSearchContainer>;
};
