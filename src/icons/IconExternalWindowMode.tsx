import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.99756" y="1.99731" width="12.005" height="12.005" rx="3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.19971 5.80029H10.2005L10.2005 7.80113" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.79966 10.201H5.79883L5.79883 8.2002" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.99756" y="1.99731" width="12.005" height="12.005" rx="3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.19971 5.80029H10.2005L10.2005 7.80113" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.79966 10.201H5.79883L5.79883 8.2002" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.49707" y="2.49658" width="15.0063" height="15.0063" rx="5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2495 7.25024H12.7506L12.7506 9.75129" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.74958 12.7513H7.24854L7.24854 10.2502" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.99658" y="2.99585" width="18.0075" height="18.0075" rx="5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2993 8.7002H15.3006L15.3006 11.7014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6995 15.3015H8.69824L8.69824 12.3003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.99658" y="2.99585" width="18.0075" height="18.0075" rx="5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2993 8.7002H15.3006L15.3006 11.7014" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6995 15.3015H8.69824L8.69824 12.3003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99512" y="3.99463" width="24.01" height="24.01" rx="7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.3994 11.6003H20.4011L20.4011 15.602" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5993 20.4021H11.5977L11.5977 16.4004" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99512" y="3.99463" width="24.01" height="24.01" rx="7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.3994 11.6003H20.4011L20.4011 15.602" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5993 20.4021H11.5977L11.5977 16.4004" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99512" y="3.99463" width="24.01" height="24.01" rx="7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.3994 11.6003H20.4011L20.4011 15.602" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5993 20.4021H11.5977L11.5977 16.4004" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.99512" y="3.99463" width="24.01" height="24.01" rx="7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.3994 11.6003H20.4011L20.4011 15.602" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5993 20.4021H11.5977L11.5977 16.4004" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconExternalWindowMode: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
