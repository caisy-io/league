import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.99756" y="8" width="12.005" height="6.0025" rx="2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66602 10.0008H9.33379" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6688 8V4.5599C12.6684 3.98702 12.2039 3.5228 11.631 3.5228H8.27427C8.10252 3.52253 7.94199 3.43741 7.84542 3.29537L7.11645 2.22426C7.02003 2.0825 6.85972 1.9976 6.68827 1.9975H4.36931C4.09402 1.99732 3.82996 2.1066 3.6353 2.30126C3.44065 2.49591 3.33137 2.75998 3.33154 3.03526V8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.99756" y="8" width="12.005" height="6.0025" rx="2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66602 10.0008H9.33379" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6688 8V4.5599C12.6684 3.98702 12.2039 3.5228 11.631 3.5228H8.27427C8.10252 3.52253 7.94199 3.43741 7.84542 3.29537L7.11645 2.22426C7.02003 2.0825 6.85972 1.9976 6.68827 1.9975H4.36931C4.09402 1.99732 3.82996 2.1066 3.6353 2.30126C3.44065 2.49591 3.33137 2.75998 3.33154 3.03526V8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.49707" y="10" width="15.0062" height="7.50312" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.33252 12.5011H11.6672" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.8356 10V5.69989C15.8351 4.98379 15.2545 4.40352 14.5384 4.40352H10.3425C10.1278 4.40318 9.92712 4.29677 9.80641 4.11923L8.8952 2.78034C8.77467 2.60313 8.57429 2.49702 8.35998 2.49689H5.46127C5.11716 2.49667 4.78708 2.63326 4.54376 2.87659C4.30044 3.11991 4.16384 3.44999 4.16406 3.79409V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.99609" y="12" width="18.0075" height="9.00375" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99902 15.0012H14.0007" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.0029 12V6.83988C19.0024 5.98056 18.3056 5.28423 17.4463 5.28423H12.4112C12.1535 5.28383 11.9127 5.15614 11.7679 4.94309L10.6744 3.33642C10.5298 3.12377 10.2893 2.99643 10.0322 2.99628H6.55372C6.14079 2.99601 5.7447 3.15993 5.45271 3.45192C5.16072 3.7439 4.99681 4.14 4.99707 4.55293V12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.99609" y="12" width="18.0075" height="9.00375" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99902 15.0012H14.0007" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.0029 12V6.83988C19.0024 5.98056 18.3056 5.28423 17.4463 5.28423H12.4112C12.1535 5.28383 11.9127 5.15614 11.7679 4.94309L10.6744 3.33642C10.5298 3.12377 10.2893 2.99643 10.0322 2.99628H6.55372C6.14079 2.99601 5.7447 3.15993 5.45271 3.45192C5.16072 3.7439 4.99681 4.14 4.99707 4.55293V12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99512" y="16" width="24.01" height="12.005" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 20.0017H18.6676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3375 16V9.1198C25.3368 7.97403 24.4078 7.0456 23.262 7.0456H16.5485C16.205 7.04507 15.884 6.87481 15.6908 6.59074L14.2329 4.44852C14.0401 4.16499 13.7194 3.9952 13.3765 3.995H8.73862C8.18804 3.99464 7.65992 4.2132 7.2706 4.60251C6.88129 4.99183 6.66273 5.51995 6.66309 6.07053V16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99512" y="16" width="24.01" height="12.005" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 20.0017H18.6676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3375 16V9.1198C25.3368 7.97403 24.4078 7.0456 23.262 7.0456H16.5485C16.205 7.04507 15.884 6.87481 15.6908 6.59074L14.2329 4.44852C14.0401 4.16499 13.7194 3.9952 13.3765 3.995H8.73862C8.18804 3.99464 7.65992 4.2132 7.2706 4.60251C6.88129 4.99183 6.66273 5.51995 6.66309 6.07053V16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99512" y="16" width="24.01" height="12.005" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 20.0017H18.6676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3375 16V9.1198C25.3368 7.97403 24.4078 7.0456 23.262 7.0456H16.5485C16.205 7.04507 15.884 6.87481 15.6908 6.59074L14.2329 4.44852C14.0401 4.16499 13.7194 3.9952 13.3765 3.995H8.73862C8.18804 3.99464 7.65992 4.2132 7.2706 4.60251C6.88129 4.99183 6.66273 5.51995 6.66309 6.07053V16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99512" y="16" width="24.01" height="12.005" rx="2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 20.0017H18.6676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.3375 16V9.1198C25.3368 7.97403 24.4078 7.0456 23.262 7.0456H16.5485C16.205 7.04507 15.884 6.87481 15.6908 6.59074L14.2329 4.44852C14.0401 4.16499 13.7194 3.9952 13.3765 3.995H8.73862C8.18804 3.99464 7.65992 4.2132 7.2706 4.60251C6.88129 4.99183 6.66273 5.51995 6.66309 6.07053V16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconArchive: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
