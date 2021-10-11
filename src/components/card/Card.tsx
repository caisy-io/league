import React from "react";
import { SCard } from "./styles/SCard";
import { SCardHeader } from "./styles/SCardHeader";

interface ICard {
  header?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const Card: React.FC<ICard> = ({ ...props }) => {
  return (
    <SCard onClick={props.onClick} style={props.style}>
      {props.header && <SCardHeader>{props.header}</SCardHeader>}
      {props.children}
    </SCard>
  );
};
