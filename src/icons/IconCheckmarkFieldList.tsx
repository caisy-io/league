import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.66699 9.85325H11.3348" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6687 2.33081H3.33145C2.59476 2.33081 1.99756 2.92801 1.99756 3.6647V12.335C1.99756 13.0717 2.59476 13.6689 3.33145 13.6689H12.6687C13.4054 13.6689 14.0026 13.0717 14.0026 12.335V3.6647C14.0026 2.92801 13.4054 2.33081 12.6687 2.33081Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66504 9.67072L5.27796 10.2229L6.51248 9.11182" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.66699 6.51853H11.3348" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66504 6.336L5.27796 6.88823L6.51181 5.7771" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.66699 9.85325H11.3348" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6687 2.33081H3.33145C2.59476 2.33081 1.99756 2.92801 1.99756 3.6647V12.335C1.99756 13.0717 2.59476 13.6689 3.33145 13.6689H12.6687C13.4054 13.6689 14.0026 13.0717 14.0026 12.335V3.6647C14.0026 2.92801 13.4054 2.33081 12.6687 2.33081Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66504 9.67072L5.27796 10.2229L6.51248 9.11182" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.66699 6.51853H11.3348" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66504 6.336L5.27796 6.88823L6.51181 5.7771" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.167 12.3167H14.5017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.169 2.91382H4.49744C3.57658 2.91382 2.83008 3.66032 2.83008 4.58118V15.419C2.83008 16.3399 3.57658 17.0864 4.49744 17.0864H16.169C17.0898 17.0864 17.8363 16.3399 17.8363 15.419V4.58118C17.8363 3.66032 17.0898 2.91382 16.169 2.91382Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.16504 12.0883L6.93119 12.7786L8.47433 11.3896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.167 8.14853H14.5017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.16504 7.92006L6.93119 8.61035L8.4735 7.22144" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.667 14.7802H17.6687" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.6698 3.49658H5.66392C4.55889 3.49658 3.66309 4.39239 3.66309 5.49742V18.5028C3.66309 19.6079 4.55889 20.5037 5.66392 20.5037H19.6698C20.7748 20.5037 21.6706 19.6079 21.6706 18.5028V5.49742C21.6706 4.39239 20.7748 3.49658 19.6698 3.49658Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.66455 14.5061L8.58393 15.3344L10.4357 13.6677" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.667 9.77828H17.6687" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.66455 9.50412L8.58393 10.3325L10.4347 8.66577" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.667 14.7802H17.6687" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.6698 3.49658H5.66392C4.55889 3.49658 3.66309 4.39239 3.66309 5.49742V18.5028C3.66309 19.6079 4.55889 20.5037 5.66392 20.5037H19.6698C20.7748 20.5037 21.6706 19.6079 21.6706 18.5028V5.49742C21.6706 4.39239 20.7748 3.49658 19.6698 3.49658Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.66455 14.5061L8.58393 15.3344L10.4357 13.6677" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.667 9.77828H17.6687" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.66455 9.50412L8.58393 10.3325L10.4347 8.66577" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3335 19.707H22.6691" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3368 4.66211H6.66241C5.18903 4.66211 3.99463 5.85651 3.99463 7.32989V24.6704C3.99463 26.1438 5.18903 27.3382 6.66241 27.3382H25.3368C26.8102 27.3382 28.0046 26.1438 28.0046 24.6704V7.32989C28.0046 5.85651 26.8102 4.66211 25.3368 4.66211Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 19.3414L10.5564 20.4459L13.0254 18.2236" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3335 13.0375H22.6691" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 12.672L10.5564 13.7765L13.0241 11.5542" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3335 19.707H22.6691" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3368 4.66211H6.66241C5.18903 4.66211 3.99463 5.85651 3.99463 7.32989V24.6704C3.99463 26.1438 5.18903 27.3382 6.66241 27.3382H25.3368C26.8102 27.3382 28.0046 26.1438 28.0046 24.6704V7.32989C28.0046 5.85651 26.8102 4.66211 25.3368 4.66211Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 19.3414L10.5564 20.4459L13.0254 18.2236" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3335 13.0375H22.6691" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 12.672L10.5564 13.7765L13.0241 11.5542" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3335 19.707H22.6691" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3368 4.66211H6.66241C5.18903 4.66211 3.99463 5.85651 3.99463 7.32989V24.6704C3.99463 26.1438 5.18903 27.3382 6.66241 27.3382H25.3368C26.8102 27.3382 28.0046 26.1438 28.0046 24.6704V7.32989C28.0046 5.85651 26.8102 4.66211 25.3368 4.66211Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 19.3414L10.5564 20.4459L13.0254 18.2236" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3335 13.0375H22.6691" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 12.672L10.5564 13.7765L13.0241 11.5542" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3335 19.707H22.6691" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.3368 4.66211H6.66241C5.18903 4.66211 3.99463 5.85651 3.99463 7.32989V24.6704C3.99463 26.1438 5.18903 27.3382 6.66241 27.3382H25.3368C26.8102 27.3382 28.0046 26.1438 28.0046 24.6704V7.32989C28.0046 5.85651 26.8102 4.66211 25.3368 4.66211Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 19.3414L10.5564 20.4459L13.0254 18.2236" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3335 13.0375H22.6691" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 12.672L10.5564 13.7765L13.0241 11.5542" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
};

export const IconCheckmarkFieldList: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
