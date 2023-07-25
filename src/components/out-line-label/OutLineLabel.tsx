import React, { FC, ReactNode } from "react";
import { SOutLineLabel } from "./styles/SOutLineLabel";
import { SIconWrapper } from "./styles/SIconWrapper";
import { SColorLabelWrapper } from "./styles/SColorLabelWrapper";
import { SImageWrapper } from "./styles/SImageWrapper";
import { SBadgeLabelWrapper } from "./styles/SBadgeLabelWrapper";

interface IOutLineLabel {
  icon?: ReactNode;
  image?: ReactNode;
  colorLabel?: ReactNode;
  badgeLabel?: ReactNode;
  activated?: boolean;
  children?: ReactNode;
  size?: "medium" | "large";
  htmlTitle?: string;
}

export const OutLineLabel: FC<IOutLineLabel> = ({
  icon,
  image,
  htmlTitle,
  colorLabel,
  badgeLabel,
  activated,
  size,
  children,
}) => {
  return (
    <SOutLineLabel isActivated={activated} size={size} title={htmlTitle}>
      {colorLabel && (
        <SColorLabelWrapper isActivated={activated} size={size}>
          {colorLabel}
        </SColorLabelWrapper>
      )}
      {image && <SImageWrapper size={size}>{image}</SImageWrapper>}
      {children}
      {icon && (
        <SIconWrapper isActivated={activated} size={size}>
          {icon}
        </SIconWrapper>
      )}
      {badgeLabel && (
        <SBadgeLabelWrapper isActivated={activated} size={size}>
          {badgeLabel}
        </SBadgeLabelWrapper>
      )}
    </SOutLineLabel>
  );
};
