import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.93601 4.00171V12.005" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6635 4.00171V12.005" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.93641 8.67032H5.00227C3.71307 8.67032 2.66797 7.62522 2.66797 6.33601V6.33601C2.66797 5.04681 3.71307 4.00171 5.00227 4.00171H13.3391" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.93601 4.00171V12.005" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6635 4.00171V12.005" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.93641 8.67032H5.00227C3.71307 8.67032 2.66797 7.62522 2.66797 6.33601V6.33601C2.66797 5.04681 3.71307 4.00171 5.00227 4.00171H13.3391" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00375 5.0022V15.0064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6634 5.0022V15.0064" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.00401 10.838H6.58634C4.97484 10.838 3.66846 9.53158 3.66846 7.92008V7.92008C3.66846 6.30858 4.97484 5.0022 6.58634 5.0022H17.0073" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.071 6.00244V18.0074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6623 6.00244V18.0074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.0706 13.0054H8.16943C6.23563 13.0054 4.66797 11.4377 4.66797 9.5039V9.5039C4.66797 7.5701 6.23563 6.00244 8.16943 6.00244H20.6746" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.071 6.00244V18.0074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6623 6.00244V18.0074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.0706 13.0054H8.16943C6.23563 13.0054 4.66797 11.4377 4.66797 9.5039V9.5039C4.66797 7.5701 6.23563 6.00244 8.16943 6.00244H20.6746" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8725 8.00342V24.0101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3276 8.00342V24.0101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8723 17.3406H10.0041C7.42566 17.3406 5.33545 15.2504 5.33545 12.672V12.672C5.33545 10.0936 7.42566 8.00342 10.0041 8.00342H26.6777" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8725 8.00342V24.0101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3276 8.00342V24.0101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8723 17.3406H10.0041C7.42566 17.3406 5.33545 15.2504 5.33545 12.672V12.672C5.33545 10.0936 7.42566 8.00342 10.0041 8.00342H26.6777" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8725 8.00342V24.0101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3276 8.00342V24.0101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8723 17.3406H10.0041C7.42566 17.3406 5.33545 15.2504 5.33545 12.672V12.672C5.33545 10.0936 7.42566 8.00342 10.0041 8.00342H26.6777" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8725 8.00342V24.0101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3276 8.00342V24.0101" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.8723 17.3406H10.0041C7.42566 17.3406 5.33545 15.2504 5.33545 12.672V12.672C5.33545 10.0936 7.42566 8.00342 10.0041 8.00342H26.6777" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconTypeface: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
