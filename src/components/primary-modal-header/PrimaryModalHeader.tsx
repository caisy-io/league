import React from "react";
import { IconClose } from "../..";
import { SPrimaryModalHeader } from "./styles/SPrimaryModalHeader";
import { SPrimaryModalHeaderCloseIcon } from "./styles/SPrimaryModalHeaderCloseIcon";

export const PrimaryModalHeader: React.FC = ({ ...props }) => {
  return (
    <SPrimaryModalHeader>
      {props.children}
      <SPrimaryModalHeaderCloseIcon>
        <IconClose />
      </SPrimaryModalHeaderCloseIcon>
    </SPrimaryModalHeader>
  );
};
