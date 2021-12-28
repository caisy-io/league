import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3381 4.72864C13.4207 6.8113 13.4207 10.1886 11.3381 12.2713C9.2554 14.354 5.87806 14.354 3.7954 12.2713C1.71273 10.1886 1.71273 6.8113 3.7954 4.72864" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.56673 3.16663V8.49996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3381 4.72864C13.4207 6.8113 13.4207 10.1886 11.3381 12.2713C9.2554 14.354 5.87806 14.354 3.7954 12.2713C1.71273 10.1886 1.71273 6.8113 3.7954 4.72864" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.56673 3.16663V8.49996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.2802 5.78589C16.8836 8.38922 16.8836 12.6109 14.2802 15.2142C11.6769 17.8176 7.45525 17.8176 4.85191 15.2142C2.24858 12.6109 2.24858 8.38922 4.85191 5.78589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.56608 3.83337V10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>      
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2234 6.84302C20.3474 9.96702 20.3474 15.033 17.2234 18.157C14.0994 21.281 9.03341 21.281 5.90941 18.157C2.78541 15.033 2.78541 9.96702 5.90941 6.84302" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5664 4.5V12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2234 6.84302C20.3474 9.96702 20.3474 15.033 17.2234 18.157C14.0994 21.281 9.03341 21.281 5.90941 18.157C2.78541 15.033 2.78541 9.96702 5.90941 6.84302" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5664 4.5V12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1087 8.95728C27.2741 13.1226 27.2741 19.8773 23.1087 24.0426C18.9434 28.2079 12.1887 28.2079 8.02341 24.0426C3.85808 19.8773 3.85808 13.1226 8.02341 8.95728" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5661 5.83337V16.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1087 8.95728C27.2741 13.1226 27.2741 19.8773 23.1087 24.0426C18.9434 28.2079 12.1887 28.2079 8.02341 24.0426C3.85808 19.8773 3.85808 13.1226 8.02341 8.95728" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5661 5.83337V16.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1087 8.95728C27.2741 13.1226 27.2741 19.8773 23.1087 24.0426C18.9434 28.2079 12.1887 28.2079 8.02341 24.0426C3.85808 19.8773 3.85808 13.1226 8.02341 8.95728" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5661 5.83337V16.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1087 8.95728C27.2741 13.1226 27.2741 19.8773 23.1087 24.0426C18.9434 28.2079 12.1887 28.2079 8.02341 24.0426C3.85808 19.8773 3.85808 13.1226 8.02341 8.95728" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5661 5.83337V16.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconEnablePower: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
