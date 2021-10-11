import React from "react";
import { createPortal } from "react-dom";
import { Stackable } from "../stackable/Stackable";
import { SModal } from "./styles/SModal";
import { SModalBackground } from "./styles/SModalBackground";

interface IModal {
  visible: boolean;
  onClose: (payload: any) => any;
}

export const Modal: React.FC<IModal> = ({ ...props }) => {
  const [docBody, setDocBody] = React.useState<any>(null);
  React.useEffect(() => {
    setDocBody(document.body);
  });

  return docBody && props.visible
    ? createPortal(
        <Stackable>
          <SModalBackground onClick={props.onClose}>
            <SModal onClick={(e) => e.stopPropagation()}>{props.children}</SModal>
          </SModalBackground>
        </Stackable>,
        docBody,
      )
    : null;
};
