import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.66663 10H10.6666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.33337 6L7.33337 7.66667L5.33337 9.33333"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14H4C2.89533 14 2 13.1047 2 12V4C2 2.89533 2.89533 2 4 2H12C13.1047 2 14 2.89533 14 4V12C14 13.1047 13.1047 14 12 14Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8334 12.5H13.3334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6.66663 7.5L9.16663 9.58333L6.66663 11.6667"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 17.5H5C3.61917 17.5 2.5 16.3808 2.5 15V5C2.5 3.61917 3.61917 2.5 5 2.5H15C16.3808 2.5 17.5 3.61917 17.5 5V15C17.5 16.3808 16.3808 17.5 15 17.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 15H16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9L11 11.5L8 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 21H6C4.343 21 3 19.657 3 18V6C3 4.343 4.343 3 6 3H18C19.657 3 21 4.343 21 6V18C21 19.657 19.657 21 18 21Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3333 20H21.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M10.6667 12L14.6667 15.3333L10.6667 18.6667"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 28H8C5.79067 28 4 26.2093 4 24V8C4 5.79067 5.79067 4 8 4H24C26.2093 4 28 5.79067 28 8V24C28 26.2093 26.2093 28 24 28Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
};

export const IconTerminal: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
