import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14 8V8C14 11.314 11.314 14 8 14V14C4.686 14 2 11.314 2 8V8C2 4.686 4.686 2 8 2V2C11.314 2 14 4.686 14 8Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.29422 6.03871L9.88222 7.56938C10.2096 7.76271 10.2096 8.23671 9.88222 8.43005L7.29422 9.96071C6.96088 10.158 6.53955 9.91738 6.53955 9.53005V6.46938C6.53955 6.08205 6.96088 5.84138 7.29422 6.03871V6.03871Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14 8V8C14 11.314 11.314 14 8 14V14C4.686 14 2 11.314 2 8V8C2 4.686 4.686 2 8 2V2C11.314 2 14 4.686 14 8Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.29422 6.03871L9.88222 7.56938C10.2096 7.76271 10.2096 8.23671 9.88222 8.43005L7.29422 9.96071C6.96088 10.158 6.53955 9.91738 6.53955 9.53005V6.46938C6.53955 6.08205 6.96088 5.84138 7.29422 6.03871V6.03871Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5 10V10C17.5 14.1425 14.1425 17.5 10 17.5V17.5C5.8575 17.5 2.5 14.1425 2.5 10V10C2.5 5.8575 5.8575 2.5 10 2.5V2.5C14.1425 2.5 17.5 5.8575 17.5 10Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.11765 7.54851L12.3526 9.46185C12.7618 9.70351 12.7618 10.296 12.3526 10.5377L9.11765 12.451C8.70098 12.6977 8.17432 12.3968 8.17432 11.9127V8.08685C8.17432 7.60268 8.70098 7.30185 9.11765 7.54851V7.54851Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21 12V12C21 16.971 16.971 21 12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9411 9.05783L14.8231 11.3538C15.3141 11.6438 15.3141 12.3548 14.8231 12.6448L10.9411 14.9408C10.4411 15.2368 9.80908 14.8758 9.80908 14.2948V9.70383C9.80908 9.12283 10.4411 8.76183 10.9411 9.05783V9.05783Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21 12V12C21 16.971 16.971 21 12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9411 9.05783L14.8231 11.3538C15.3141 11.6438 15.3141 12.3548 14.8231 12.6448L10.9411 14.9408C10.4411 15.2368 9.80908 14.8758 9.80908 14.2948V9.70383C9.80908 9.12283 10.4411 8.76183 10.9411 9.05783V9.05783Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>        
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28 16V16C28 22.628 22.628 28 16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5879 12.0774L19.7639 15.1388C20.4186 15.5254 20.4186 16.4734 19.7639 16.8601L14.5879 19.9214C13.9213 20.3161 13.0786 19.8348 13.0786 19.0601V12.9388C13.0786 12.1641 13.9213 11.6828 14.5879 12.0774V12.0774Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28 16V16C28 22.628 22.628 28 16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5879 12.0774L19.7639 15.1388C20.4186 15.5254 20.4186 16.4734 19.7639 16.8601L14.5879 19.9214C13.9213 20.3161 13.0786 19.8348 13.0786 19.0601V12.9388C13.0786 12.1641 13.9213 11.6828 14.5879 12.0774V12.0774Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28 16V16C28 22.628 22.628 28 16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5879 12.0774L19.7639 15.1388C20.4186 15.5254 20.4186 16.4734 19.7639 16.8601L14.5879 19.9214C13.9213 20.3161 13.0786 19.8348 13.0786 19.0601V12.9388C13.0786 12.1641 13.9213 11.6828 14.5879 12.0774V12.0774Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28 16V16C28 22.628 22.628 28 16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5879 12.0774L19.7639 15.1388C20.4186 15.5254 20.4186 16.4734 19.7639 16.8601L14.5879 19.9214C13.9213 20.3161 13.0786 19.8348 13.0786 19.0601V12.9388C13.0786 12.1641 13.9213 11.6828 14.5879 12.0774V12.0774Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  )
}

export const IconPlayCircle: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
