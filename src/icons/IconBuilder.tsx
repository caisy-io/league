import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.167 5.833v8.334M15.833 7.5V5.833"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 17.5H3.333a.834.834 0 01-.833-.833V15c0-.46.373-.833.833-.833H5c.46 0 .833.373.833.833v1.667c0 .46-.373.833-.833.833z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 17.5H3.333a.834.834 0 01-.833-.833V15c0-.46.373-.833.833-.833H5c.46 0 .833.373.833.833v1.667c0 .46-.373.833-.833.833zM16.667 5.833H15A.834.834 0 0114.167 5V3.333c0-.46.373-.833.833-.833h1.667c.46 0 .833.373.833.833V5c0 .46-.373.833-.833.833zM5 5.833H3.333A.834.834 0 012.5 5V3.333c0-.46.373-.833.833-.833H5c.46 0 .833.373.833.833V5c0 .46-.373.833-.833.833z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 5.833H3.333A.834.834 0 012.5 5V3.333c0-.46.373-.833.833-.833H5c.46 0 .833.373.833.833V5c0 .46-.373.833-.833.833z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.833 15.833h2.5M14.167 4.167H5.833"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.667 17.5h2.356l4.066-4.066a.833.833 0 000-1.178l-1.178-1.178a.832.832 0 00-1.179 0l-4.065 4.065V17.5h0z"
        clipRule="evenodd"
      ></path>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5 7v10M19 9V7"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 21H4a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 21H4a1 1 0 01-1-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zM20 7h-2a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1zM6 7H4a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6 7H4a1 1 0 01-1-1V4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 19h3M17 5H7"
      ></path>
      <path
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14 21h2.828l4.879-4.879a.999.999 0 000-1.414l-1.414-1.414a.999.999 0 00-1.414 0L14 18.172V21h0z"
        clipRule="evenodd"
      ></path>
    </SIconBase>      
  ),
  
};

export const IconBuilder: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
