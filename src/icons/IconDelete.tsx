import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3619 14.0025H5.63799C4.85386 14.0025 4.20192 13.3988 4.14178 12.6169L3.49805 4.24841H12.5018L11.8581 12.6169C11.7979 13.3988 11.146 14.0025 10.3619 14.0025V14.0025Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3357 4.24845H2.66455" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.12434 1.9975H9.8759C10.2903 1.9975 10.6262 2.33342 10.6262 2.74781V4.24844H5.37402V2.74781C5.37402 2.54881 5.45307 2.35797 5.59378 2.21726C5.7345 2.07655 5.92534 1.9975 6.12434 1.9975Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66602 11.3347H9.33379" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3619 14.0025H5.63799C4.85386 14.0025 4.20192 13.3988 4.14178 12.6169L3.49805 4.24841H12.5018L11.8581 12.6169C11.7979 13.3988 11.146 14.0025 10.3619 14.0025V14.0025Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3357 4.24845H2.66455" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.12434 1.9975H9.8759C10.2903 1.9975 10.6262 2.33342 10.6262 2.74781V4.24844H5.37402V2.74781C5.37402 2.54881 5.45307 2.35797 5.59378 2.21726C5.7345 2.07655 5.92534 1.9975 6.12434 1.9975Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66602 11.3347H9.33379" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.9523 17.5031H7.04748C6.06732 17.5031 5.2524 16.7485 5.17723 15.7712L4.37256 5.31055H15.6272L14.8226 15.7712C14.7474 16.7485 13.9325 17.5031 12.9523 17.5031V17.5031Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6695 5.31058H3.33057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.65518 2.49689H12.3446C12.8626 2.49689 13.2825 2.9168 13.2825 3.43478V5.31056H6.71729V3.43478C6.71729 3.18603 6.8161 2.94748 6.99199 2.77159C7.16788 2.5957 7.40643 2.49689 7.65518 2.49689Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.33252 14.1684H11.6672" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.5428 21.0037H8.45698C7.28078 21.0037 6.30288 20.0981 6.21267 18.9254L5.24707 6.37262H18.7527L17.7871 18.9254C17.6969 20.0981 16.719 21.0037 15.5428 21.0037V21.0037Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0033 6.37264H3.99658" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.1865 2.99628H14.8138C15.4354 2.99628 15.9393 3.50017 15.9393 4.12175V6.37268H8.06104V4.12175C8.06104 3.82325 8.17961 3.53699 8.39068 3.32592C8.60174 3.11485 8.88801 2.99628 9.1865 2.99628Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99902 17.002H14.0007" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.5428 21.0037H8.45698C7.28078 21.0037 6.30288 20.0981 6.21267 18.9254L5.24707 6.37262H18.7527L17.7871 18.9254C17.6969 20.0981 16.719 21.0037 15.5428 21.0037V21.0037Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0033 6.37264H3.99658" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.1865 2.99628H14.8138C15.4354 2.99628 15.9393 3.50017 15.9393 4.12175V6.37268H8.06104V4.12175C8.06104 3.82325 8.17961 3.53699 8.39068 3.32592C8.60174 3.11485 8.88801 2.99628 9.1865 2.99628Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99902 17.002H14.0007" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.7237 28.005H11.276C9.70771 28.005 8.40385 26.7975 8.28356 25.2339L6.99609 8.49683H25.0036L23.7161 25.2339C23.5958 26.7975 22.292 28.005 20.7237 28.005V28.005Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6713 8.4969H5.3291" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.2487 3.995H19.7518C20.5806 3.995 21.2524 4.66685 21.2524 5.49562V8.49687H10.748V5.49562C10.748 5.09763 10.9061 4.71594 11.1876 4.43452C11.469 4.1531 11.8507 3.995 12.2487 3.995Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 22.6694H18.6676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.7237 28.005H11.276C9.70771 28.005 8.40385 26.7975 8.28356 25.2339L6.99609 8.49683H25.0036L23.7161 25.2339C23.5958 26.7975 22.292 28.005 20.7237 28.005V28.005Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6713 8.4969H5.3291" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.2487 3.995H19.7518C20.5806 3.995 21.2524 4.66685 21.2524 5.49562V8.49687H10.748V5.49562C10.748 5.09763 10.9061 4.71594 11.1876 4.43452C11.469 4.1531 11.8507 3.995 12.2487 3.995Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 22.6694H18.6676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.7237 28.005H11.276C9.70771 28.005 8.40385 26.7975 8.28356 25.2339L6.99609 8.49683H25.0036L23.7161 25.2339C23.5958 26.7975 22.292 28.005 20.7237 28.005V28.005Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6713 8.4969H5.3291" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.2487 3.995H19.7518C20.5806 3.995 21.2524 4.66685 21.2524 5.49562V8.49687H10.748V5.49562C10.748 5.09763 10.9061 4.71594 11.1876 4.43452C11.469 4.1531 11.8507 3.995 12.2487 3.995Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 22.6694H18.6676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.7237 28.005H11.276C9.70771 28.005 8.40385 26.7975 8.28356 25.2339L6.99609 8.49683H25.0036L23.7161 25.2339C23.5958 26.7975 22.292 28.005 20.7237 28.005V28.005Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6713 8.4969H5.3291" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.2487 3.995H19.7518C20.5806 3.995 21.2524 4.66685 21.2524 5.49562V8.49687H10.748V5.49562C10.748 5.09763 10.9061 4.71594 11.1876 4.43452C11.469 4.1531 11.8507 3.995 12.2487 3.995Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 22.6694H18.6676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconDelete: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
