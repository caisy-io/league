import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.66667 11.3333H12C13.1047 11.3333 14 10.438 14 9.33333V4C14 2.89533 13.1047 2 12 2H4C2.89533 2 2 2.89533 2 4V9.33333C2 10.438 2.89533 11.3333 4 11.3333H5.33333V14L8.66667 11.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8333 14.1667H15C16.3808 14.1667 17.5 13.0475 17.5 11.6667V5C17.5 3.61917 16.3808 2.5 15 2.5H5C3.61917 2.5 2.5 3.61917 2.5 5V11.6667C2.5 13.0475 3.61917 14.1667 5 14.1667H6.66667V17.5L10.8333 14.1667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  
  24: <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 17H18C19.657 17 21 15.657 21 14V6C21 4.343 19.657 3 18 3H6C4.343 3 3 4.343 3 6V14C3 15.657 4.343 17 6 17H8V21L13 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,

  32: <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3333 22.6667H24C26.2093 22.6667 28 20.876 28 18.6667V8C28 5.79067 26.2093 4 24 4H8C5.79067 4 4 5.79067 4 8V18.6667C4 20.876 5.79067 22.6667 8 22.6667H10.6667V28L17.3333 22.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
  
  }

export const IconChat: FC<IIconSize> = ({ size= 24 }) => IconSize[size];