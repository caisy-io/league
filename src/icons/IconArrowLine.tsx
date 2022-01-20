import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.9873 8.00008H12.9806" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.60059 4.60107L13.0137 8.00006L9.60059 11.399" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.9873 8.00008H12.9806" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.60059 4.60107L13.0137 8.00006L9.60059 11.399" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.7334 9.99992H16.2251" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.001 5.75146L16.2674 10.0002L12.001 14.2489" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.48047 12H19.4705" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.4004 6.90186L19.5201 12.0003L14.4004 17.0988" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.48047 12H19.4705" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.4004 6.90186L19.5201 12.0003L14.4004 17.0988" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97363 15.9999H25.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.2012 9.20239L26.0274 16.0004L19.2012 22.7983" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97363 15.9999H25.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.2012 9.20239L26.0274 16.0004L19.2012 22.7983" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97363 15.9999H25.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.2012 9.20239L26.0274 16.0004L19.2012 22.7983" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97363 15.9999H25.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.2012 9.20239L26.0274 16.0004L19.2012 22.7983" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
};

export const IconArrowLine: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
