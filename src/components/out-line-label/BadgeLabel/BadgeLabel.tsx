import { FC, ReactNode, CSSProperties } from "react";
import { SBadgeLabel } from "./SBadgeLabel";

export interface IBadgeLabel {
  value: ReactNode;
  styleOverwrite?: CSSProperties;
}

const BadgeLabel: FC<IBadgeLabel> = ({ value, styleOverwrite }) => {
  return <SBadgeLabel styleOverwrite={styleOverwrite}>{value}</SBadgeLabel>;
};

export default BadgeLabel;
