import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.9873 8.00008H12.9806" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M10.0895 4.24532C9.89444 4.05104 9.57899 4.05104 9.3839 4.24532L5.96945 7.64564C5.87523 7.73946 5.82227 7.86696 5.82227 7.99992C5.82227 8.13289 5.87523 8.26038 5.96945 8.35421L9.3839 11.7545C9.57899 11.9488 9.89444 11.9488 10.0895 11.7545L13.504 8.35421C13.5982 8.26038 13.6512 8.13289 13.6512 7.99992C13.6512 7.86696 13.5982 7.73946 13.504 7.64564L10.0895 4.24532Z"/>
    </SIconBase>        
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.9873 8.00008H12.9806" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M10.0895 4.24532C9.89444 4.05104 9.57899 4.05104 9.3839 4.24532L5.96945 7.64564C5.87523 7.73946 5.82227 7.86696 5.82227 7.99992C5.82227 8.13289 5.87523 8.26038 5.96945 8.35421L9.3839 11.7545C9.57899 11.9488 9.89444 11.9488 10.0895 11.7545L13.504 8.35421C13.5982 8.26038 13.6512 8.13289 13.6512 7.99992C13.6512 7.86696 13.5982 7.73946 13.504 7.64564L10.0895 4.24532Z"/>
    </SIconBase>           
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.7334 9.99992H16.2251" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M12.5812 5.30665C12.3373 5.0638 11.943 5.0638 11.6991 5.30665L7.43105 9.55705C7.31327 9.67433 7.24707 9.83369 7.24707 9.9999C7.24707 10.1661 7.31327 10.3255 7.43105 10.4428L11.6991 14.6932C11.943 14.936 12.3373 14.936 12.5812 14.6932L16.8492 10.4428C16.967 10.3255 17.0332 10.1661 17.0332 9.9999C17.0332 9.83369 16.967 9.67433 16.8492 9.55705L12.5812 5.30665Z"/>
    </SIconBase>      
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.48047 12H19.4705" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M14.9283 6.36798C14.6356 6.07656 14.1624 6.07656 13.8698 6.36798L8.74812 11.4685C8.60679 11.6092 8.52734 11.8004 8.52734 11.9999C8.52734 12.1993 8.60679 12.3906 8.74812 12.5313L13.8698 17.6318C14.1624 17.9232 14.6356 17.9232 14.9283 17.6318L20.0499 12.5313C20.1913 12.3906 20.2707 12.1993 20.2707 11.9999C20.2707 11.8004 20.1913 11.6092 20.0499 11.4685L14.9283 6.36798Z"/>
    </SIconBase>      
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.48047 12H19.4705" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M14.9283 6.36798C14.6356 6.07656 14.1624 6.07656 13.8698 6.36798L8.74812 11.4685C8.60679 11.6092 8.52734 11.8004 8.52734 11.9999C8.52734 12.1993 8.60679 12.3906 8.74812 12.5313L13.8698 17.6318C14.1624 17.9232 14.6356 17.9232 14.9283 17.6318L20.0499 12.5313C20.1913 12.3906 20.2707 12.1993 20.2707 11.9999C20.2707 11.8004 20.1913 11.6092 20.0499 11.4685L14.9283 6.36798Z"/>
    </SIconBase>       
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97363 15.9999H25.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M19.9047 8.49065C19.5145 8.10208 18.8836 8.10208 18.4934 8.49065L11.6645 15.2913C11.476 15.4789 11.3701 15.7339 11.3701 15.9998C11.3701 16.2658 11.476 16.5208 11.6645 16.7084L18.4934 23.509C18.8836 23.8976 19.5145 23.8976 19.9047 23.509L26.7336 16.7084C26.922 16.5208 27.0279 16.2658 27.0279 15.9998C27.0279 15.7339 26.922 15.4789 26.7336 15.2913L19.9047 8.49065Z"/>
    </SIconBase>      
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97363 15.9999H25.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M19.9047 8.49065C19.5145 8.10208 18.8836 8.10208 18.4934 8.49065L11.6645 15.2913C11.476 15.4789 11.3701 15.7339 11.3701 15.9998C11.3701 16.2658 11.476 16.5208 11.6645 16.7084L18.4934 23.509C18.8836 23.8976 19.5145 23.8976 19.9047 23.509L26.7336 16.7084C26.922 16.5208 27.0279 16.2658 27.0279 15.9998C27.0279 15.7339 26.922 15.4789 26.7336 15.2913L19.9047 8.49065Z"/>
    </SIconBase>    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97363 15.9999H25.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M19.9047 8.49065C19.5145 8.10208 18.8836 8.10208 18.4934 8.49065L11.6645 15.2913C11.476 15.4789 11.3701 15.7339 11.3701 15.9998C11.3701 16.2658 11.476 16.5208 11.6645 16.7084L18.4934 23.509C18.8836 23.8976 19.5145 23.8976 19.9047 23.509L26.7336 16.7084C26.922 16.5208 27.0279 16.2658 27.0279 15.9998C27.0279 15.7339 26.922 15.4789 26.7336 15.2913L19.9047 8.49065Z"/>
    </SIconBase>       
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.97363 15.9999H25.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M19.9047 8.49065C19.5145 8.10208 18.8836 8.10208 18.4934 8.49065L11.6645 15.2913C11.476 15.4789 11.3701 15.7339 11.3701 15.9998C11.3701 16.2658 11.476 16.5208 11.6645 16.7084L18.4934 23.509C18.8836 23.8976 19.5145 23.8976 19.9047 23.509L26.7336 16.7084C26.922 16.5208 27.0279 16.2658 27.0279 15.9998C27.0279 15.7339 26.922 15.4789 26.7336 15.2913L19.9047 8.49065Z"/>
    </SIconBase>       
  ),
};

export const IconArrowDiamond: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
