import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.00098 4.00169H14.006" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.3382 8.00339H2.00098" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.00098 12.0051H8.67042" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.00098 4.00169H14.006" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.3382 8.00339H2.00098" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.00098 12.0051H8.67042" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.50098 5.00205H17.5072" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.1725 10.0042H2.50098" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.50098 15.0062H10.8378" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.00146 6.00241H21.009" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.0073 12.0051H3.00146" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.00146 18.0075H13.0056" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.00146 6.00241H21.009" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.0073 12.0051H3.00146" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.00146 18.0075H13.0056" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00146 8.00337H28.0115" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.6759 16.0068H4.00146" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.00146 24.01H17.3404" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00146 8.00337H28.0115" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.6759 16.0068H4.00146" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.00146 24.01H17.3404" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00146 8.00337H28.0115" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.6759 16.0068H4.00146" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.00146 24.01H17.3404" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00146 8.00337H28.0115" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.6759 16.0068H4.00146" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.00146 24.01H17.3404" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
};

export const IconOpenSidebarMenu: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
