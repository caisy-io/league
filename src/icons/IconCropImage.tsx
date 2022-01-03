import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0003 11.3333H6.00033C5.26366 11.3333 4.66699 10.7367 4.66699 10V2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3333 13.9999V11.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33301 4.66675H9.99967C10.7363 4.66675 11.333 5.26341 11.333 6.00008V8.66675" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 4.66659H4.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.0003 11.3333H6.00033C5.26366 11.3333 4.66699 10.7367 4.66699 10V2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3333 13.9999V11.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33301 4.66675H9.99967C10.7363 4.66675 11.333 5.26341 11.333 6.00008V8.66675" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 4.66659H4.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4997 14.1667H7.49967C6.57884 14.1667 5.83301 13.4208 5.83301 12.5V2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1667 17.5001V14.1667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.16699 5.83325H12.5003C13.4212 5.83325 14.167 6.57909 14.167 7.49992V10.8333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 5.83341H5.83333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 17H9C7.895 17 7 16.105 7 15V3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 21V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 7H15C16.105 7 17 7.895 17 9V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 7H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 17H9C7.895 17 7 16.105 7 15V3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 21V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 7H15C16.105 7 17 7.895 17 9V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 7H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.9997 22.6667H11.9997C10.5263 22.6667 9.33301 21.4733 9.33301 20V4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 28.0001V22.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.667 9.33325H20.0003C21.4737 9.33325 22.667 10.5266 22.667 11.9999V17.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 9.33341H9.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>     
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.9997 22.6667H11.9997C10.5263 22.6667 9.33301 21.4733 9.33301 20V4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 28.0001V22.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.667 9.33325H20.0003C21.4737 9.33325 22.667 10.5266 22.667 11.9999V17.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 9.33341H9.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>        
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.9997 22.6667H11.9997C10.5263 22.6667 9.33301 21.4733 9.33301 20V4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 28.0001V22.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.667 9.33325H20.0003C21.4737 9.33325 22.667 10.5266 22.667 11.9999V17.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 9.33341H9.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>     
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.9997 22.6667H11.9997C10.5263 22.6667 9.33301 21.4733 9.33301 20V4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 28.0001V22.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.667 9.33325H20.0003C21.4737 9.33325 22.667 10.5266 22.667 11.9999V17.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 9.33341H9.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>        
  ),
};

export const IconCropImage: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
