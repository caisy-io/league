import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.67188 3.00002H13.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.67188 6.33333H13.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.67188 9.66665H13.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.67188 13H13.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.67188 3.00002H13.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.67188 6.33333H13.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.67188 9.66665H13.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.67188 13H13.3385" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33789 3.74998H16.6712" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33789 7.91667H16.6712" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33789 12.0834H16.6712" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33789 16.25H16.6712" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00488 4.5H20.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.00488 9.5H20.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.00488 14.5H20.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.00488 19.5H20.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00488 4.5H20.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.00488 9.5H20.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.00488 14.5H20.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.00488 19.5H20.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33789 5.99998H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 12.6667H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 19.3334H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 26H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33789 5.99998H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 12.6667H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 19.3334H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 26H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33789 5.99998H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 12.6667H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 19.3334H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 26H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33789 5.99998H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 12.6667H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 19.3334H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33789 26H26.6712" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconTextAlignJustified: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
