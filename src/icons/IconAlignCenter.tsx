import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.6665" y="6" width="10.6667" height="4" rx="1" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M7.99984 13.3332V2.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.6665" y="6" width="10.6667" height="4" rx="1" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M7.99984 13.3332V2.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.3335" y="7.5" width="13.3333" height="5" rx="1" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M10.0002 16.6668V3.3335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="9" width="16" height="6" rx="1" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 20V4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="9" width="16" height="6" rx="1" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 20V4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.82959" y="12.5" width="20.3333" height="7" rx="1" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M16.0002 26.6668V5.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.82959" y="12.5" width="20.3333" height="7" rx="1" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M16.0002 26.6668V5.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.82959" y="12.5" width="20.3333" height="7" rx="1" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M16.0002 26.6668V5.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.82959" y="12.5" width="20.3333" height="7" rx="1" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M16.0002 26.6668V5.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  )
}

export const IconAlignCenter: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
