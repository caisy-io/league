import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.67344 11.0457H9.62723C10.0479 11.0457 10.427 10.7916 10.5867 10.4024C10.7465 10.0132 10.6553 9.56606 10.3559 9.27048L4.69222 3.67884C4.35075 3.34172 3.8402 3.24271 3.39748 3.42776C2.95475 3.6128 2.66651 4.04567 2.6665 4.52552V12.2941C2.66652 12.7116 2.91682 13.0883 3.30165 13.2501C3.68648 13.412 4.13082 13.3273 4.42917 13.0353L6.31066 11.1937C6.40758 11.0989 6.53781 11.0457 6.67344 11.0457Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 2.66659H8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6665 5.33333H13.3332" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.67344 11.0457H9.62723C10.0479 11.0457 10.427 10.7916 10.5867 10.4024C10.7465 10.0132 10.6553 9.56606 10.3559 9.27048L4.69222 3.67884C4.35075 3.34172 3.8402 3.24271 3.39748 3.42776C2.95475 3.6128 2.66651 4.04567 2.6665 4.52552V12.2941C2.66652 12.7116 2.91682 13.0883 3.30165 13.2501C3.68648 13.412 4.13082 13.3273 4.42917 13.0353L6.31066 11.1937C6.40758 11.0989 6.53781 11.0457 6.67344 11.0457Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 2.66659H8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6665 5.33333H13.3332" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.67566 13.8072H12.3679C12.8938 13.8072 13.3676 13.4895 13.5672 13.003C13.7669 12.5166 13.653 11.9576 13.2787 11.5882L6.19913 4.59861C5.7723 4.17721 5.13412 4.05345 4.58071 4.28476C4.0273 4.51606 3.667 5.05715 3.66699 5.65696V15.3677C3.66701 15.8895 3.97989 16.3605 4.46093 16.5627C4.94196 16.765 5.49738 16.6592 5.87033 16.2942L8.22218 13.9922C8.34334 13.8736 8.50613 13.8072 8.67566 13.8072Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.0002 3.33341H10.3335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.667 6.66667H17.0003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6769 16.5685H15.1076C15.7386 16.5685 16.3072 16.1873 16.5468 15.6035C16.7864 15.0197 16.6497 14.349 16.2006 13.9056L7.70507 5.51814C7.19288 5.01246 6.42705 4.86395 5.76296 5.14151C5.09887 5.41908 4.66651 6.06839 4.6665 6.78815V18.441C4.66653 19.0672 5.04198 19.6324 5.61922 19.8751C6.19647 20.1178 6.86297 19.9908 7.3105 19.5528L10.1327 16.7905C10.2781 16.6482 10.4735 16.5685 10.6769 16.5685Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6665 4H12.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6665 8H20.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6769 16.5685H15.1076C15.7386 16.5685 16.3072 16.1873 16.5468 15.6035C16.7864 15.0197 16.6497 14.349 16.2006 13.9056L7.70507 5.51814C7.19288 5.01246 6.42705 4.86395 5.76296 5.14151C5.09887 5.41908 4.66651 6.06839 4.6665 6.78815V18.441C4.66653 19.0672 5.04198 19.6324 5.61922 19.8751C6.19647 20.1178 6.86297 19.9908 7.3105 19.5528L10.1327 16.7905C10.2781 16.6482 10.4735 16.5685 10.6769 16.5685Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6665 4H12.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6665 8H20.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3474 22.0915H19.2549C20.0964 22.0915 20.8544 21.5832 21.1739 20.8048C21.4934 20.0264 21.311 19.1321 20.7123 18.541L9.38492 7.35769C8.70199 6.68344 7.68089 6.48542 6.79544 6.85551C5.90999 7.2256 5.3335 8.09135 5.3335 9.05103V24.5882C5.33353 25.4231 5.83413 26.1767 6.60379 26.5003C7.37345 26.8239 8.26212 26.6546 8.85883 26.0706L12.6218 22.3874C12.8156 22.1977 13.0761 22.0915 13.3474 22.0915Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 5.33341H16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3335 10.6667H26.6668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3474 22.0915H19.2549C20.0964 22.0915 20.8544 21.5832 21.1739 20.8048C21.4934 20.0264 21.311 19.1321 20.7123 18.541L9.38492 7.35769C8.70199 6.68344 7.68089 6.48542 6.79544 6.85551C5.90999 7.2256 5.3335 8.09135 5.3335 9.05103V24.5882C5.33353 25.4231 5.83413 26.1767 6.60379 26.5003C7.37345 26.8239 8.26212 26.6546 8.85883 26.0706L12.6218 22.3874C12.8156 22.1977 13.0761 22.0915 13.3474 22.0915Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 5.33341H16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3335 10.6667H26.6668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3474 22.0915H19.2549C20.0964 22.0915 20.8544 21.5832 21.1739 20.8048C21.4934 20.0264 21.311 19.1321 20.7123 18.541L9.38492 7.35769C8.70199 6.68344 7.68089 6.48542 6.79544 6.85551C5.90999 7.2256 5.3335 8.09135 5.3335 9.05103V24.5882C5.33353 25.4231 5.83413 26.1767 6.60379 26.5003C7.37345 26.8239 8.26212 26.6546 8.85883 26.0706L12.6218 22.3874C12.8156 22.1977 13.0761 22.0915 13.3474 22.0915Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 5.33341H16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3335 10.6667H26.6668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3474 22.0915H19.2549C20.0964 22.0915 20.8544 21.5832 21.1739 20.8048C21.4934 20.0264 21.311 19.1321 20.7123 18.541L9.38492 7.35769C8.70199 6.68344 7.68089 6.48542 6.79544 6.85551C5.90999 7.2256 5.3335 8.09135 5.3335 9.05103V24.5882C5.33353 25.4231 5.83413 26.1767 6.60379 26.5003C7.37345 26.8239 8.26212 26.6546 8.85883 26.0706L12.6218 22.3874C12.8156 22.1977 13.0761 22.0915 13.3474 22.0915Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 5.33341H16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3335 10.6667H26.6668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconPointer: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
