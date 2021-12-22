import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.16667 6.5H3.33333C2.59667 6.5 2 5.90333 2 5.16667V3.33333C2 2.59667 2.59667 2 3.33333 2H5.16667C5.90333 2 6.5 2.59667 6.5 3.33333V5.16667C6.5 5.90333 5.90333 6.5 5.16667 6.5Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6667 6.5H10.8333C10.0967 6.5 9.5 5.90333 9.5 5.16667V3.33333C9.5 2.59667 10.0967 2 10.8333 2H12.6667C13.4033 2 14 2.59667 14 3.33333V5.16667C14 5.90333 13.4033 6.5 12.6667 6.5Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.16667 14H3.33333C2.59667 14 2 13.4033 2 12.6667V10.8333C2 10.0967 2.59667 9.5 3.33333 9.5H5.16667C5.90333 9.5 6.5 10.0967 6.5 10.8333V12.6667C6.5 13.4033 5.90333 14 5.16667 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6667 14H10.8333C10.0967 14 9.5 13.4033 9.5 12.6667V10.8333C9.5 10.0967 10.0967 9.5 10.8333 9.5H12.6667C13.4033 9.5 14 10.0967 14 10.8333V12.6667C14 13.4033 13.4033 14 12.6667 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.16667 6.5H3.33333C2.59667 6.5 2 5.90333 2 5.16667V3.33333C2 2.59667 2.59667 2 3.33333 2H5.16667C5.90333 2 6.5 2.59667 6.5 3.33333V5.16667C6.5 5.90333 5.90333 6.5 5.16667 6.5Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6667 6.5H10.8333C10.0967 6.5 9.5 5.90333 9.5 5.16667V3.33333C9.5 2.59667 10.0967 2 10.8333 2H12.6667C13.4033 2 14 2.59667 14 3.33333V5.16667C14 5.90333 13.4033 6.5 12.6667 6.5Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.16667 14H3.33333C2.59667 14 2 13.4033 2 12.6667V10.8333C2 10.0967 2.59667 9.5 3.33333 9.5H5.16667C5.90333 9.5 6.5 10.0967 6.5 10.8333V12.6667C6.5 13.4033 5.90333 14 5.16667 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6667 14H10.8333C10.0967 14 9.5 13.4033 9.5 12.6667V10.8333C9.5 10.0967 10.0967 9.5 10.8333 9.5H12.6667C13.4033 9.5 14 10.0967 14 10.8333V12.6667C14 13.4033 13.4033 14 12.6667 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.45833 8.125H4.16667C3.24583 8.125 2.5 7.37917 2.5 6.45833V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H6.45833C7.37917 2.5 8.125 3.24583 8.125 4.16667V6.45833C8.125 7.37917 7.37917 8.125 6.45833 8.125Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.8333 8.125H13.5417C12.6208 8.125 11.875 7.37917 11.875 6.45833V4.16667C11.875 3.24583 12.6208 2.5 13.5417 2.5H15.8333C16.7542 2.5 17.5 3.24583 17.5 4.16667V6.45833C17.5 7.37917 16.7542 8.125 15.8333 8.125Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.45833 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V13.5417C2.5 12.6208 3.24583 11.875 4.16667 11.875H6.45833C7.37917 11.875 8.125 12.6208 8.125 13.5417V15.8333C8.125 16.7542 7.37917 17.5 6.45833 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.8333 17.5H13.5417C12.6208 17.5 11.875 16.7542 11.875 15.8333V13.5417C11.875 12.6208 12.6208 11.875 13.5417 11.875H15.8333C16.7542 11.875 17.5 12.6208 17.5 13.5417V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.75 9.75H6C4.895 9.75 4 8.855 4 7.75V5C4 3.895 4.895 3 6 3H8.75C9.855 3 10.75 3.895 10.75 5V7.75C10.75 8.855 9.855 9.75 8.75 9.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 9.75H17.25C16.145 9.75 15.25 8.855 15.25 7.75V5C15.25 3.895 16.145 3 17.25 3H20C21.105 3 22 3.895 22 5V7.75C22 8.855 21.105 9.75 20 9.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.75 21H6C4.895 21 4 20.105 4 19V16.25C4 15.145 4.895 14.25 6 14.25H8.75C9.855 14.25 10.75 15.145 10.75 16.25V19C10.75 20.105 9.855 21 8.75 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 21H17.25C16.145 21 15.25 20.105 15.25 19V16.25C15.25 15.145 16.145 14.25 17.25 14.25H20C21.105 14.25 22 15.145 22 16.25V19C22 20.105 21.105 21 20 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>         
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.75 9.75H6C4.895 9.75 4 8.855 4 7.75V5C4 3.895 4.895 3 6 3H8.75C9.855 3 10.75 3.895 10.75 5V7.75C10.75 8.855 9.855 9.75 8.75 9.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 9.75H17.25C16.145 9.75 15.25 8.855 15.25 7.75V5C15.25 3.895 16.145 3 17.25 3H20C21.105 3 22 3.895 22 5V7.75C22 8.855 21.105 9.75 20 9.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.75 21H6C4.895 21 4 20.105 4 19V16.25C4 15.145 4.895 14.25 6 14.25H8.75C9.855 14.25 10.75 15.145 10.75 16.25V19C10.75 20.105 9.855 21 8.75 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 21H17.25C16.145 21 15.25 20.105 15.25 19V16.25C15.25 15.145 16.145 14.25 17.25 14.25H20C21.105 14.25 22 15.145 22 16.25V19C22 20.105 21.105 21 20 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>          
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3333 13H6.66667C5.19333 13 4 11.8067 4 10.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H10.3333C11.8067 4 13 5.19333 13 6.66667V10.3333C13 11.8067 11.8067 13 10.3333 13Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 13H21.6667C20.1933 13 19 11.8067 19 10.3333V6.66667C19 5.19333 20.1933 4 21.6667 4H25.3333C26.8067 4 28 5.19333 28 6.66667V10.3333C28 11.8067 26.8067 13 25.3333 13Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V21.6667C4 20.1933 5.19333 19 6.66667 19H10.3333C11.8067 19 13 20.1933 13 21.6667V25.3333C13 26.8067 11.8067 28 10.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 28H21.6667C20.1933 28 19 26.8067 19 25.3333V21.6667C19 20.1933 20.1933 19 21.6667 19H25.3333C26.8067 19 28 20.1933 28 21.6667V25.3333C28 26.8067 26.8067 28 25.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3333 13H6.66667C5.19333 13 4 11.8067 4 10.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H10.3333C11.8067 4 13 5.19333 13 6.66667V10.3333C13 11.8067 11.8067 13 10.3333 13Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 13H21.6667C20.1933 13 19 11.8067 19 10.3333V6.66667C19 5.19333 20.1933 4 21.6667 4H25.3333C26.8067 4 28 5.19333 28 6.66667V10.3333C28 11.8067 26.8067 13 25.3333 13Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V21.6667C4 20.1933 5.19333 19 6.66667 19H10.3333C11.8067 19 13 20.1933 13 21.6667V25.3333C13 26.8067 11.8067 28 10.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 28H21.6667C20.1933 28 19 26.8067 19 25.3333V21.6667C19 20.1933 20.1933 19 21.6667 19H25.3333C26.8067 19 28 20.1933 28 21.6667V25.3333C28 26.8067 26.8067 28 25.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3333 13H6.66667C5.19333 13 4 11.8067 4 10.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H10.3333C11.8067 4 13 5.19333 13 6.66667V10.3333C13 11.8067 11.8067 13 10.3333 13Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 13H21.6667C20.1933 13 19 11.8067 19 10.3333V6.66667C19 5.19333 20.1933 4 21.6667 4H25.3333C26.8067 4 28 5.19333 28 6.66667V10.3333C28 11.8067 26.8067 13 25.3333 13Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V21.6667C4 20.1933 5.19333 19 6.66667 19H10.3333C11.8067 19 13 20.1933 13 21.6667V25.3333C13 26.8067 11.8067 28 10.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 28H21.6667C20.1933 28 19 26.8067 19 25.3333V21.6667C19 20.1933 20.1933 19 21.6667 19H25.3333C26.8067 19 28 20.1933 28 21.6667V25.3333C28 26.8067 26.8067 28 25.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3333 13H6.66667C5.19333 13 4 11.8067 4 10.3333V6.66667C4 5.19333 5.19333 4 6.66667 4H10.3333C11.8067 4 13 5.19333 13 6.66667V10.3333C13 11.8067 11.8067 13 10.3333 13Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 13H21.6667C20.1933 13 19 11.8067 19 10.3333V6.66667C19 5.19333 20.1933 4 21.6667 4H25.3333C26.8067 4 28 5.19333 28 6.66667V10.3333C28 11.8067 26.8067 13 25.3333 13Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3333 28H6.66667C5.19333 28 4 26.8067 4 25.3333V21.6667C4 20.1933 5.19333 19 6.66667 19H10.3333C11.8067 19 13 20.1933 13 21.6667V25.3333C13 26.8067 11.8067 28 10.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3333 28H21.6667C20.1933 28 19 26.8067 19 25.3333V21.6667C19 20.1933 20.1933 19 21.6667 19H25.3333C26.8067 19 28 20.1933 28 21.6667V25.3333C28 26.8067 26.8067 28 25.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconItemsGroup: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
