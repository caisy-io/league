import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 13.9998H10" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99929 11.4392V12.1499H5.99929V11.4392C5.99929 10.7345 5.67262 10.0765 5.12929 9.6272C4.18862 8.84786 3.56996 7.69453 3.50529 6.3932C3.38196 3.8992 5.43196 1.70653 7.92862 1.66853C10.4466 1.6292 12.5 3.65786 12.5 6.16653C12.5 7.56786 11.858 8.8172 10.8526 9.6412C10.3133 10.0832 9.99929 10.7419 9.99929 11.4392Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.69336 10.2996H10.3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 13.9998H10" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99929 11.4392V12.1499H5.99929V11.4392C5.99929 10.7345 5.67262 10.0765 5.12929 9.6272C4.18862 8.84786 3.56996 7.69453 3.50529 6.3932C3.38196 3.8992 5.43196 1.70653 7.92862 1.66853C10.4466 1.6292 12.5 3.65786 12.5 6.16653C12.5 7.56786 11.858 8.8172 10.8526 9.6412C10.3133 10.0832 9.99929 10.7419 9.99929 11.4392Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.69336 10.2996H10.3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 17.4997H12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.4991 14.299V15.1873H7.49911V14.299C7.49911 13.4182 7.09078 12.5957 6.41161 12.034C5.23578 11.0598 4.46245 9.61817 4.38161 7.9915C4.22745 4.874 6.78994 2.13316 9.91078 2.08566C13.0583 2.0365 15.6249 4.57233 15.6249 7.70816C15.6249 9.45983 14.8224 11.0215 13.5658 12.0515C12.8916 12.604 12.4991 13.4273 12.4991 14.299Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.1167 12.8747H12.875" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 21H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.9989 17.1588V18.2248H8.99893V17.1588C8.99893 16.1018 8.50893 15.1148 7.69393 14.4408C6.28293 13.2718 5.35493 11.5418 5.25793 9.5898C5.07293 5.8488 8.14793 2.5598 11.8929 2.5028C15.6699 2.4438 18.7499 5.4868 18.7499 9.2498C18.7499 11.3518 17.7869 13.2258 16.2789 14.4618C15.4699 15.1248 14.9989 16.1128 14.9989 17.1588Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.54004 15.4497H15.45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 21H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.9989 17.1588V18.2248H8.99893V17.1588C8.99893 16.1018 8.50893 15.1148 7.69393 14.4408C6.28293 13.2718 5.35493 11.5418 5.25793 9.5898C5.07293 5.8488 8.14793 2.5598 11.8929 2.5028C15.6699 2.4438 18.7499 5.4868 18.7499 9.2498C18.7499 11.3518 17.7869 13.2258 16.2789 14.4618C15.4699 15.1248 14.9989 16.1128 14.9989 17.1588Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.54004 15.4497H15.45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28.0002H20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9986 22.8789V24.3002H11.9986V22.8789C11.9986 21.4696 11.3452 20.1536 10.2586 19.2549C8.37725 17.6962 7.13991 15.3896 7.01058 12.7869C6.76391 7.79888 10.8639 3.41355 15.8572 3.33755C20.8932 3.25888 24.9999 7.31622 24.9999 12.3336C24.9999 15.1362 23.7159 17.6349 21.7052 19.2829C20.6266 20.1669 19.9986 21.4842 19.9986 22.8789Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3867 20.6003H20.6001" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28.0002H20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9986 22.8789V24.3002H11.9986V22.8789C11.9986 21.4696 11.3452 20.1536 10.2586 19.2549C8.37725 17.6962 7.13991 15.3896 7.01058 12.7869C6.76391 7.79888 10.8639 3.41355 15.8572 3.33755C20.8932 3.25888 24.9999 7.31622 24.9999 12.3336C24.9999 15.1362 23.7159 17.6349 21.7052 19.2829C20.6266 20.1669 19.9986 21.4842 19.9986 22.8789Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3867 20.6003H20.6001" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28.0002H20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9986 22.8789V24.3002H11.9986V22.8789C11.9986 21.4696 11.3452 20.1536 10.2586 19.2549C8.37725 17.6962 7.13991 15.3896 7.01058 12.7869C6.76391 7.79888 10.8639 3.41355 15.8572 3.33755C20.8932 3.25888 24.9999 7.31622 24.9999 12.3336C24.9999 15.1362 23.7159 17.6349 21.7052 19.2829C20.6266 20.1669 19.9986 21.4842 19.9986 22.8789Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3867 20.6003H20.6001" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 28.0002H20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9986 22.8789V24.3002H11.9986V22.8789C11.9986 21.4696 11.3452 20.1536 10.2586 19.2549C8.37725 17.6962 7.13991 15.3896 7.01058 12.7869C6.76391 7.79888 10.8639 3.41355 15.8572 3.33755C20.8932 3.25888 24.9999 7.31622 24.9999 12.3336C24.9999 15.1362 23.7159 17.6349 21.7052 19.2829C20.6266 20.1669 19.9986 21.4842 19.9986 22.8789Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3867 20.6003H20.6001" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconLightBulb: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
