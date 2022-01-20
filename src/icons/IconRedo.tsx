import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.667 3.33325L12.667 5.33325M12.667 5.33325L10.667 7.33325M12.667 5.33325L6.66699 5.33325C4.45766 5.33325 2.66699 6.97459 2.66699 8.99992C2.66699 11.0253 4.45766 12.6666 6.66699 12.6666H12.0003" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.667 3.33325L12.667 5.33325M12.667 5.33325L10.667 7.33325M12.667 5.33325L6.66699 5.33325C4.45766 5.33325 2.66699 6.97459 2.66699 8.99992C2.66699 11.0253 4.45766 12.6666 6.66699 12.6666H12.0003" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.333 4.16675L15.833 6.66675M15.833 6.66675L13.333 9.16675M15.833 6.66675L8.33301 6.66675C5.57134 6.66675 3.33301 8.71842 3.33301 11.2501C3.33301 13.7817 5.57134 15.8334 8.33301 15.8334H14.9997" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 5L19 8M19 8L16 11M19 8H10C6.686 8 4 10.462 4 13.5C4 16.538 6.686 19 10 19H18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 5L19 8M19 8L16 11M19 8H10C6.686 8 4 10.462 4 13.5C4 16.538 6.686 19 10 19H18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.333 6.66675L25.333 10.6667M25.333 10.6667L21.333 14.6667M25.333 10.6667L13.333 10.6667C8.91434 10.6667 5.33301 13.9494 5.33301 18.0001C5.33301 22.0507 8.91434 25.3334 13.333 25.3334H23.9997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.333 6.66675L25.333 10.6667M25.333 10.6667L21.333 14.6667M25.333 10.6667L13.333 10.6667C8.91434 10.6667 5.33301 13.9494 5.33301 18.0001C5.33301 22.0507 8.91434 25.3334 13.333 25.3334H23.9997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.333 6.66675L25.333 10.6667M25.333 10.6667L21.333 14.6667M25.333 10.6667L13.333 10.6667C8.91434 10.6667 5.33301 13.9494 5.33301 18.0001C5.33301 22.0507 8.91434 25.3334 13.333 25.3334H23.9997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.333 6.66675L25.333 10.6667M25.333 10.6667L21.333 14.6667M25.333 10.6667L13.333 10.6667C8.91434 10.6667 5.33301 13.9494 5.33301 18.0001C5.33301 22.0507 8.91434 25.3334 13.333 25.3334H23.9997" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconRedo: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
