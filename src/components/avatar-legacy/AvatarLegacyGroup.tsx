import React from "react";
import { SAvatarLegacyGroup } from "./styles/SAvatarLegacyGroup";

export const AvatarLegacyGroup: React.FC = ({ ...props }) => {
  return <SAvatarLegacyGroup>{props.children}</SAvatarLegacyGroup>;
};
