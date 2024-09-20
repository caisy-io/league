import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M13.334 4H2.667c-.737 0-1.333.597-1.333 1.333v5.334c0 .736.596 1.333 1.333 1.333h10.666c.737 0 1.334-.597 1.334-1.333V5.333c0-.736-.597-1.333-1.333-1.333zM8 8h.007M11.334 8h.006M4.667 8h.006"
      ></path>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6665 5H3.33317C2.4127 5 1.6665 5.74619 1.6665 6.66667V13.3333C1.6665 14.2538 2.4127 15 3.33317 15H16.6665C17.587 15 18.3332 14.2538 18.3332 13.3333V6.66667C18.3332 5.74619 17.587 5 16.6665 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 10H10.0083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14.1665 10H14.1748"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.8335 10H5.84183"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
};

export const IconInputForm: FC<IIconSize> = ({ size = 20 }) => IconSize[size];
