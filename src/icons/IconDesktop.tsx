import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.99756" y="2.66431" width="12.005" height="8.67028" rx="2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.99854 13.3354H11.001" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.99756" y="2.66431" width="12.005" height="8.67028" rx="2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.99854 13.3354H11.001" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.83008" y="3.33057" width="15.0062" height="10.8378" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.58154 16.6695H14.0847" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.66309" y="3.99683" width="18.0075" height="13.0054" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.16455 20.0034H17.1683" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.66309" y="3.99683" width="18.0075" height="13.0054" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.16455 20.0034H17.1683" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99463" y="5.32886" width="24.01" height="17.3406" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99756 26.6711H22.0026" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99463" y="5.32886" width="24.01" height="17.3406" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99756 26.6711H22.0026" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99463" y="5.32886" width="24.01" height="17.3406" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99756 26.6711H22.0026" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99463" y="5.32886" width="24.01" height="17.3406" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99756 26.6711H22.0026" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconDesktop: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
