import React from "react";
import { Badge, EBadgePosition } from "../badge";
import { IconClose } from "../../icons/IconClose";
import { IconAngleRight } from "../../icons/IconAngleRight";
import { PrimaryModalHeaderLabel } from "./PrimaryModalHeaderLabel";
import { SPrimaryModalHeader } from "./styles/SPrimaryModalHeader";
import { SPrimaryModalHeaderBreadcrumb } from "./styles/SPrimaryModalHeaderBreadcrumb";

interface IPrimaryModalHeaderLabel {
  title: string;
  value?: string | number;
  onClick?: (value: string | number | undefined) => void;
  icon?: JSX.Element;
  badgeContent?: string;
}

interface IPrimaryModalHeader {
  breadcrumbs: IPrimaryModalHeaderLabel[];
}

export const PrimaryModalHeader: React.FC<IPrimaryModalHeader> = ({ breadcrumbs, children }) => {
  return (
    <SPrimaryModalHeader>
      <SPrimaryModalHeaderBreadcrumb>
        {breadcrumbs.map((label, index) => (
          <>
            <PrimaryModalHeaderLabel
              active={index === breadcrumbs.length - 1}
              value={label.value}
              onClick={label.onClick}
            >
              {label.icon}
              {label.title}
              {label.badgeContent && (
                <Badge size="medium" position={EBadgePosition.Center} type="important" value={label.badgeContent} />
              )}
              {index < breadcrumbs.length - 1 && <IconAngleRight />}
            </PrimaryModalHeaderLabel>
          </>
        ))}
      </SPrimaryModalHeaderBreadcrumb>
      {children}
    </SPrimaryModalHeader>
  );
};
