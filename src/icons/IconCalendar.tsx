import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.99876 1.9975V3.99833" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.0013 1.9975V3.99833" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.99756 6.33262H14.0026" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="1.99756" y="2.99789" width="12.005" height="11.0046" rx="3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.24851 2.49686V4.9979" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.7516 2.49686V4.9979" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.49695 7.91577H17.5032" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2.49695" y="3.74738" width="15.0062" height="13.7557" rx="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  24: <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49813 2.99625V5.9975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.5019 2.99625V5.9975" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.99634 9.49896H21.0038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2.99634" y="4.49686" width="18.0075" height="16.5069" rx="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  32: <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99751 3.99503V7.99669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.0026 3.99503V7.99669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.99512 12.6653H28.0051" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3.99512" y="5.99585" width="24.01" height="22.0092" rx="3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
}

export const IconCalendar: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
