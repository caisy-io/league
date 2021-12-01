import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.66663 14H11.3333C12.4379 14 13.3333 13.1046 13.3333 12V5.58111C13.3333 5.05068 13.1226 4.54197 12.7475 4.1669L11.1664 2.58579C10.7913 2.21071 10.2826 2 9.75218 2H4.66663C3.56206 2 2.66663 2.89543 2.66663 4V12C2.66663 13.1046 3.56206 14 4.66663 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.3333 5.66667H11C10.2636 5.66667 9.66663 5.06971 9.66663 4.33333V2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.83337 17.5H14.1667C15.5474 17.5 16.6667 16.3807 16.6667 15V6.97639C16.6667 6.31335 16.4033 5.67747 15.9345 5.20862L13.9581 3.23223C13.4892 2.76339 12.8534 2.5 12.1903 2.5H5.83337C4.45266 2.5 3.33337 3.61929 3.33337 5V15C3.33337 16.3807 4.45266 17.5 5.83337 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.6667 7.08333H13.75C12.8296 7.08333 12.0834 6.33714 12.0834 5.41667V2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  
  24: <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 21H17C18.6569 21 20 19.6569 20 18V8.37167C20 7.57602 19.6839 6.81296 19.1213 6.25035L16.7496 3.87868C16.187 3.31607 15.424 3 14.6283 3H7C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8.5H16.5C15.3954 8.5 14.5 7.60457 14.5 6.5V3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,

  32: <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.33325 28H22.6666C24.8757 28 26.6666 26.2091 26.6666 24V11.1622C26.6666 10.1014 26.2452 9.08395 25.495 8.3338L22.3328 5.17157C21.5826 4.42143 20.5652 4 19.5044 4H9.33325C7.12411 4 5.33325 5.79086 5.33325 8V24C5.33325 26.2091 7.12411 28 9.33325 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.6666 11.3333H21.9999C20.5272 11.3333 19.3333 10.1394 19.3333 8.66667V4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
  }

export const IconDocuments: FC<IIconSize> = ({ size= 24 }) => IconSize[size];