import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4.66504" y="4.66528" width="9.33722" height="9.33722" rx="2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66534 11.3347H3.33145C2.59476 11.3347 1.99756 10.7375 1.99756 10.0008V3.33139C1.99756 2.5947 2.59476 1.9975 3.33145 1.9975H10.0009C10.7376 1.9975 11.3348 2.5947 11.3348 3.33139V4.66528" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4.66504" y="4.66528" width="9.33722" height="9.33722" rx="2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66534 11.3347H3.33145C2.59476 11.3347 1.99756 10.7375 1.99756 10.0008V3.33139C1.99756 2.5947 2.59476 1.9975 3.33145 1.9975H10.0009C10.7376 1.9975 11.3348 2.5947 11.3348 3.33139V4.66528" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.83154" y="5.8316" width="11.6715" height="11.6715" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.8313 14.1684H4.16394C3.24309 14.1684 2.49658 13.4219 2.49658 12.5011V4.16425C2.49658 3.24339 3.24309 2.49689 4.16394 2.49689H12.5007C13.4216 2.49689 14.1681 3.24339 14.1681 4.16425V5.83161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7.00293" y="7.00293" width="14.0058" height="14.0058" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.00313 17.0071H5.0023C3.89727 17.0071 3.00146 16.1113 3.00146 15.0063V5.00208C3.00146 3.89705 3.89727 3.00125 5.0023 3.00125H15.0065C16.1115 3.00125 17.0073 3.89705 17.0073 5.00208V7.00292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7.00293" y="7.00293" width="14.0058" height="14.0058" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.00313 17.0071H5.0023C3.89727 17.0071 3.00146 16.1113 3.00146 15.0063V5.00208C3.00146 3.89705 3.89727 3.00125 5.0023 3.00125H15.0065C16.1115 3.00125 17.0073 3.89705 17.0073 5.00208V7.00292" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9.3374" y="9.33722" width="18.6744" height="18.6744" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33702 22.6761H6.66924C5.19587 22.6761 4.00146 21.4817 4.00146 20.0083V6.66946C4.00146 5.19608 5.19587 4.00168 6.66924 4.00168H20.0081C21.4815 4.00168 22.6759 5.19608 22.6759 6.66946V9.33723" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9.3374" y="9.33722" width="18.6744" height="18.6744" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33702 22.6761H6.66924C5.19587 22.6761 4.00146 21.4817 4.00146 20.0083V6.66946C4.00146 5.19608 5.19587 4.00168 6.66924 4.00168H20.0081C21.4815 4.00168 22.6759 5.19608 22.6759 6.66946V9.33723" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9.3374" y="9.33722" width="18.6744" height="18.6744" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33702 22.6761H6.66924C5.19587 22.6761 4.00146 21.4817 4.00146 20.0083V6.66946C4.00146 5.19608 5.19587 4.00168 6.66924 4.00168H20.0081C21.4815 4.00168 22.6759 5.19608 22.6759 6.66946V9.33723" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9.3374" y="9.33722" width="18.6744" height="18.6744" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33702 22.6761H6.66924C5.19587 22.6761 4.00146 21.4817 4.00146 20.0083V6.66946C4.00146 5.19608 5.19587 4.00168 6.66924 4.00168H20.0081C21.4815 4.00168 22.6759 5.19608 22.6759 6.66946V9.33723" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconCopy: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
