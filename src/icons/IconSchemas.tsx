import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 11.3199L7.99329 13.9999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.99333 13.9999L2 11.3199" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8L7.99329 10.68" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.99333 10.68L2 8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 4.68267L7.99133 7.366L14 4.68267L8.00867 2L2 4.68267Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4999 14.1499L9.99158 17.4999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99167 17.4999L2.5 14.1499" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.4999 10L9.99158 13.35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99167 13.35L2.5 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.5 5.85333L9.98917 9.2075L17.5 5.85333L10.0108 2.5L2.5 5.85333Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  24: <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16.9799L11.99 20.9999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.99 20.9999L3 16.9799" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12L11.99 16.02" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.99 16.02L3 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 7.024L11.987 11.049L21 7.024L12.013 3L3 7.024Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </SIconBase>,
  32: <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.9999 22.6399L15.9866 27.9999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9867 27.9999L4 22.6399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.9999 16L15.9866 21.36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9867 21.36L4 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 9.36533L15.9827 14.732L28 9.36533L16.0173 4L4 9.36533Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
  }

export const IconSchemas: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
