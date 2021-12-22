import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66683 11.3332V4.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.3333 11.3332V4.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6668 8.01953L11.3135 9.37286" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3936 6.73975L12.6669 8.01975" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.3335 8.01984L4.68683 6.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.60683 9.29286L3.3335 8.01953" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.3335 8.01986H12.6668" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>     
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.66683 11.3332V4.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.3333 11.3332V4.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6668 8.01953L11.3135 9.37286" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3936 6.73975L12.6669 8.01975" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.3335 8.01984L4.68683 6.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.60683 9.29286L3.3335 8.01953" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.3335 8.01986H12.6668" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.08317 14.1668V5.8335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.9167 14.1668V5.8335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8333 10.0249L14.1416 11.7166" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.2412 8.4248L15.8329 10.0248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.1665 10.0252L5.85817 8.3335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.75817 11.6166L4.1665 10.0249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.1665 10.0251H15.8332" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 17V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.5 17V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.0002 12.0298L16.9702 14.0598" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.0898 10.1099L18.9998 12.0299" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12.03L7.03 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.91 13.9398L5 12.0298" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12.0298H19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 17V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.5 17V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.0002 12.0298L16.9702 14.0598" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.0898 10.1099L18.9998 12.0299" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12.03L7.03 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.91 13.9398L5 12.0298" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12.0298H19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33317 22.6668V9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.6667 22.6668V9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3336 16.04L22.627 18.7467" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.7861 13.48L25.3328 16.04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 16.0402L9.37317 13.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.21317 18.5867L6.6665 16.04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 16.0397H25.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33317 22.6668V9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.6667 22.6668V9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3336 16.04L22.627 18.7467" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.7861 13.48L25.3328 16.04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 16.0402L9.37317 13.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.21317 18.5867L6.6665 16.04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 16.0397H25.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33317 22.6668V9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.6667 22.6668V9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3336 16.04L22.627 18.7467" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.7861 13.48L25.3328 16.04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 16.0402L9.37317 13.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.21317 18.5867L6.6665 16.04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 16.0397H25.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33317 22.6668V9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M28.6667 22.6668V9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3336 16.04L22.627 18.7467" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.7861 13.48L25.3328 16.04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 16.0402L9.37317 13.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.21317 18.5867L6.6665 16.04" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 16.0397H25.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  )
}

export const IconJustifyFullWidth: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
