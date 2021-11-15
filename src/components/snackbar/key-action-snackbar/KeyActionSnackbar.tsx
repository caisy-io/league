import React from "react";
import { SKeyActionSnackbar } from "./styles/SKeyActionSnackbar";
import { SKeyActionSnackbarKey } from "./styles/SKeyActionSnackbarKey";

export interface IKeyActionSnackbar {
  keys: string[];
  action: string;
}

export const KeyActionSnackbar: React.FC<IKeyActionSnackbar> = ({ ...props }) => {
  return (
    <SKeyActionSnackbar>
      Press&nbsp;
      {props.keys.map((key, index) => (
        <>
          <SKeyActionSnackbarKey key={index}>{key}</SKeyActionSnackbarKey>
          {props.keys.length > index + 1 && <>&nbsp;+&nbsp;</>}
        </>
      ))}
      &nbsp;to {props.action}
    </SKeyActionSnackbar>
  );
};
