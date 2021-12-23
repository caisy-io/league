import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33317 12.3333L7.99984 9.66659L10.6665 12.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33317 3.66675L7.99984 6.33341L10.6665 3.66675" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33317 12.3333L7.99984 9.66659L10.6665 12.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33317 3.66675L7.99984 6.33341L10.6665 3.66675" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66634 15.4165L9.99967 12.0832L13.333 15.4165" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66634 4.5835L9.99967 7.91683L13.333 4.5835" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 18.5L12 14.5L16 18.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 5.5L12 9.5L16 5.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 18.5L12 14.5L16 18.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 5.5L12 9.5L16 5.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 24.6665L15.9997 19.3332L21.333 24.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6663 7.3335L15.9997 12.6668L21.333 7.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 24.6665L15.9997 19.3332L21.333 24.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6663 7.3335L15.9997 12.6668L21.333 7.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 24.6665L15.9997 19.3332L21.333 24.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6663 7.3335L15.9997 12.6668L21.333 7.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 24.6665L15.9997 19.3332L21.333 24.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6663 7.3335L15.9997 12.6668L21.333 7.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconCollapse: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
