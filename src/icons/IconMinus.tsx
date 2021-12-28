import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.13477 8.00002C4.13477 7.66865 4.40339 7.40002 4.73477 7.40002H11.2654C11.5967 7.40002 11.8654 7.66865 11.8654 8.00002C11.8654 8.3314 11.5967 8.60002 11.2654 8.60002H4.73477C4.40339 8.60002 4.13477 8.3314 4.13477 8.00002Z"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.13477 8.00002C4.13477 7.66865 4.40339 7.40002 4.73477 7.40002H11.2654C11.5967 7.40002 11.8654 7.66865 11.8654 8.00002C11.8654 8.3314 11.5967 8.60002 11.2654 8.60002H4.73477C4.40339 8.60002 4.13477 8.3314 4.13477 8.00002Z"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M5.50146 10C5.50146 9.58579 5.83725 9.25 6.25146 9.25H14.415C14.8292 9.25 15.165 9.58579 15.165 10C15.165 10.4142 14.8292 10.75 14.415 10.75H6.25146C5.83725 10.75 5.50146 10.4142 5.50146 10Z"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M6.82373 12C6.82373 11.5858 7.15952 11.25 7.57373 11.25H17.7593C18.1735 11.25 18.5093 11.5858 18.5093 12C18.5093 12.4142 18.1735 12.75 17.7593 12.75H7.57373C7.15952 12.75 6.82373 12.4142 6.82373 12Z"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M6.82373 12C6.82373 11.5858 7.15952 11.25 7.57373 11.25H17.7593C18.1735 11.25 18.5093 11.5858 18.5093 12C18.5093 12.4142 18.1735 12.75 17.7593 12.75H7.57373C7.15952 12.75 6.82373 12.4142 6.82373 12Z"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8 16.0069C8 15.5099 8.40294 15.1069 8.9 15.1069H23.114C23.6111 15.1069 24.014 15.5099 24.014 16.0069C24.014 16.504 23.6111 16.9069 23.114 16.9069H8.9C8.40294 16.9069 8 16.504 8 16.0069Z"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8 16.0069C8 15.5099 8.40294 15.1069 8.9 15.1069H23.114C23.6111 15.1069 24.014 15.5099 24.014 16.0069C24.014 16.504 23.6111 16.9069 23.114 16.9069H8.9C8.40294 16.9069 8 16.504 8 16.0069Z"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8 16.0069C8 15.5099 8.40294 15.1069 8.9 15.1069H23.114C23.6111 15.1069 24.014 15.5099 24.014 16.0069C24.014 16.504 23.6111 16.9069 23.114 16.9069H8.9C8.40294 16.9069 8 16.504 8 16.0069Z"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M8 16.0069C8 15.5099 8.40294 15.1069 8.9 15.1069H23.114C23.6111 15.1069 24.014 15.5099 24.014 16.0069C24.014 16.504 23.6111 16.9069 23.114 16.9069H8.9C8.40294 16.9069 8 16.504 8 16.0069Z"/>
    </SIconBase>
  ),
};

export const IconMinus: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
