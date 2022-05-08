import React, { useRef } from "react";
import { createPortal } from "react-dom";
import Stackable from "../stackable";
import { SModal } from "./styles/SModal";
import { SModalBackground } from "./styles/SModalBackground";
import { ThemedCssFunction } from "styled-components";

interface IModal {
  visible: boolean;
  onClose?: (payload: any) => any;
  styleOverwrite?: ThemedCssFunction<any>;
}

export const Modal: React.FC<IModal> = ({ styleOverwrite, ...props }) => {
  const [docBody, setDocBody] = React.useState<any>(null);
  React.useEffect(() => {
    setDocBody(document.body);
  });

  return docBody && props.visible
    ? createPortal(
        <Stackable>
          <SModalBackground onClick={props?.onClose}>
            <SModal styleOverwrite={styleOverwrite} onClick={(e) => e.stopPropagation()}>
              {props.children}
            </SModal>
          </SModalBackground>
        </Stackable>,
        docBody,
      )
    : null;
};
