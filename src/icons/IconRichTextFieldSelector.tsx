import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";
const IconSize = {
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.33594 5.15983H16.8109"
        stroke="#172C55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5446 15.1598V5.15983"
        stroke="#172C55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.8776 15.1598V9.3265"
        stroke="#172C55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.37793 9.3265H8.37793"
        stroke="#172C55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
};

export const IconRichTextFieldSelector: FC<IIconSize> = ({ size = 20 }) => IconSize[size];
