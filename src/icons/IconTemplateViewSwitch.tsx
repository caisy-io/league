import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 4.66667H2.66667C2.29867 4.66667 2 4.368 2 4V2.66667C2 2.29867 2.29867 2 2.66667 2H13.3333C13.7013 2 14 2.29867 14 2.66667V4C14 4.368 13.7013 4.66667 13.3333 4.66667Z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 9.33317H2.66667C2.29867 9.33317 2 9.0345 2 8.6665V7.33317C2 6.96517 2.29867 6.6665 2.66667 6.6665H13.3333C13.7013 6.6665 14 6.96517 14 7.33317V8.6665C14 9.0345 13.7013 9.33317 13.3333 9.33317Z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 14.0002H2.66667C2.29867 14.0002 2 13.7015 2 13.3335V12.0002C2 11.6322 2.29867 11.3335 2.66667 11.3335H13.3333C13.7013 11.3335 14 11.6322 14 12.0002V13.3335C14 13.7015 13.7013 14.0002 13.3333 14.0002Z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 4.66667H2.66667C2.29867 4.66667 2 4.368 2 4V2.66667C2 2.29867 2.29867 2 2.66667 2H13.3333C13.7013 2 14 2.29867 14 2.66667V4C14 4.368 13.7013 4.66667 13.3333 4.66667Z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 9.33317H2.66667C2.29867 9.33317 2 9.0345 2 8.6665V7.33317C2 6.96517 2.29867 6.6665 2.66667 6.6665H13.3333C13.7013 6.6665 14 6.96517 14 7.33317V8.6665C14 9.0345 13.7013 9.33317 13.3333 9.33317Z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 14.0002H2.66667C2.29867 14.0002 2 13.7015 2 13.3335V12.0002C2 11.6322 2.29867 11.3335 2.66667 11.3335H13.3333C13.7013 11.3335 14 11.6322 14 12.0002V13.3335C14 13.7015 13.7013 14.0002 13.3333 14.0002Z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6667 5.83333H3.33333C2.87333 5.83333 2.5 5.46 2.5 5V3.33333C2.5 2.87333 2.87333 2.5 3.33333 2.5H16.6667C17.1267 2.5 17.5 2.87333 17.5 3.33333V5C17.5 5.46 17.1267 5.83333 16.6667 5.83333Z" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6667 11.6668H3.33333C2.87333 11.6668 2.5 11.2935 2.5 10.8335V9.16683C2.5 8.70683 2.87333 8.3335 3.33333 8.3335H16.6667C17.1267 8.3335 17.5 8.70683 17.5 9.16683V10.8335C17.5 11.2935 17.1267 11.6668 16.6667 11.6668Z" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6667 17.4998H3.33333C2.87333 17.4998 2.5 17.1265 2.5 16.6665V14.9998C2.5 14.5398 2.87333 14.1665 3.33333 14.1665H16.6667C17.1267 14.1665 17.5 14.5398 17.5 14.9998V16.6665C17.5 17.1265 17.1267 17.4998 16.6667 17.4998Z" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 7H4C3.448 7 3 6.552 3 6V4C3 3.448 3.448 3 4 3H20C20.552 3 21 3.448 21 4V6C21 6.552 20.552 7 20 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 14H4C3.448 14 3 13.552 3 13V11C3 10.448 3.448 10 4 10H20C20.552 10 21 10.448 21 11V13C21 13.552 20.552 14 20 14Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 21H4C3.448 21 3 20.552 3 20V18C3 17.448 3.448 17 4 17H20C20.552 17 21 17.448 21 18V20C21 20.552 20.552 21 20 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20 7H4C3.448 7 3 6.552 3 6V4C3 3.448 3.448 3 4 3H20C20.552 3 21 3.448 21 4V6C21 6.552 20.552 7 20 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 14H4C3.448 14 3 13.552 3 13V11C3 10.448 3.448 10 4 10H20C20.552 10 21 10.448 21 11V13C21 13.552 20.552 14 20 14Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 21H4C3.448 21 3 20.552 3 20V18C3 17.448 3.448 17 4 17H20C20.552 17 21 17.448 21 18V20C21 20.552 20.552 21 20 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H26.6667C27.4027 4 28 4.59733 28 5.33333V8C28 8.736 27.4027 9.33333 26.6667 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 18.6668H5.33333C4.59733 18.6668 4 18.0695 4 17.3335V14.6668C4 13.9308 4.59733 13.3335 5.33333 13.3335H26.6667C27.4027 13.3335 28 13.9308 28 14.6668V17.3335C28 18.0695 27.4027 18.6668 26.6667 18.6668Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 27.9998H5.33333C4.59733 27.9998 4 27.4025 4 26.6665V23.9998C4 23.2638 4.59733 22.6665 5.33333 22.6665H26.6667C27.4027 22.6665 28 23.2638 28 23.9998V26.6665C28 27.4025 27.4027 27.9998 26.6667 27.9998Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H26.6667C27.4027 4 28 4.59733 28 5.33333V8C28 8.736 27.4027 9.33333 26.6667 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 18.6668H5.33333C4.59733 18.6668 4 18.0695 4 17.3335V14.6668C4 13.9308 4.59733 13.3335 5.33333 13.3335H26.6667C27.4027 13.3335 28 13.9308 28 14.6668V17.3335C28 18.0695 27.4027 18.6668 26.6667 18.6668Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 27.9998H5.33333C4.59733 27.9998 4 27.4025 4 26.6665V23.9998C4 23.2638 4.59733 22.6665 5.33333 22.6665H26.6667C27.4027 22.6665 28 23.2638 28 23.9998V26.6665C28 27.4025 27.4027 27.9998 26.6667 27.9998Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H26.6667C27.4027 4 28 4.59733 28 5.33333V8C28 8.736 27.4027 9.33333 26.6667 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 18.6668H5.33333C4.59733 18.6668 4 18.0695 4 17.3335V14.6668C4 13.9308 4.59733 13.3335 5.33333 13.3335H26.6667C27.4027 13.3335 28 13.9308 28 14.6668V17.3335C28 18.0695 27.4027 18.6668 26.6667 18.6668Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 27.9998H5.33333C4.59733 27.9998 4 27.4025 4 26.6665V23.9998C4 23.2638 4.59733 22.6665 5.33333 22.6665H26.6667C27.4027 22.6665 28 23.2638 28 23.9998V26.6665C28 27.4025 27.4027 27.9998 26.6667 27.9998Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H26.6667C27.4027 4 28 4.59733 28 5.33333V8C28 8.736 27.4027 9.33333 26.6667 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 18.6668H5.33333C4.59733 18.6668 4 18.0695 4 17.3335V14.6668C4 13.9308 4.59733 13.3335 5.33333 13.3335H26.6667C27.4027 13.3335 28 13.9308 28 14.6668V17.3335C28 18.0695 27.4027 18.6668 26.6667 18.6668Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6667 27.9998H5.33333C4.59733 27.9998 4 27.4025 4 26.6665V23.9998C4 23.2638 4.59733 22.6665 5.33333 22.6665H26.6667C27.4027 22.6665 28 23.2638 28 23.9998V26.6665C28 27.4025 27.4027 27.9998 26.6667 27.9998Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconTemplateViewSwitch: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
