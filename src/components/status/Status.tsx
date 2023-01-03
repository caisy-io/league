import React from "react";
import { SStatus } from "./styles/SStatus";
import { SStatusEmote } from "./styles/SStatusEmote";

interface IStatus {
  emote: string;
  children?: React.ReactNode;
}

export const Status: React.FC<IStatus> = ({ ...props }) => {
  return (
    <SStatus>
      <SStatusEmote>{props.emote}</SStatusEmote>
      {props.children}
    </SStatus>
  );
};
