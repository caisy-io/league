import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.18681 2.66675L6.81348 13.3334" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5.33325L14.6667 7.99992L12 10.6666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.00016 10.6666L1.3335 7.99992L4.00016 5.33325" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.18681 2.66675L6.81348 13.3334" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5.33325L14.6667 7.99992L12 10.6666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.00016 10.6666L1.3335 7.99992L4.00016 5.33325" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4833 3.33325L8.5166 16.6666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 6.66675L18.3333 10.0001L15 13.3334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.99984 13.3334L1.6665 10.0001L4.99984 6.66675" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7802 4L10.2202 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 8L22 12L18 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 16L2 12L6 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.7802 4L10.2202 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 8L22 12L18 16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 16L2 12L6 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3731 5.33325L13.6265 26.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 10.6667L29.3333 16.0001L24 21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99984 21.3334L2.6665 16.0001L7.99984 10.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3731 5.33325L13.6265 26.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 10.6667L29.3333 16.0001L24 21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99984 21.3334L2.6665 16.0001L7.99984 10.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3731 5.33325L13.6265 26.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 10.6667L29.3333 16.0001L24 21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99984 21.3334L2.6665 16.0001L7.99984 10.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3731 5.33325L13.6265 26.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 10.6667L29.3333 16.0001L24 21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99984 21.3334L2.6665 16.0001L7.99984 10.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconCode: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
