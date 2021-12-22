import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.6665 4V9.33333C4.6665 10.4379 5.56193 11.3333 6.6665 11.3333H11.9998C13.1044 11.3333 13.9998 10.4379 13.9998 9.33333V4C13.9998 2.89543 13.1044 2 11.9998 2H6.6665C5.56193 2 4.6665 2.89543 4.6665 4Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3333 11.3334V12C11.3333 13.1046 10.4379 14 9.33333 14H4C2.89543 14 2 13.1046 2 12V6.66669C2 5.56212 2.89543 4.66669 4 4.66669H4.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33382 7.99998V5.33331" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6.6661H10.6667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.6665 4V9.33333C4.6665 10.4379 5.56193 11.3333 6.6665 11.3333H11.9998C13.1044 11.3333 13.9998 10.4379 13.9998 9.33333V4C13.9998 2.89543 13.1044 2 11.9998 2H6.6665C5.56193 2 4.6665 2.89543 4.6665 4Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3333 11.3334V12C11.3333 13.1046 10.4379 14 9.33333 14H4C2.89543 14 2 13.1046 2 12V6.66669C2 5.56212 2.89543 4.66669 4 4.66669H4.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33382 7.99998V5.33331" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6.6661H10.6667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.83301 5V11.6667C5.83301 13.0474 6.9523 14.1667 8.33301 14.1667H14.9997C16.3804 14.1667 17.4997 13.0474 17.4997 11.6667V5C17.4997 3.61929 16.3804 2.5 14.9997 2.5H8.33301C6.9523 2.5 5.83301 3.61929 5.83301 5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1667 14.1667V15C14.1667 16.3808 13.0474 17.5 11.6667 17.5H5C3.61929 17.5 2.5 16.3808 2.5 15V8.33337C2.5 6.95266 3.61929 5.83337 5 5.83337H5.83333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6672 9.99996V6.66663" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 8.33262H13.3333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 6V14C7 15.6569 8.34315 17 10 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3H10C8.34315 3 7 4.34315 7 6Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 17V18C17 19.6569 15.6569 21 14 21H6C4.34315 21 3 19.6569 3 18V10C3 8.34318 4.34315 7.00003 6 7.00003H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.001 12V7.99997" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 9.99915H16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7 6V14C7 15.6569 8.34315 17 10 17H18C19.6569 17 21 15.6569 21 14V6C21 4.34315 19.6569 3 18 3H10C8.34315 3 7 4.34315 7 6Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 17V18C17 19.6569 15.6569 21 14 21H6C4.34315 21 3 19.6569 3 18V10C3 8.34318 4.34315 7.00003 6 7.00003H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.001 12V7.99997" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 9.99915H16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33301 8V18.6667C9.33301 20.8758 11.1239 22.6667 13.333 22.6667H23.9997C26.2088 22.6667 27.9997 20.8758 27.9997 18.6667V8C27.9997 5.79086 26.2088 4 23.9997 4H13.333C11.1239 4 9.33301 5.79086 9.33301 8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 22.6667V24C22.6667 26.2092 20.8758 28 18.6667 28H8C5.79086 28 4 26.2092 4 24V13.3334C4 11.1242 5.79086 9.33337 8 9.33337H9.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6676 16V10.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13.3322H21.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33301 8V18.6667C9.33301 20.8758 11.1239 22.6667 13.333 22.6667H23.9997C26.2088 22.6667 27.9997 20.8758 27.9997 18.6667V8C27.9997 5.79086 26.2088 4 23.9997 4H13.333C11.1239 4 9.33301 5.79086 9.33301 8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 22.6667V24C22.6667 26.2092 20.8758 28 18.6667 28H8C5.79086 28 4 26.2092 4 24V13.3334C4 11.1242 5.79086 9.33337 8 9.33337H9.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6676 16V10.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13.3322H21.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33301 8V18.6667C9.33301 20.8758 11.1239 22.6667 13.333 22.6667H23.9997C26.2088 22.6667 27.9997 20.8758 27.9997 18.6667V8C27.9997 5.79086 26.2088 4 23.9997 4H13.333C11.1239 4 9.33301 5.79086 9.33301 8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 22.6667V24C22.6667 26.2092 20.8758 28 18.6667 28H8C5.79086 28 4 26.2092 4 24V13.3334C4 11.1242 5.79086 9.33337 8 9.33337H9.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6676 16V10.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13.3322H21.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33301 8V18.6667C9.33301 20.8758 11.1239 22.6667 13.333 22.6667H23.9997C26.2088 22.6667 27.9997 20.8758 27.9997 18.6667V8C27.9997 5.79086 26.2088 4 23.9997 4H13.333C11.1239 4 9.33301 5.79086 9.33301 8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6667 22.6667V24C22.6667 26.2092 20.8758 28 18.6667 28H8C5.79086 28 4 26.2092 4 24V13.3334C4 11.1242 5.79086 9.33337 8 9.33337H9.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6676 16V10.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 13.3322H21.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconDuplicate: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
