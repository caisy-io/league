import React from "react";
import { IconAngleRight, IconClose } from "../..";
import { PrimaryModalHeaderLabel } from "./PrimaryModalHeaderLabel";
import { SPrimaryModalHeader } from "./styles/SPrimaryModalHeader";
import { SPrimaryModalHeaderBreadcrumb } from "./styles/SPrimaryModalHeaderBreadcrumb";
import { SPrimaryModalHeaderCloseIcon } from "./styles/SPrimaryModalHeaderCloseIcon";

interface IPrimaryModalHeaderLabel {
  title: string;
  value?: string | number;
  onClick?: (value: string | number | undefined) => void;
  icon?: JSX.Element;
}

interface IPrimaryModalHeader {
  breadcrumbs: IPrimaryModalHeaderLabel[];
  withCloseIcon: boolean;
  onClose?: () => void;
}

export const PrimaryModalHeader: React.FC<IPrimaryModalHeader> = ({
  onClose,
  breadcrumbs,
  withCloseIcon,
  children,
}) => {
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
              {index < breadcrumbs.length - 1 && <IconAngleRight />}
            </PrimaryModalHeaderLabel>
          </>
        ))}
      </SPrimaryModalHeaderBreadcrumb>
      {children}
      {withCloseIcon && (
        <SPrimaryModalHeaderCloseIcon onClick={onClose}>
          <IconClose />
        </SPrimaryModalHeaderCloseIcon>
      )}
    </SPrimaryModalHeader>
  );
};
