import React from "react";
import { WithAddon } from "../with-addon/WithAddon";
import { SErrorMessage } from "./styles/SErrorMessage";

interface IErrorMessage {
  content: string[];
  active?: boolean;
}

export const WithErrorMessage: React.FC<IErrorMessage> = ({ ...props }) => {
  return (
    <WithAddon
      name="errorMessage"
      component={
        <>
          {props.content.map((message, index) => (
            <SErrorMessage key={index}>{message}</SErrorMessage>
          ))}
        </>
      }
      active={props.active}
      content={props.content}
    />
  );
};
