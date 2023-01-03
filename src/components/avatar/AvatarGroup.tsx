import React from "react";
import { SAvatarGroup } from "./styles/SAvatarGroup";

export const AvatarGroup: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return <SAvatarGroup>{props.children}</SAvatarGroup>;
};
