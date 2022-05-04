import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#172C55" d="M2.757 2.757A6 6 0 007.001 13V1a5.981 5.981 0 00-4.244 1.757z"></path>
      <path
        stroke="#172C55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.243 2.757a6 6 0 11-8.485 8.486 6 6 0 018.485-8.486"
      ></path>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="#172C55"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.303 3.697A7.5 7.5 0 113.697 14.303 7.5 7.5 0 0114.303 3.697"
      ></path>
      <path fill="#172C55" d="M3.697 3.697A7.5 7.5 0 009 16.5v-15c-1.92 0-3.839.732-5.303 2.197z"></path>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.3639 3.63604C19.8787 7.15076 19.8787 12.8492 16.3639 16.3639C12.8492 19.8787 7.15074 19.8787 3.63604 16.3639C0.12132 12.8492 0.12132 7.15074 3.63604 3.63604C7.15076 0.12132 12.8492 0.12132 16.3639 3.63604"
          stroke="#172C55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.63604 3.63604C0.12132 7.15074 0.12132 12.8492 3.63604 16.3639C5.39339 18.1213 7.6967 19 10 19V1C7.6967 1 5.3934 1.87868 3.63604 3.63604Z"
          fill="#172C55"
        />
      </svg>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.4853 4.51472C26.1715 9.20101 26.1715 16.799 21.4853 21.4853C16.799 26.1715 9.20099 26.1715 4.51472 21.4853C-0.171573 16.799 -0.171573 9.20099 4.51472 4.51472C9.20101 -0.171573 16.799 -0.171573 21.4853 4.51472"
          stroke="#172C55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.51472 4.51472C-0.171573 9.20099 -0.171573 16.799 4.51472 21.4853C6.85786 23.8284 9.92893 25 13 25V1C9.92894 1 6.85787 2.17157 4.51472 4.51472Z"
          fill="#172C55"
        />
      </svg>
    </SIconBase>
  ),
};

export const IconPhotoChangeColor: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
