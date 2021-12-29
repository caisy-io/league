import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6687 14.0028H3.33145C2.59476 14.0028 1.99756 13.4056 1.99756 12.6689V6.66641C1.99756 5.92972 2.59476 5.33252 3.33145 5.33252H12.6687C13.4054 5.33252 14.0026 5.92972 14.0026 6.66641V12.6689C14.0026 13.4056 13.4054 14.0028 12.6687 14.0028Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6681 14.0026V3.99844C10.6681 3.26175 10.0709 2.66455 9.33419 2.66455H6.66641C5.92972 2.66455 5.33252 3.26175 5.33252 3.99844V14.0026" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6687 14.0028H3.33145C2.59476 14.0028 1.99756 13.4056 1.99756 12.6689V6.66641C1.99756 5.92972 2.59476 5.33252 3.33145 5.33252H12.6687C13.4054 5.33252 14.0026 5.92972 14.0026 6.66641V12.6689C14.0026 13.4056 13.4054 14.0028 12.6687 14.0028Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6681 14.0026V3.99844C10.6681 3.26175 10.0709 2.66455 9.33419 2.66455H6.66641C5.92972 2.66455 5.33252 3.26175 5.33252 3.99844V14.0026" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.836 17.5034H4.16443C3.24357 17.5034 2.49707 16.7569 2.49707 15.836V8.33289C2.49707 7.41203 3.24357 6.66553 4.16443 6.66553H15.836C16.7568 6.66553 17.5033 7.41203 17.5033 8.33289V15.836C17.5033 16.7569 16.7568 17.5034 15.836 17.5034Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.335 17.5031V4.99793C13.335 4.07707 12.5885 3.33057 11.6676 3.33057H8.33289C7.41203 3.33057 6.66553 4.07707 6.66553 4.99793V17.5031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.0028 20.0035H4.99693C3.8919 20.0035 2.99609 19.1077 2.99609 18.0026V8.99888C2.99609 7.89385 3.8919 6.99805 4.99693 6.99805H19.0028C20.1078 6.99805 21.0036 7.89385 21.0036 8.99888V18.0026C21.0036 19.1077 20.1078 20.0035 19.0028 20.0035Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0014 20.0037V4.99742C16.0014 3.89239 15.1056 2.99658 14.0005 2.99658H9.99888C8.89385 2.99658 7.99805 3.89239 7.99805 4.99742V20.0037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.0028 20.0035H4.99693C3.8919 20.0035 2.99609 19.1077 2.99609 18.0026V8.99888C2.99609 7.89385 3.8919 6.99805 4.99693 6.99805H19.0028C20.1078 6.99805 21.0036 7.89385 21.0036 8.99888V18.0026C21.0036 19.1077 20.1078 20.0035 19.0028 20.0035Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0014 20.0037V4.99742C16.0014 3.89239 15.1056 2.99658 14.0005 2.99658H9.99888C8.89385 2.99658 7.99805 3.89239 7.99805 4.99742V20.0037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>        
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3373 27.0051H6.66289C5.18952 27.0051 3.99512 25.8107 3.99512 24.3373V12.3323C3.99512 10.859 5.18952 9.66455 6.66289 9.66455H25.3373C26.8107 9.66455 28.0051 10.859 28.0051 12.3323V24.3373C28.0051 25.8107 26.8107 27.0051 25.3373 27.0051Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3357 27.0052V6.99688C21.3357 5.52351 20.1413 4.3291 18.6679 4.3291H13.3323C11.859 4.3291 10.6646 5.52351 10.6646 6.99688V27.0052" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3373 27.0051H6.66289C5.18952 27.0051 3.99512 25.8107 3.99512 24.3373V12.3323C3.99512 10.859 5.18952 9.66455 6.66289 9.66455H25.3373C26.8107 9.66455 28.0051 10.859 28.0051 12.3323V24.3373C28.0051 25.8107 26.8107 27.0051 25.3373 27.0051Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3357 27.0052V6.99688C21.3357 5.52351 20.1413 4.3291 18.6679 4.3291H13.3323C11.859 4.3291 10.6646 5.52351 10.6646 6.99688V27.0052" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3373 27.0051H6.66289C5.18952 27.0051 3.99512 25.8107 3.99512 24.3373V12.3323C3.99512 10.859 5.18952 9.66455 6.66289 9.66455H25.3373C26.8107 9.66455 28.0051 10.859 28.0051 12.3323V24.3373C28.0051 25.8107 26.8107 27.0051 25.3373 27.0051Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3357 27.0052V6.99688C21.3357 5.52351 20.1413 4.3291 18.6679 4.3291H13.3323C11.859 4.3291 10.6646 5.52351 10.6646 6.99688V27.0052" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3373 27.0051H6.66289C5.18952 27.0051 3.99512 25.8107 3.99512 24.3373V12.3323C3.99512 10.859 5.18952 9.66455 6.66289 9.66455H25.3373C26.8107 9.66455 28.0051 10.859 28.0051 12.3323V24.3373C28.0051 25.8107 26.8107 27.0051 25.3373 27.0051Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3357 27.0052V6.99688C21.3357 5.52351 20.1413 4.3291 18.6679 4.3291H13.3323C11.859 4.3291 10.6646 5.52351 10.6646 6.99688V27.0052" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconBriefcase: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
