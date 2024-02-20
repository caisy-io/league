import { FC, ReactNode, CSSProperties } from "react";
import { SBadgeLabel } from "./SBadgeLabel";

export interface IBadgeLabel {
  children?: ReactNode;
  styleOverwrite?: CSSProperties;
}

const BadgeLabel: FC<IBadgeLabel> = ({ children, styleOverwrite }) => {
  return <SBadgeLabel styleOverwrite={styleOverwrite}>{children}</SBadgeLabel>;
};

export default BadgeLabel;
