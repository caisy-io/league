import React from "react";
import { IconClose } from "../../icons/IconClose";
import { SModalHeader } from "./styles/SModalHeader";
import { SModalHeaderCloseIcon } from "./styles/SModalHeaderCloseIcon";

interface IModalHeader {
  onClose?: () => any;
}

export const ModalHeader: React.FC<IModalHeader> = ({ ...props }) => {
  return (
    <SModalHeader>
      {props.children}
      <SModalHeaderCloseIcon onClick={props.onClose}>
        <IconClose />
      </SModalHeaderCloseIcon>
    </SModalHeader>
  );
};
