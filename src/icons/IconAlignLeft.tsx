import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.5" y="6" width="8" height="4" rx="1" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M2.83333 2.6665V13.3332" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.5" y="6" width="8" height="4" rx="1" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M2.83333 2.6665V13.3332" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6.6665" y="7.5" width="10" height="5" rx="1" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M3.33317 3.3335V16.6668" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="9" width="12" height="6" rx="1" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4 4V20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="9" width="12" height="6" rx="1" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4 4V20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10.6665" y="12" width="16" height="8" rx="1" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M5.33317 5.3335V26.6668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10.6665" y="12" width="16" height="8" rx="1" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M5.33317 5.3335V26.6668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10.6665" y="12" width="16" height="8" rx="1" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M5.33317 5.3335V26.6668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10.6665" y="12" width="16" height="8" rx="1" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M5.33317 5.3335V26.6668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconAlignLeft: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
