import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33317 6.33325L7.99984 3.66659L10.6665 6.33325" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33317 9.66675L7.99984 12.3334L10.6665 9.66675" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33317 6.33325L7.99984 3.66659L10.6665 6.33325" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33317 9.66675L7.99984 12.3334L10.6665 9.66675" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66634 7.9165L9.99967 4.58317L13.333 7.9165" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66634 12.0835L9.99967 15.4168L13.333 12.0835" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 9.5L12 5.5L16 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14.5L12 18.5L16 14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 9.5L12 5.5L16 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14.5L12 18.5L16 14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 12.6665L15.9997 7.33317L21.333 12.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6663 19.3335L15.9997 24.6668L21.333 19.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 12.6665L15.9997 7.33317L21.333 12.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6663 19.3335L15.9997 24.6668L21.333 19.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 12.6665L15.9997 7.33317L21.333 12.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6663 19.3335L15.9997 24.6668L21.333 19.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 12.6665L15.9997 7.33317L21.333 12.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6663 19.3335L15.9997 24.6668L21.333 19.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconExpand: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
