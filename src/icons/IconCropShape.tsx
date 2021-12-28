import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33333 4.66675V11.3334" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6663 11.3334V4.66675" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.333 13.9999H11.9997C11.6317 13.9999 11.333 13.7013 11.333 13.3333V11.9999C11.333 11.6319 11.6317 11.3333 11.9997 11.3333H13.333C13.701 11.3333 13.9997 11.6319 13.9997 11.9999V13.3333C13.9997 13.7013 13.701 13.9999 13.333 13.9999Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 13.9999H2.66667C2.29867 13.9999 2 13.7013 2 13.3333V11.9999C2 11.6319 2.29867 11.3333 2.66667 11.3333H4C4.368 11.3333 4.66667 11.6319 4.66667 11.9999V13.3333C4.66667 13.7013 4.368 13.9999 4 13.9999Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.333 4.66667H11.9997C11.6317 4.66667 11.333 4.368 11.333 4V2.66667C11.333 2.29867 11.6317 2 11.9997 2H13.333C13.701 2 13.9997 2.29867 13.9997 2.66667V4C13.9997 4.368 13.701 4.66667 13.333 4.66667Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4.66667H2.66667C2.29867 4.66667 2 4.368 2 4V2.66667C2 2.29867 2.29867 2 2.66667 2H4C4.368 2 4.66667 2.29867 4.66667 2.66667V4C4.66667 4.368 4.368 4.66667 4 4.66667Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66699 12.6666H11.3337" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3337 3.33333H4.66699" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33333 4.66675V11.3334" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6663 11.3334V4.66675" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.333 13.9999H11.9997C11.6317 13.9999 11.333 13.7013 11.333 13.3333V11.9999C11.333 11.6319 11.6317 11.3333 11.9997 11.3333H13.333C13.701 11.3333 13.9997 11.6319 13.9997 11.9999V13.3333C13.9997 13.7013 13.701 13.9999 13.333 13.9999Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 13.9999H2.66667C2.29867 13.9999 2 13.7013 2 13.3333V11.9999C2 11.6319 2.29867 11.3333 2.66667 11.3333H4C4.368 11.3333 4.66667 11.6319 4.66667 11.9999V13.3333C4.66667 13.7013 4.368 13.9999 4 13.9999Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.333 4.66667H11.9997C11.6317 4.66667 11.333 4.368 11.333 4V2.66667C11.333 2.29867 11.6317 2 11.9997 2H13.333C13.701 2 13.9997 2.29867 13.9997 2.66667V4C13.9997 4.368 13.701 4.66667 13.333 4.66667Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4.66667H2.66667C2.29867 4.66667 2 4.368 2 4V2.66667C2 2.29867 2.29867 2 2.66667 2H4C4.368 2 4.66667 2.29867 4.66667 2.66667V4C4.66667 4.368 4.368 4.66667 4 4.66667Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66699 12.6666H11.3337" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3337 3.33333H4.66699" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16667 5.83325V14.1666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8337 14.1666V5.83325" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.667 17.5001H15.0003C14.5403 17.5001 14.167 17.1267 14.167 16.6667V15.0001C14.167 14.5401 14.5403 14.1667 15.0003 14.1667H16.667C17.127 14.1667 17.5003 14.5401 17.5003 15.0001V16.6667C17.5003 17.1267 17.127 17.5001 16.667 17.5001Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 17.5001H3.33333C2.87333 17.5001 2.5 17.1267 2.5 16.6667V15.0001C2.5 14.5401 2.87333 14.1667 3.33333 14.1667H5C5.46 14.1667 5.83333 14.5401 5.83333 15.0001V16.6667C5.83333 17.1267 5.46 17.5001 5 17.5001Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.667 5.83333H15.0003C14.5403 5.83333 14.167 5.46 14.167 5V3.33333C14.167 2.87333 14.5403 2.5 15.0003 2.5H16.667C17.127 2.5 17.5003 2.87333 17.5003 3.33333V5C17.5003 5.46 17.127 5.83333 16.667 5.83333Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 5.83333H3.33333C2.87333 5.83333 2.5 5.46 2.5 5V3.33333C2.5 2.87333 2.87333 2.5 3.33333 2.5H5C5.46 2.5 5.83333 2.87333 5.83333 3.33333V5C5.83333 5.46 5.46 5.83333 5 5.83333Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83301 15.8334H14.1663" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1663 4.16667H5.83301" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 17V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 21H18C17.448 21 17 20.552 17 20V18C17 17.448 17.448 17 18 17H20C20.552 17 21 17.448 21 18V20C21 20.552 20.552 21 20 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 21H4C3.448 21 3 20.552 3 20V18C3 17.448 3.448 17 4 17H6C6.552 17 7 17.448 7 18V20C7 20.552 6.552 21 6 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 7H18C17.448 7 17 6.552 17 6V4C17 3.448 17.448 3 18 3H20C20.552 3 21 3.448 21 4V6C21 6.552 20.552 7 20 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 7H4C3.448 7 3 6.552 3 6V4C3 3.448 3.448 3 4 3H6C6.552 3 7 3.448 7 4V6C7 6.552 6.552 7 6 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 19H17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 5H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 17V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 21H18C17.448 21 17 20.552 17 20V18C17 17.448 17.448 17 18 17H20C20.552 17 21 17.448 21 18V20C21 20.552 20.552 21 20 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 21H4C3.448 21 3 20.552 3 20V18C3 17.448 3.448 17 4 17H6C6.552 17 7 17.448 7 18V20C7 20.552 6.552 21 6 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M20 7H18C17.448 7 17 6.552 17 6V4C17 3.448 17.448 3 18 3H20C20.552 3 21 3.448 21 4V6C21 6.552 20.552 7 20 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 7H4C3.448 7 3 6.552 3 6V4C3 3.448 3.448 3 4 3H6C6.552 3 7 3.448 7 4V6C7 6.552 6.552 7 6 7Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 19H17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 5H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66667 9.33325V22.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3337 22.6666V9.33325" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.667 28.0001H24.0003C23.2643 28.0001 22.667 27.4027 22.667 26.6667V24.0001C22.667 23.2641 23.2643 22.6667 24.0003 22.6667H26.667C27.403 22.6667 28.0003 23.2641 28.0003 24.0001V26.6667C28.0003 27.4027 27.403 28.0001 26.667 28.0001Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 28.0001H5.33333C4.59733 28.0001 4 27.4027 4 26.6667V24.0001C4 23.2641 4.59733 22.6667 5.33333 22.6667H8C8.736 22.6667 9.33333 23.2641 9.33333 24.0001V26.6667C9.33333 27.4027 8.736 28.0001 8 28.0001Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.667 9.33333H24.0003C23.2643 9.33333 22.667 8.736 22.667 8V5.33333C22.667 4.59733 23.2643 4 24.0003 4H26.667C27.403 4 28.0003 4.59733 28.0003 5.33333V8C28.0003 8.736 27.403 9.33333 26.667 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H8C8.736 4 9.33333 4.59733 9.33333 5.33333V8C9.33333 8.736 8.736 9.33333 8 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33301 25.3334H22.6663" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6663 6.66667H9.33301" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66667 9.33325V22.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3337 22.6666V9.33325" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.667 28.0001H24.0003C23.2643 28.0001 22.667 27.4027 22.667 26.6667V24.0001C22.667 23.2641 23.2643 22.6667 24.0003 22.6667H26.667C27.403 22.6667 28.0003 23.2641 28.0003 24.0001V26.6667C28.0003 27.4027 27.403 28.0001 26.667 28.0001Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 28.0001H5.33333C4.59733 28.0001 4 27.4027 4 26.6667V24.0001C4 23.2641 4.59733 22.6667 5.33333 22.6667H8C8.736 22.6667 9.33333 23.2641 9.33333 24.0001V26.6667C9.33333 27.4027 8.736 28.0001 8 28.0001Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.667 9.33333H24.0003C23.2643 9.33333 22.667 8.736 22.667 8V5.33333C22.667 4.59733 23.2643 4 24.0003 4H26.667C27.403 4 28.0003 4.59733 28.0003 5.33333V8C28.0003 8.736 27.403 9.33333 26.667 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H8C8.736 4 9.33333 4.59733 9.33333 5.33333V8C9.33333 8.736 8.736 9.33333 8 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33301 25.3334H22.6663" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6663 6.66667H9.33301" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>        
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66667 9.33325V22.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3337 22.6666V9.33325" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.667 28.0001H24.0003C23.2643 28.0001 22.667 27.4027 22.667 26.6667V24.0001C22.667 23.2641 23.2643 22.6667 24.0003 22.6667H26.667C27.403 22.6667 28.0003 23.2641 28.0003 24.0001V26.6667C28.0003 27.4027 27.403 28.0001 26.667 28.0001Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 28.0001H5.33333C4.59733 28.0001 4 27.4027 4 26.6667V24.0001C4 23.2641 4.59733 22.6667 5.33333 22.6667H8C8.736 22.6667 9.33333 23.2641 9.33333 24.0001V26.6667C9.33333 27.4027 8.736 28.0001 8 28.0001Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.667 9.33333H24.0003C23.2643 9.33333 22.667 8.736 22.667 8V5.33333C22.667 4.59733 23.2643 4 24.0003 4H26.667C27.403 4 28.0003 4.59733 28.0003 5.33333V8C28.0003 8.736 27.403 9.33333 26.667 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H8C8.736 4 9.33333 4.59733 9.33333 5.33333V8C9.33333 8.736 8.736 9.33333 8 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33301 25.3334H22.6663" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6663 6.66667H9.33301" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>     
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66667 9.33325V22.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3337 22.6666V9.33325" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.667 28.0001H24.0003C23.2643 28.0001 22.667 27.4027 22.667 26.6667V24.0001C22.667 23.2641 23.2643 22.6667 24.0003 22.6667H26.667C27.403 22.6667 28.0003 23.2641 28.0003 24.0001V26.6667C28.0003 27.4027 27.403 28.0001 26.667 28.0001Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 28.0001H5.33333C4.59733 28.0001 4 27.4027 4 26.6667V24.0001C4 23.2641 4.59733 22.6667 5.33333 22.6667H8C8.736 22.6667 9.33333 23.2641 9.33333 24.0001V26.6667C9.33333 27.4027 8.736 28.0001 8 28.0001Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M26.667 9.33333H24.0003C23.2643 9.33333 22.667 8.736 22.667 8V5.33333C22.667 4.59733 23.2643 4 24.0003 4H26.667C27.403 4 28.0003 4.59733 28.0003 5.33333V8C28.0003 8.736 27.403 9.33333 26.667 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 9.33333H5.33333C4.59733 9.33333 4 8.736 4 8V5.33333C4 4.59733 4.59733 4 5.33333 4H8C8.736 4 9.33333 4.59733 9.33333 5.33333V8C9.33333 8.736 8.736 9.33333 8 9.33333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33301 25.3334H22.6663" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.6663 6.66667H9.33301" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
};

export const IconCropShape: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
