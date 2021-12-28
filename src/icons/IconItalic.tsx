import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00488 4L7.00488 12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33854 12H4.67188" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.67188 3.99999H11.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00488 4L7.00488 12" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33854 12H4.67188" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.67188 3.99999H11.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2549 5L8.75488 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6712 15H5.83789" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.33789 5.00001H14.1712" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5049 6L10.5049 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0049 18H7.00488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0049 6H17.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5049 6L10.5049 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0049 18H7.00488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0049 6H17.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0049 8L14.0049 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6712 24H9.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3379 8.00001H22.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0049 8L14.0049 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6712 24H9.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3379 8.00001H22.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0049 8L14.0049 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6712 24H9.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3379 8.00001H22.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0049 8L14.0049 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6712 24H9.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3379 8.00001H22.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconItalic: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
