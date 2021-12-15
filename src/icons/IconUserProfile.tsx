import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3332 13.3333V12.8333C13.3332 11.2685 12.0646 10 10.4998 10H5.49984C3.93503 10 2.6665 11.2685 2.6665 12.8333V13.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.00016" cy="4.66667" r="2.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3332 13.3333V12.8333C13.3332 11.2685 12.0646 10 10.4998 10H5.49984C3.93503 10 2.6665 11.2685 2.6665 12.8333V13.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8.00016" cy="4.66667" r="2.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6668 16.6667V16.0417C16.6668 14.0857 15.0812 12.5 13.1252 12.5H6.87516C4.91915 12.5 3.3335 14.0857 3.3335 16.0417V16.6667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9.99984" cy="5.83333" r="3.33333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 20V19.25C21 16.9028 19.0972 15 16.75 15H9.25C6.90279 15 5 16.9028 5 19.25V20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13" cy="7" r="4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 20V19.25C21 16.9028 19.0972 15 16.75 15H9.25C6.90279 15 5 16.9028 5 19.25V20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13" cy="7" r="4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6668 26.6667V25.6667C26.6668 22.5371 24.1298 20 21.0002 20H11.0002C7.87055 20 5.3335 22.5371 5.3335 25.6667V26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15.9998" cy="9.33333" r="5.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6668 26.6667V25.6667C26.6668 22.5371 24.1298 20 21.0002 20H11.0002C7.87055 20 5.3335 22.5371 5.3335 25.6667V26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15.9998" cy="9.33333" r="5.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6668 26.6667V25.6667C26.6668 22.5371 24.1298 20 21.0002 20H11.0002C7.87055 20 5.3335 22.5371 5.3335 25.6667V26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15.9998" cy="9.33333" r="5.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6668 26.6667V25.6667C26.6668 22.5371 24.1298 20 21.0002 20H11.0002C7.87055 20 5.3335 22.5371 5.3335 25.6667V26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="15.9998" cy="9.33333" r="5.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconUserProfile: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
