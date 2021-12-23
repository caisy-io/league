import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.6665 5L10.3332 6.66667H5.6665"strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33317 11.0002L5.6665 9.3335H10.3332"strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="6"strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.6665 5L10.3332 6.66667H5.6665"strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33317 11.0002L5.6665 9.3335H10.3332"strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="6"strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8335 6.25L12.9168 8.33333H7.0835"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.16683 13.7498L7.0835 11.6665H12.9168"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="10" r="7.5"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7.5L15.5 10H8.5"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 16.5L8.5 14H15.5"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="9"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7.5L15.5 10H8.5"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 16.5L8.5 14H15.5"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="9"strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>        
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3335 10L20.6668 13.3333H11.3335"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6668 21.9998L11.3335 18.6665H20.6668"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="12"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3335 10L20.6668 13.3333H11.3335"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6668 21.9998L11.3335 18.6665H20.6668"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="12"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3335 10L20.6668 13.3333H11.3335"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6668 21.9998L11.3335 18.6665H20.6668"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="12"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3335 10L20.6668 13.3333H11.3335"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6668 21.9998L11.3335 18.6665H20.6668"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="16" cy="16" r="12"strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  )
}

export const IconSwitchArrows: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
