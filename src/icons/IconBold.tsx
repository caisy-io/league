import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.67188 4H8.58854C9.69311 4 10.5885 4.89543 10.5885 6V6C10.5885 7.10457 9.69311 8 8.58854 8H4.67188V4Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.67188 8H9.33854C10.4431 8 11.3385 8.89543 11.3385 10V10C11.3385 11.1046 10.4431 12 9.33854 12H4.67188V8Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.67188 4H8.58854C9.69311 4 10.5885 4.89543 10.5885 6V6C10.5885 7.10457 9.69311 8 8.58854 8H4.67188V4Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.67188 8H9.33854C10.4431 8 11.3385 8.89543 11.3385 10V10C11.3385 11.1046 10.4431 12 9.33854 12H4.67188V8Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.83789 5H10.7337C12.1144 5 13.2337 6.11929 13.2337 7.5V7.5C13.2337 8.88071 12.1144 10 10.7337 10H5.83789V5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.83789 10H11.6712C13.0519 10 14.1712 11.1193 14.1712 12.5V12.5C14.1712 13.8807 13.0519 15 11.6712 15H5.83789V10Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.00488 6H12.8799C14.5367 6 15.8799 7.34315 15.8799 9V9C15.8799 10.6569 14.5367 12 12.8799 12H7.00488V6Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.00488 12H14.0049C15.6617 12 17.0049 13.3431 17.0049 15V15C17.0049 16.6569 15.6617 18 14.0049 18H7.00488V12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.00488 6H12.8799C14.5367 6 15.8799 7.34315 15.8799 9V9C15.8799 10.6569 14.5367 12 12.8799 12H7.00488V6Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.00488 12H14.0049C15.6617 12 17.0049 13.3431 17.0049 15V15C17.0049 16.6569 15.6617 18 14.0049 18H7.00488V12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33789 8H17.1712C19.3804 8 21.1712 9.79086 21.1712 12V12C21.1712 14.2091 19.3804 16 17.1712 16H9.33789V8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33789 16H18.6712C20.8804 16 22.6712 17.7909 22.6712 20V20C22.6712 22.2091 20.8804 24 18.6712 24H9.33789V16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33789 8H17.1712C19.3804 8 21.1712 9.79086 21.1712 12V12C21.1712 14.2091 19.3804 16 17.1712 16H9.33789V8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33789 16H18.6712C20.8804 16 22.6712 17.7909 22.6712 20V20C22.6712 22.2091 20.8804 24 18.6712 24H9.33789V16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33789 8H17.1712C19.3804 8 21.1712 9.79086 21.1712 12V12C21.1712 14.2091 19.3804 16 17.1712 16H9.33789V8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33789 16H18.6712C20.8804 16 22.6712 17.7909 22.6712 20V20C22.6712 22.2091 20.8804 24 18.6712 24H9.33789V16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33789 8H17.1712C19.3804 8 21.1712 9.79086 21.1712 12V12C21.1712 14.2091 19.3804 16 17.1712 16H9.33789V8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.33789 16H18.6712C20.8804 16 22.6712 17.7909 22.6712 20V20C22.6712 22.2091 20.8804 24 18.6712 24H9.33789V16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconBold: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
