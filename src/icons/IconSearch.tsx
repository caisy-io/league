import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.37239" cy="7.37239" r="4.70796" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3356 13.3356L10.7012 10.7012" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9.21552" cy="9.21552" r="5.88495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6695 16.6694L13.3765 13.3764" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  24: <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11.0586" cy="11.0586" r="7.06194" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.0034 20.0033L16.0518 16.0517" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
  ,
  32: <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14.7448" cy="14.7448" r="9.41592" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.6712 26.6711L21.4023 21.4023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
  }

export const IconSearch: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
