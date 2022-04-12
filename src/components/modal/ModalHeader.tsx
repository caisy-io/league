import React, { CSSProperties } from "react";
import { IconClose } from "../../icons";
import { SModalHeader } from "./styles/SModalHeader";
import { SModalHeaderCloseIcon } from "./styles/SModalHeaderCloseIcon";

interface IModalHeader {
  onClose?: () => any;
  styleOverwrite?: CSSProperties;
}

export const ModalHeader: React.FC<IModalHeader> = ({ styleOverwrite, onClose, children }) => {
  return (
    <SModalHeader styleOverwrite={styleOverwrite}>
      {children}
      <SModalHeaderCloseIcon onClick={onClose}>
        <IconClose size={32} />
      </SModalHeaderCloseIcon>
    </SModalHeader>
  );
};
