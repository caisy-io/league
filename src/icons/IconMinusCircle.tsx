import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

interface IIconSolid extends IIconSize {
  solid?: boolean;
}

const IconSize = {
  12: (solid) => (
  <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 14C4.686 14 2 11.314 2 8C2 4.686 4.686 2 8 2C11.314 2 14 4.686 14 8C14 11.314 11.314 14 8 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke" d="M10.6668 8.00002H5.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </SIconBase>
  ),
  16: (solid) => (
    <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 14C4.686 14 2 11.314 2 8C2 4.686 4.686 2 8 2C11.314 2 14 4.686 14 8C14 11.314 11.314 14 8 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M10.6668 8.00002H5.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (solid) => (
    <SIconBase solid={solid} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3335 17.5C6.191 17.5 2.8335 14.1425 2.8335 10C2.8335 5.8575 6.191 2.5 10.3335 2.5C14.476 2.5 17.8335 5.8575 17.8335 10C17.8335 14.1425 14.476 17.5 10.3335 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M13.6667 9.99998H7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (solid) => (
    <SIconBase solid={solid} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6665 21V21C7.6955 21 3.6665 16.971 3.6665 12V12C3.6665 7.029 7.6955 3 12.6665 3V3C17.6375 3 21.6665 7.029 21.6665 12V12C21.6665 16.971 17.6375 21 12.6665 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M16.6665 12H8.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (solid) => (
    <SIconBase solid={solid} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.6665 21V21C7.6955 21 3.6665 16.971 3.6665 12V12C3.6665 7.029 7.6955 3 12.6665 3V3C17.6375 3 21.6665 7.029 21.6665 12V12C21.6665 16.971 17.6375 21 12.6665 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M16.6665 12H8.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 28C9.372 28 4 22.628 4 16C4 9.372 9.372 4 16 4C22.628 4 28 9.372 28 16C28 22.628 22.628 28 16 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 28C9.372 28 4 22.628 4 16C4 9.372 9.372 4 16 4C22.628 4 28 9.372 28 16C28 22.628 22.628 28 16 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 28C9.372 28 4 22.628 4 16C4 9.372 9.372 4 16 4C22.628 4 28 9.372 28 16C28 22.628 22.628 28 16 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 28C9.372 28 4 22.628 4 16C4 9.372 9.372 4 16 4C22.628 4 28 9.372 28 16C28 22.628 22.628 28 16 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M21.3332 16H10.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconMinusCircle: FC<IIconSolid> = ({ size = 24, solid }) => IconSize[size](solid);
