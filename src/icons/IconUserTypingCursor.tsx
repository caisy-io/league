import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M0 6H1V14H0V6Z"/>
      <path className="solid-fill transparent-stroke" d="M0 3C0 2.44772 0.447715 2 1 2H2C2.55228 2 3 2.44772 3 3V5C3 5.55228 2.55228 6 2 6H0V3Z"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M0 6H1V14H0V6Z"/>
      <path className="solid-fill transparent-stroke" d="M0 3C0 2.44772 0.447715 2 1 2H2C2.55228 2 3 2.44772 3 3V5C3 5.55228 2.55228 6 2 6H0V3Z"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M0 7.5H1.25V17.5H0V7.5Z"/>
      <path className="solid-fill transparent-stroke" d="M0 3.5C0 2.94772 0.447715 2.5 1 2.5H2.75C3.30228 2.5 3.75 2.94772 3.75 3.5V6.5C3.75 7.05228 3.30228 7.5 2.75 7.5H0V3.5Z"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M1 9H2.5V21H1V9Z"/>
      <path className="solid-fill transparent-stroke" d="M1 4C1 3.44772 1.44772 3 2 3H4.5C5.05228 3 5.5 3.44772 5.5 4V8C5.5 8.55228 5.05228 9 4.5 9H1V4Z"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M1 9H2.5V21H1V9Z"/>
      <path className="solid-fill transparent-stroke" d="M1 4C1 3.44772 1.44772 3 2 3H4.5C5.05228 3 5.5 3.44772 5.5 4V8C5.5 8.55228 5.05228 9 4.5 9H1V4Z"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M0 12H2V28H0V12Z"/>
      <path className="solid-fill transparent-stroke" d="M0 5C0 4.44772 0.447715 4 1 4H5C5.55228 4 6 4.44772 6 5V11C6 11.5523 5.55228 12 5 12H0V5Z"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M0 12H2V28H0V12Z"/>
      <path className="solid-fill transparent-stroke" d="M0 5C0 4.44772 0.447715 4 1 4H5C5.55228 4 6 4.44772 6 5V11C6 11.5523 5.55228 12 5 12H0V5Z"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M0 12H2V28H0V12Z"/>
      <path className="solid-fill transparent-stroke" d="M0 5C0 4.44772 0.447715 4 1 4H5C5.55228 4 6 4.44772 6 5V11C6 11.5523 5.55228 12 5 12H0V5Z"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" d="M0 12H2V28H0V12Z"/>
      <path className="solid-fill transparent-stroke" d="M0 5C0 4.44772 0.447715 4 1 4H5C5.55228 4 6 4.44772 6 5V11C6 11.5523 5.55228 12 5 12H0V5Z"/>
    </SIconBase>
  ),
};

export const IconUserTypingCursor: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
