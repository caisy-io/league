import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99984 5.33331V10.6666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6668 8.00002H5.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 14V14C4.686 14 2 11.314 2 8V8C2 4.686 4.686 2 8 2V2C11.314 2 14 4.686 14 8V8C14 11.314 11.314 14 8 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.99984 5.33331V10.6666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6668 8.00002H5.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 14V14C4.686 14 2 11.314 2 8V8C2 4.686 4.686 2 8 2V2C11.314 2 14 4.686 14 8V8C14 11.314 11.314 14 8 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.3337 6.66669V13.3334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6667 9.99998H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3335 17.5V17.5C6.191 17.5 2.8335 14.1425 2.8335 10V10C2.8335 5.8575 6.191 2.5 10.3335 2.5V2.5C14.476 2.5 17.8335 5.8575 17.8335 10V10C17.8335 14.1425 14.476 17.5 10.3335 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6665 8V16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6665 12H8.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6665 21V21C7.6955 21 3.6665 16.971 3.6665 12V12C3.6665 7.029 7.6955 3 12.6665 3V3C17.6375 3 21.6665 7.029 21.6665 12V12C21.6665 16.971 17.6375 21 12.6665 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6665 8V16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6665 12H8.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6665 21V21C7.6955 21 3.6665 16.971 3.6665 12V12C3.6665 7.029 7.6955 3 12.6665 3V3C17.6375 3 21.6665 7.029 21.6665 12V12C21.6665 16.971 17.6375 21 12.6665 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0002 10.6667V21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16V16C28 22.628 22.628 28 16 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0002 10.6667V21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16V16C28 22.628 22.628 28 16 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0002 10.6667V21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16V16C28 22.628 22.628 28 16 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0002 10.6667V21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16V16C28 22.628 22.628 28 16 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconPlusCircle: FC<IIconSize> = ({ size = 24 }) => IconSize[size];

