import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9998 13.3334H3.99984C3.26317 13.3334 2.6665 12.7367 2.6665 12V4.00002C2.6665 3.26335 3.26317 2.66669 3.99984 2.66669H11.9998C12.7365 2.66669 13.3332 3.26335 13.3332 4.00002V12C13.3332 12.7367 12.7365 13.3334 11.9998 13.3334Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99984 5.33331V10.6666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6668 8.00002H5.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9998 13.3334H3.99984C3.26317 13.3334 2.6665 12.7367 2.6665 12V4.00002C2.6665 3.26335 3.26317 2.66669 3.99984 2.66669H11.9998C12.7365 2.66669 13.3332 3.26335 13.3332 4.00002V12C13.3332 12.7367 12.7365 13.3334 11.9998 13.3334Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99984 5.33331V10.6666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6668 8.00002H5.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.3337 16.6666H5.33366C4.41283 16.6666 3.66699 15.9208 3.66699 15V4.99998C3.66699 4.07915 4.41283 3.33331 5.33366 3.33331H15.3337C16.2545 3.33331 17.0003 4.07915 17.0003 4.99998V15C17.0003 15.9208 16.2545 16.6666 15.3337 16.6666Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.3337 6.66669V13.3334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6667 9.99998H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.6665 20H6.6665C5.5615 20 4.6665 19.105 4.6665 18V6C4.6665 4.895 5.5615 4 6.6665 4H18.6665C19.7715 4 20.6665 4.895 20.6665 6V18C20.6665 19.105 19.7715 20 18.6665 20Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6665 8V16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6665 12H8.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.6665 20H6.6665C5.5615 20 4.6665 19.105 4.6665 18V6C4.6665 4.895 5.5615 4 6.6665 4H18.6665C19.7715 4 20.6665 4.895 20.6665 6V18C20.6665 19.105 19.7715 20 18.6665 20Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6665 8V16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6665 12H8.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0002 26.6666H8.00016C6.52683 26.6666 5.3335 25.4733 5.3335 24V7.99998C5.3335 6.52665 6.52683 5.33331 8.00016 5.33331H24.0002C25.4735 5.33331 26.6668 6.52665 26.6668 7.99998V24C26.6668 25.4733 25.4735 26.6666 24.0002 26.6666Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0002 10.6667V21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0002 26.6666H8.00016C6.52683 26.6666 5.3335 25.4733 5.3335 24V7.99998C5.3335 6.52665 6.52683 5.33331 8.00016 5.33331H24.0002C25.4735 5.33331 26.6668 6.52665 26.6668 7.99998V24C26.6668 25.4733 25.4735 26.6666 24.0002 26.6666Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0002 10.6667V21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0002 26.6666H8.00016C6.52683 26.6666 5.3335 25.4733 5.3335 24V7.99998C5.3335 6.52665 6.52683 5.33331 8.00016 5.33331H24.0002C25.4735 5.33331 26.6668 6.52665 26.6668 7.99998V24C26.6668 25.4733 25.4735 26.6666 24.0002 26.6666Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0002 10.6667V21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0002 26.6666H8.00016C6.52683 26.6666 5.3335 25.4733 5.3335 24V7.99998C5.3335 6.52665 6.52683 5.33331 8.00016 5.33331H24.0002C25.4735 5.33331 26.6668 6.52665 26.6668 7.99998V24C26.6668 25.4733 25.4735 26.6666 24.0002 26.6666Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0002 10.6667V21.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconPlusBox: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
