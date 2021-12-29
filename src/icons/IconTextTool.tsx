import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.67871 4.3265H13.4587" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0452 12.3264V4.32642" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.71224 12.3266V7.65991" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.71191 7.65975H6.71191" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.67871 4.3265H13.4587" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0452 12.3264V4.32642" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.71224 12.3266V7.65991" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.71191 7.65975H6.71191" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.33594 5.15983H16.8109" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.5446 15.1599V5.15991" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.8776 15.1597V9.32642" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.37793 9.32658H8.37793" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99512 5.99316H20.1651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0449 17.9932V5.99316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.04492 17.9932V10.9932" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.04492 10.9932H10.0449" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>         
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99512 5.99316H20.1651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0449 17.9932V5.99316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.04492 17.9932V10.9932" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.04492 10.9932H10.0449" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>      
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3115 8.65983H26.8715" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0446 24.6599V8.65991" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.3776 24.6597V15.3264" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.37793 15.3266H13.3779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3115 8.65983H26.8715" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0446 24.6599V8.65991" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.3776 24.6597V15.3264" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.37793 15.3266H13.3779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3115 8.65983H26.8715" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0446 24.6599V8.65991" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.3776 24.6597V15.3264" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.37793 15.3266H13.3779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3115 8.65983H26.8715" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0446 24.6599V8.65991" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.3776 24.6597V15.3264" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.37793 15.3266H13.3779" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
};

export const IconTextTool: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
