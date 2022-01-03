import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4967 6.16667H9.83008V3.5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 9.83008H6.16667V12.4967" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4967 6.16667H9.83008V3.5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 9.83008H6.16667V12.4967" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5033 7.83333H12.1699V4.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 12.1699H7.83333V15.5033" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 9.5H14.5V5.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 14.5H9.5V18.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 9.5H14.5V5.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 14.5H9.5V18.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.0033 12.3333H19.6699V7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 19.6699H12.3333V25.0033" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.0033 12.3333H19.6699V7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 19.6699H12.3333V25.0033" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.0033 12.3333H19.6699V7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 19.6699H12.3333V25.0033" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.0033 12.3333H19.6699V7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 19.6699H12.3333V25.0033" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconMinimizeFullScreenMode: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
