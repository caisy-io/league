import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 14H11.9997C12.7361 14 13.333 13.403 13.333 12.6667V5.49509C13.333 4.96466 13.1223 4.45595 12.7472 4.08088L11.2521 2.58579C10.8771 2.21071 10.3683 2 9.83791 2H4.66634C3.92996 2 3.33301 2.59695 3.33301 3.33333V6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 14H7.66667C8.21895 14 8.66667 13.5523 8.66667 13V10.3333C8.66667 9.78105 8.21895 9.33333 7.66667 9.33333H5.75C5.63965 9.33334 5.53645 9.27872 5.47438 9.18748L4.86505 8.29171C4.74093 8.10924 4.53455 8.00002 4.31387 8H3C2.44772 8 2 8.44772 2 9V13C2 13.5523 2.44772 14 3 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6663 14H11.9997C12.7361 14 13.333 13.403 13.333 12.6667V5.49509C13.333 4.96466 13.1223 4.45595 12.7472 4.08088L11.2521 2.58579C10.8771 2.21071 10.3683 2 9.83791 2H4.66634C3.92996 2 3.33301 2.59695 3.33301 3.33333V6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 14H7.66667C8.21895 14 8.66667 13.5523 8.66667 13V10.3333C8.66667 9.78105 8.21895 9.33333 7.66667 9.33333H5.75C5.63965 9.33334 5.53645 9.27872 5.47438 9.18748L4.86505 8.29171C4.74093 8.10924 4.53455 8.00002 4.31387 8H3C2.44772 8 2 8.44772 2 9V13C2 13.5523 2.44772 14 3 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3332 17.5H14.9998C15.9203 17.5 16.6665 16.7538 16.6665 15.8333V6.86887C16.6665 6.20583 16.4031 5.56994 15.9343 5.1011L14.0654 3.23223C13.5966 2.76339 12.9607 2.5 12.2976 2.5H5.83317C4.9127 2.5 4.1665 3.24619 4.1665 4.16667V7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.75 17.5H9.58333C10.2737 17.5 10.8333 16.9404 10.8333 16.25V12.9167C10.8333 12.2263 10.2737 11.6667 9.58333 11.6667H7.1875C7.04956 11.6667 6.92056 11.5984 6.84298 11.4843L6.08131 10.3646C5.92616 10.1366 5.66819 10 5.39233 10H3.75C3.05964 10 2.5 10.5596 2.5 11.25V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21H19C20.1046 21 21 20.1046 21 19V8.24264C21 7.44699 20.6839 6.68393 20.1213 6.12132L17.8787 3.87868C17.3161 3.31607 16.553 3 15.7574 3H8C6.89543 3 6 3.89543 6 5V9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5 21H12.5C13.3284 21 14 20.3284 14 19.5V15.5C14 14.6716 13.3284 14 12.5 14H9.625C9.45947 14 9.30467 13.9181 9.21157 13.7812L8.29757 12.4376C8.11139 12.1639 7.80183 12 7.4708 12H5.5C4.67157 12 4 12.6716 4 13.5V19.5C4 20.3284 4.67157 21 5.5 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>     
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21H19C20.1046 21 21 20.1046 21 19V8.24264C21 7.44699 20.6839 6.68393 20.1213 6.12132L17.8787 3.87868C17.3161 3.31607 16.553 3 15.7574 3H8C6.89543 3 6 3.89543 6 5V9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5 21H12.5C13.3284 21 14 20.3284 14 19.5V15.5C14 14.6716 13.3284 14 12.5 14H9.625C9.45947 14 9.30467 13.9181 9.21157 13.7812L8.29757 12.4376C8.11139 12.1639 7.80183 12 7.4708 12H5.5C4.67157 12 4 12.6716 4 13.5V19.5C4 20.3284 4.67157 21 5.5 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>      
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3332 28H23.9998C25.4726 28 26.6665 26.8061 26.6665 25.3333V10.9902C26.6665 9.92932 26.2451 8.91191 25.4949 8.16176L22.5047 5.17157C21.7546 4.42143 20.7372 4 19.6763 4H9.33317C7.86041 4 6.6665 5.19391 6.6665 6.66667V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 28H15.3333C16.4379 28 17.3333 27.1046 17.3333 26V20.6667C17.3333 19.5621 16.4379 18.6667 15.3333 18.6667H11.5C11.2793 18.6667 11.0729 18.5574 10.9488 18.375L9.73009 16.5834C9.48185 16.2185 9.0691 16 8.62773 16H6C4.89543 16 4 16.8954 4 18V26C4 27.1046 4.89543 28 6 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3332 28H23.9998C25.4726 28 26.6665 26.8061 26.6665 25.3333V10.9902C26.6665 9.92932 26.2451 8.91191 25.4949 8.16176L22.5047 5.17157C21.7546 4.42143 20.7372 4 19.6763 4H9.33317C7.86041 4 6.6665 5.19391 6.6665 6.66667V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 28H15.3333C16.4379 28 17.3333 27.1046 17.3333 26V20.6667C17.3333 19.5621 16.4379 18.6667 15.3333 18.6667H11.5C11.2793 18.6667 11.0729 18.5574 10.9488 18.375L9.73009 16.5834C9.48185 16.2185 9.0691 16 8.62773 16H6C4.89543 16 4 16.8954 4 18V26C4 27.1046 4.89543 28 6 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3332 28H23.9998C25.4726 28 26.6665 26.8061 26.6665 25.3333V10.9902C26.6665 9.92932 26.2451 8.91191 25.4949 8.16176L22.5047 5.17157C21.7546 4.42143 20.7372 4 19.6763 4H9.33317C7.86041 4 6.6665 5.19391 6.6665 6.66667V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 28H15.3333C16.4379 28 17.3333 27.1046 17.3333 26V20.6667C17.3333 19.5621 16.4379 18.6667 15.3333 18.6667H11.5C11.2793 18.6667 11.0729 18.5574 10.9488 18.375L9.73009 16.5834C9.48185 16.2185 9.0691 16 8.62773 16H6C4.89543 16 4 16.8954 4 18V26C4 27.1046 4.89543 28 6 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3332 28H23.9998C25.4726 28 26.6665 26.8061 26.6665 25.3333V10.9902C26.6665 9.92932 26.2451 8.91191 25.4949 8.16176L22.5047 5.17157C21.7546 4.42143 20.7372 4 19.6763 4H9.33317C7.86041 4 6.6665 5.19391 6.6665 6.66667V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 28H15.3333C16.4379 28 17.3333 27.1046 17.3333 26V20.6667C17.3333 19.5621 16.4379 18.6667 15.3333 18.6667H11.5C11.2793 18.6667 11.0729 18.5574 10.9488 18.375L9.73009 16.5834C9.48185 16.2185 9.0691 16 8.62773 16H6C4.89543 16 4 16.8954 4 18V26C4 27.1046 4.89543 28 6 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconProjectsFolder: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
