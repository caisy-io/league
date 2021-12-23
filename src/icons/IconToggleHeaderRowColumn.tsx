import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6H2M5.74667 6V14M12.6667 14H3.33333C2.59667 14 2 13.4033 2 12.6667V3.33333C2 2.59667 2.59667 2 3.33333 2H12.6667C13.4033 2 14 2.59667 14 3.33333V12.6667C14 13.4033 13.4033 14 12.6667 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6H2M5.74667 6V14M12.6667 14H3.33333C2.59667 14 2 13.4033 2 12.6667V3.33333C2 2.59667 2.59667 2 3.33333 2H12.6667C13.4033 2 14 2.59667 14 3.33333V12.6667C14 13.4033 13.4033 14 12.6667 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 7.5H2.5M7.18333 7.5V17.5M15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 9H3M8.62 9V21M19 21H5C3.895 21 3 20.105 3 19V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V19C21 20.105 20.105 21 19 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 9H3M8.62 9V21M19 21H5C3.895 21 3 20.105 3 19V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V19C21 20.105 20.105 21 19 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 12H4M11.4933 12V28M25.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H25.3333C26.8067 4 28 5.19333 28 6.66667V25.3333C28 26.8067 26.8067 28 25.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 12H4M11.4933 12V28M25.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H25.3333C26.8067 4 28 5.19333 28 6.66667V25.3333C28 26.8067 26.8067 28 25.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 12H4M11.4933 12V28M25.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H25.3333C26.8067 4 28 5.19333 28 6.66667V25.3333C28 26.8067 26.8067 28 25.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 12H4M11.4933 12V28M25.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H25.3333C26.8067 4 28 5.19333 28 6.66667V25.3333C28 26.8067 26.8067 28 25.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconToggleHeaderRowColumn: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
