import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.15686 10H4.59745C4.26745 10 4 9.73429 4 9.40643V4.59357C4 4.26571 4.26745 4 4.59745 4H10.7363C11.0659 4 11.3333 4.26571 11.3333 4.59357V6.57143" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6296 11.9998H9.03704C8.46407 11.9998 8 11.5523 8 10.9998V9.6665C8 9.114 8.46407 8.6665 9.03704 8.6665H11.6296C12.2026 8.6665 12.6667 9.114 12.6667 9.6665V10.9998C12.6667 11.5523 12.2026 11.9998 11.6296 11.9998Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.15686 10H4.59745C4.26745 10 4 9.73429 4 9.40643V4.59357C4 4.26571 4.26745 4 4.59745 4H10.7363C11.0659 4 11.3333 4.26571 11.3333 4.59357V6.57143" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.6296 11.9998H9.03704C8.46407 11.9998 8 11.5523 8 10.9998V9.6665C8 9.114 8.46407 8.6665 9.03704 8.6665H11.6296C12.2026 8.6665 12.6667 9.114 12.6667 9.6665V10.9998C12.6667 11.5523 12.2026 11.9998 11.6296 11.9998Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.69608 12.5H5.74681C5.33431 12.5 5 12.1679 5 11.758V5.74196C5 5.33214 5.33431 5 5.74681 5H13.4204C13.8324 5 14.1667 5.33214 14.1667 5.74196V8.21429" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.537 14.9999H11.2963C10.5801 14.9999 10 14.4405 10 13.7499V12.0833C10 11.3926 10.5801 10.8333 11.2963 10.8333H14.537C15.2532 10.8333 15.8333 11.3926 15.8333 12.0833V13.7499C15.8333 14.4405 15.2532 14.9999 14.537 14.9999Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.23529 15H6.89618C6.40118 15 6 14.6014 6 14.1096V6.89036C6 6.39857 6.40118 6 6.89618 6H16.1045C16.5988 6 17 6.39857 17 6.89036V9.85714" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.4444 18H13.5556C12.6961 18 12 17.3287 12 16.5V14.5C12 13.6712 12.6961 13 13.5556 13H17.4444C18.3039 13 19 13.6712 19 14.5V16.5C19 17.3287 18.3039 18 17.4444 18Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.23529 15H6.89618C6.40118 15 6 14.6014 6 14.1096V6.89036C6 6.39857 6.40118 6 6.89618 6H16.1045C16.5988 6 17 6.39857 17 6.89036V9.85714" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.4444 18H13.5556C12.6961 18 12 17.3287 12 16.5V14.5C12 13.6712 12.6961 13 13.5556 13H17.4444C18.3039 13 19 13.6712 19 14.5V16.5C19 17.3287 18.3039 18 17.4444 18Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3137 20H9.1949C8.5349 20 8 19.4686 8 18.8129V9.18714C8 8.53143 8.5349 8 9.1949 8H21.4726C22.1318 8 22.6667 8.53143 22.6667 9.18714V13.1429" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M23.2593 23.9999H18.0741C16.9281 23.9999 16 23.1049 16 21.9999V19.3333C16 18.2283 16.9281 17.3333 18.0741 17.3333H23.2593C24.4052 17.3333 25.3333 18.2283 25.3333 19.3333V21.9999C25.3333 23.1049 24.4052 23.9999 23.2593 23.9999Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3137 20H9.1949C8.5349 20 8 19.4686 8 18.8129V9.18714C8 8.53143 8.5349 8 9.1949 8H21.4726C22.1318 8 22.6667 8.53143 22.6667 9.18714V13.1429" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M23.2593 23.9999H18.0741C16.9281 23.9999 16 23.1049 16 21.9999V19.3333C16 18.2283 16.9281 17.3333 18.0741 17.3333H23.2593C24.4052 17.3333 25.3333 18.2283 25.3333 19.3333V21.9999C25.3333 23.1049 24.4052 23.9999 23.2593 23.9999Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3137 20H9.1949C8.5349 20 8 19.4686 8 18.8129V9.18714C8 8.53143 8.5349 8 9.1949 8H21.4726C22.1318 8 22.6667 8.53143 22.6667 9.18714V13.1429" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M23.2593 23.9999H18.0741C16.9281 23.9999 16 23.1049 16 21.9999V19.3333C16 18.2283 16.9281 17.3333 18.0741 17.3333H23.2593C24.4052 17.3333 25.3333 18.2283 25.3333 19.3333V21.9999C25.3333 23.1049 24.4052 23.9999 23.2593 23.9999Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3137 20H9.1949C8.5349 20 8 19.4686 8 18.8129V9.18714C8 8.53143 8.5349 8 9.1949 8H21.4726C22.1318 8 22.6667 8.53143 22.6667 9.18714V13.1429" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M23.2593 23.9999H18.0741C16.9281 23.9999 16 23.1049 16 21.9999V19.3333C16 18.2283 16.9281 17.3333 18.0741 17.3333H23.2593C24.4052 17.3333 25.3333 18.2283 25.3333 19.3333V21.9999C25.3333 23.1049 24.4052 23.9999 23.2593 23.9999Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconMinimizePictureMode: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
