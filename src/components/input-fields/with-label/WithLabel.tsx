import React from "react";
import { WithAddon } from "../with-addon/WithAddon";
import { SLabel } from "./styles/SLabel";

interface ILabel {
  content: string;
  active?: boolean;
}

export const WithLabel: React.FC<ILabel> = ({ ...props }) => {
  return (
    <WithAddon
      name="label"
      component={<SLabel>{props.content}</SLabel>}
      content={props.content}
      active={props.active}
    />
  );
};
