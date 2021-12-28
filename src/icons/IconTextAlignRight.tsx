import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3385 3.00002H2.67188" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3379 6.33333H5.33789" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3385 9.66665H2.67188" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3382 13H8.00488" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3385 3.00002H2.67188" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3379 6.33333H5.33789" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3385 9.66665H2.67188" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3382 13H8.00488" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6712 3.74998H3.33789" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6719 7.91667H6.67188" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6712 12.0834H3.33789" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6715 16.25H10.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.0049 4.5H4.00488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0049 9.5H8.00488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0049 14.5H4.00488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0049 19.5H12.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.0049 4.5H4.00488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0049 9.5H8.00488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0049 14.5H4.00488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0049 19.5H12.0049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6712 5.99998H5.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6719 12.6667H10.6719" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6712 19.3334H5.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6715 26H16.0049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6712 5.99998H5.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6719 12.6667H10.6719" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6712 19.3334H5.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6715 26H16.0049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6712 5.99998H5.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6719 12.6667H10.6719" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6712 19.3334H5.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6715 26H16.0049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6712 5.99998H5.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6719 12.6667H10.6719" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6712 19.3334H5.33789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6715 26H16.0049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconTextAlignRight: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
