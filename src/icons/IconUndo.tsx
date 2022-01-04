import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33301 3.33325L3.33301 5.33325M3.33301 5.33325L5.33301 7.33325M3.33301 5.33325L9.33301 5.33325C11.5423 5.33325 13.333 6.97459 13.333 8.99992C13.333 11.0253 11.5423 12.6666 9.33301 12.6666H3.99967" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33301 3.33325L3.33301 5.33325M3.33301 5.33325L5.33301 7.33325M3.33301 5.33325L9.33301 5.33325C11.5423 5.33325 13.333 6.97459 13.333 8.99992C13.333 11.0253 11.5423 12.6666 9.33301 12.6666H3.99967" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66699 4.16675L4.16699 6.66675M4.16699 6.66675L6.66699 9.16675M4.16699 6.66675L11.667 6.66675C14.4287 6.66675 16.667 8.71842 16.667 11.2501C16.667 13.7817 14.4287 15.8334 11.667 15.8334H5.00033" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5L5 8M5 8L8 11M5 8H14C17.314 8 20 10.462 20 13.5C20 16.538 17.314 19 14 19H6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5L5 8M5 8L8 11M5 8H14C17.314 8 20 10.462 20 13.5C20 16.538 17.314 19 14 19H6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.667 6.66675L6.66699 10.6667M6.66699 10.6667L10.667 14.6667M6.66699 10.6667L18.667 10.6667C23.0857 10.6667 26.667 13.9494 26.667 18.0001C26.667 22.0507 23.0857 25.3334 18.667 25.3334H8.00033" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.667 6.66675L6.66699 10.6667M6.66699 10.6667L10.667 14.6667M6.66699 10.6667L18.667 10.6667C23.0857 10.6667 26.667 13.9494 26.667 18.0001C26.667 22.0507 23.0857 25.3334 18.667 25.3334H8.00033" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.667 6.66675L6.66699 10.6667M6.66699 10.6667L10.667 14.6667M6.66699 10.6667L18.667 10.6667C23.0857 10.6667 26.667 13.9494 26.667 18.0001C26.667 22.0507 23.0857 25.3334 18.667 25.3334H8.00033" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.667 6.66675L6.66699 10.6667M6.66699 10.6667L10.667 14.6667M6.66699 10.6667L18.667 10.6667C23.0857 10.6667 26.667 13.9494 26.667 18.0001C26.667 22.0507 23.0857 25.3334 18.667 25.3334H8.00033" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconUndo: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
