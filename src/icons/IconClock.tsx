import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.00006" cy="7.99981" r="6.0025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.3036 8.76761L8 7.99996V3.99829" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.00006" cy="7.99981" r="6.0025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.3036 8.76761L8 7.99996V3.99829" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.3332" cy="9.99995" r="7.50312" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.213 10.9597L10.3335 10.0001V4.99805" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.6668" cy="12.0001" r="9.00375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.1219 13.1515L12.6665 12.0001V5.99756" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.6668" cy="12.0001" r="9.00375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.1219 13.1515L12.6665 12.0001V5.99756" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15.9996" cy="16.0001" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6073 17.5355L16 16.0002V7.99683" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15.9996" cy="16.0001" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6073 17.5355L16 16.0002V7.99683" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15.9996" cy="16.0001" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6073 17.5355L16 16.0002V7.99683" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15.9996" cy="16.0001" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6073 17.5355L16 16.0002V7.99683" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconClock: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
