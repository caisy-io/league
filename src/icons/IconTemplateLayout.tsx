import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6668 14H10.6668C9.93016 14 9.3335 13.4033 9.3335 12.6667V9.33333C9.3335 8.59667 9.93016 8 10.6668 8H12.6668C13.4035 8 14.0002 8.59667 14.0002 9.33333V12.6667C14.0002 13.4033 13.4035 14 12.6668 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6668 6H10.6668C9.93016 6 9.3335 5.40333 9.3335 4.66667V3.33333C9.3335 2.59667 9.93016 2 10.6668 2H12.6668C13.4035 2 14.0002 2.59667 14.0002 3.33333V4.66667C14.0002 5.40333 13.4035 6 12.6668 6Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.33333 2H5.33333C6.07 2 6.66667 2.59667 6.66667 3.33333V6.66667C6.66667 7.40333 6.07 8 5.33333 8H3.33333C2.59667 8 2 7.40333 2 6.66667V3.33333C2 2.59667 2.59667 2 3.33333 2Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.33333 10H5.33333C6.07 10 6.66667 10.5967 6.66667 11.3333V12.6667C6.66667 13.4033 6.07 14 5.33333 14H3.33333C2.59667 14 2 13.4033 2 12.6667V11.3333C2 10.5967 2.59667 10 3.33333 10Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6668 14H10.6668C9.93016 14 9.3335 13.4033 9.3335 12.6667V9.33333C9.3335 8.59667 9.93016 8 10.6668 8H12.6668C13.4035 8 14.0002 8.59667 14.0002 9.33333V12.6667C14.0002 13.4033 13.4035 14 12.6668 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6668 6H10.6668C9.93016 6 9.3335 5.40333 9.3335 4.66667V3.33333C9.3335 2.59667 9.93016 2 10.6668 2H12.6668C13.4035 2 14.0002 2.59667 14.0002 3.33333V4.66667C14.0002 5.40333 13.4035 6 12.6668 6Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.33333 2H5.33333C6.07 2 6.66667 2.59667 6.66667 3.33333V6.66667C6.66667 7.40333 6.07 8 5.33333 8H3.33333C2.59667 8 2 7.40333 2 6.66667V3.33333C2 2.59667 2.59667 2 3.33333 2Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.33333 10H5.33333C6.07 10 6.66667 10.5967 6.66667 11.3333V12.6667C6.66667 13.4033 6.07 14 5.33333 14H3.33333C2.59667 14 2 13.4033 2 12.6667V11.3333C2 10.5967 2.59667 10 3.33333 10Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.8332 17.5H13.3332C12.4123 17.5 11.6665 16.7542 11.6665 15.8333V11.6667C11.6665 10.7458 12.4123 10 13.3332 10H15.8332C16.754 10 17.4998 10.7458 17.4998 11.6667V15.8333C17.4998 16.7542 16.754 17.5 15.8332 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.8332 7.5H13.3332C12.4123 7.5 11.6665 6.75417 11.6665 5.83333V4.16667C11.6665 3.24583 12.4123 2.5 13.3332 2.5H15.8332C16.754 2.5 17.4998 3.24583 17.4998 4.16667V5.83333C17.4998 6.75417 16.754 7.5 15.8332 7.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.16667 2.5H6.66667C7.5875 2.5 8.33333 3.24583 8.33333 4.16667V8.33333C8.33333 9.25417 7.5875 10 6.66667 10H4.16667C3.24583 10 2.5 9.25417 2.5 8.33333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.16667 12.5H6.66667C7.5875 12.5 8.33333 13.2458 8.33333 14.1667V15.8333C8.33333 16.7542 7.5875 17.5 6.66667 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V14.1667C2.5 13.2458 3.24583 12.5 4.16667 12.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19 21H16C14.895 21 14 20.105 14 19V14C14 12.895 14.895 12 16 12H19C20.105 12 21 12.895 21 14V19C21 20.105 20.105 21 19 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19 9H16C14.895 9 14 8.105 14 7V5C14 3.895 14.895 3 16 3H19C20.105 3 21 3.895 21 5V7C21 8.105 20.105 9 19 9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 3H8C9.105 3 10 3.895 10 5V10C10 11.105 9.105 12 8 12H5C3.895 12 3 11.105 3 10V5C3 3.895 3.895 3 5 3Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 15H8C9.105 15 10 15.895 10 17V19C10 20.105 9.105 21 8 21H5C3.895 21 3 20.105 3 19V17C3 15.895 3.895 15 5 15Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19 21H16C14.895 21 14 20.105 14 19V14C14 12.895 14.895 12 16 12H19C20.105 12 21 12.895 21 14V19C21 20.105 20.105 21 19 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19 9H16C14.895 9 14 8.105 14 7V5C14 3.895 14.895 3 16 3H19C20.105 3 21 3.895 21 5V7C21 8.105 20.105 9 19 9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 3H8C9.105 3 10 3.895 10 5V10C10 11.105 9.105 12 8 12H5C3.895 12 3 11.105 3 10V5C3 3.895 3.895 3 5 3Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 15H8C9.105 15 10 15.895 10 17V19C10 20.105 9.105 21 8 21H5C3.895 21 3 20.105 3 19V17C3 15.895 3.895 15 5 15Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3332 28H21.3332C19.8598 28 18.6665 26.8067 18.6665 25.3333V18.6667C18.6665 17.1933 19.8598 16 21.3332 16H25.3332C26.8065 16 27.9998 17.1933 27.9998 18.6667V25.3333C27.9998 26.8067 26.8065 28 25.3332 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3332 12H21.3332C19.8598 12 18.6665 10.8067 18.6665 9.33333V6.66667C18.6665 5.19333 19.8598 4 21.3332 4H25.3332C26.8065 4 27.9998 5.19333 27.9998 6.66667V9.33333C27.9998 10.8067 26.8065 12 25.3332 12Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 4H10.6667C12.14 4 13.3333 5.19333 13.3333 6.66667V13.3333C13.3333 14.8067 12.14 16 10.6667 16H6.66667C5.19333 16 4 14.8067 4 13.3333V6.66667C4 5.19333 5.19333 4 6.66667 4Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 20H10.6667C12.14 20 13.3333 21.1933 13.3333 22.6667V25.3333C13.3333 26.8067 12.14 28 10.6667 28H6.66667C5.19333 28 4 26.8067 4 25.3333V22.6667C4 21.1933 5.19333 20 6.66667 20Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3332 28H21.3332C19.8598 28 18.6665 26.8067 18.6665 25.3333V18.6667C18.6665 17.1933 19.8598 16 21.3332 16H25.3332C26.8065 16 27.9998 17.1933 27.9998 18.6667V25.3333C27.9998 26.8067 26.8065 28 25.3332 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3332 12H21.3332C19.8598 12 18.6665 10.8067 18.6665 9.33333V6.66667C18.6665 5.19333 19.8598 4 21.3332 4H25.3332C26.8065 4 27.9998 5.19333 27.9998 6.66667V9.33333C27.9998 10.8067 26.8065 12 25.3332 12Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 4H10.6667C12.14 4 13.3333 5.19333 13.3333 6.66667V13.3333C13.3333 14.8067 12.14 16 10.6667 16H6.66667C5.19333 16 4 14.8067 4 13.3333V6.66667C4 5.19333 5.19333 4 6.66667 4Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 20H10.6667C12.14 20 13.3333 21.1933 13.3333 22.6667V25.3333C13.3333 26.8067 12.14 28 10.6667 28H6.66667C5.19333 28 4 26.8067 4 25.3333V22.6667C4 21.1933 5.19333 20 6.66667 20Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3332 28H21.3332C19.8598 28 18.6665 26.8067 18.6665 25.3333V18.6667C18.6665 17.1933 19.8598 16 21.3332 16H25.3332C26.8065 16 27.9998 17.1933 27.9998 18.6667V25.3333C27.9998 26.8067 26.8065 28 25.3332 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3332 12H21.3332C19.8598 12 18.6665 10.8067 18.6665 9.33333V6.66667C18.6665 5.19333 19.8598 4 21.3332 4H25.3332C26.8065 4 27.9998 5.19333 27.9998 6.66667V9.33333C27.9998 10.8067 26.8065 12 25.3332 12Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 4H10.6667C12.14 4 13.3333 5.19333 13.3333 6.66667V13.3333C13.3333 14.8067 12.14 16 10.6667 16H6.66667C5.19333 16 4 14.8067 4 13.3333V6.66667C4 5.19333 5.19333 4 6.66667 4Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 20H10.6667C12.14 20 13.3333 21.1933 13.3333 22.6667V25.3333C13.3333 26.8067 12.14 28 10.6667 28H6.66667C5.19333 28 4 26.8067 4 25.3333V22.6667C4 21.1933 5.19333 20 6.66667 20Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3332 28H21.3332C19.8598 28 18.6665 26.8067 18.6665 25.3333V18.6667C18.6665 17.1933 19.8598 16 21.3332 16H25.3332C26.8065 16 27.9998 17.1933 27.9998 18.6667V25.3333C27.9998 26.8067 26.8065 28 25.3332 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3332 12H21.3332C19.8598 12 18.6665 10.8067 18.6665 9.33333V6.66667C18.6665 5.19333 19.8598 4 21.3332 4H25.3332C26.8065 4 27.9998 5.19333 27.9998 6.66667V9.33333C27.9998 10.8067 26.8065 12 25.3332 12Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 4H10.6667C12.14 4 13.3333 5.19333 13.3333 6.66667V13.3333C13.3333 14.8067 12.14 16 10.6667 16H6.66667C5.19333 16 4 14.8067 4 13.3333V6.66667C4 5.19333 5.19333 4 6.66667 4Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 20H10.6667C12.14 20 13.3333 21.1933 13.3333 22.6667V25.3333C13.3333 26.8067 12.14 28 10.6667 28H6.66667C5.19333 28 4 26.8067 4 25.3333V22.6667C4 21.1933 5.19333 20 6.66667 20Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  )
}

export const IconTemplateLayout: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
