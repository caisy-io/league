import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6628 3.3623L3.33301 12.6668" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.0293 3.32886L12.6626 3.36152L12.696 7.99552" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6628 3.3623L3.33301 12.6668" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.0293 3.32886L12.6626 3.36152L12.696 7.99552" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8293 4.20264L4.16699 15.8333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0381 4.16089L15.8298 4.20172L15.8714 9.99422" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9947 5.04321L5 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0449 4.99316L18.9949 5.04216L19.0449 11.9932" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>      
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9947 5.04321L5 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.0449 4.99316L18.9949 5.04216L19.0449 11.9932" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.3266 6.72412L6.66699 25.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0605 6.65747L25.3272 6.7228L25.3939 15.9908" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.3266 6.72412L6.66699 25.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0605 6.65747L25.3272 6.7228L25.3939 15.9908" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.3266 6.72412L6.66699 25.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0605 6.65747L25.3272 6.7228L25.3939 15.9908" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.3266 6.72412L6.66699 25.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.0605 6.65747L25.3272 6.7228L25.3939 15.9908" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
};

export const IconArrowTool: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
