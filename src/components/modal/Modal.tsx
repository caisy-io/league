import React from "react";
import { createPortal } from "react-dom";
import Stackable from "../stackable";
import { SModal } from "./styles/SModal";
import { SModalBackground } from "./styles/SModalBackground";
import { ThemedCssFunction } from "styled-components";
import { useDelayUnmount } from "../../utils";

interface IModal {
  visible: boolean;
  onClose?: (payload: any) => any;
  styleOverwrite?: ThemedCssFunction<any>;
  children?: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({ styleOverwrite, ...props }) => {
  const [docBody, setDocBody] = React.useState<any>(null);
  React.useEffect(() => {
    setDocBody(document.body);
  });

  const shouldRender = useDelayUnmount(props.visible, 350);

  return docBody && shouldRender
    ? createPortal(
        <Stackable>
          <SModalBackground state={props.visible ? "in" : "out"} onClick={props?.onClose}>
            <SModal
              state={props.visible ? "in" : "out"}
              styleOverwrite={styleOverwrite}
              onClick={(e) => e.stopPropagation()}
            >
              {props.children}
            </SModal>
          </SModalBackground>
        </Stackable>,
        docBody,
      )
    : null;
};
