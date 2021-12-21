import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2426 3.75736C14.5858 6.10051 14.5858 9.89949 12.2426 12.2426C9.89948 14.5858 6.10049 14.5858 3.75736 12.2426C1.41421 9.89948 1.41421 6.10049 3.75736 3.75736C6.10051 1.41421 9.89949 1.41421 12.2426 3.75736" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2426 3.75736C14.5858 6.10051 14.5858 9.89949 12.2426 12.2426C9.89948 14.5858 6.10049 14.5858 3.75736 12.2426C1.41421 9.89948 1.41421 6.10049 3.75736 3.75736C6.10051 1.41421 9.89949 1.41421 12.2426 3.75736" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.3033 4.6967C18.2322 7.62563 18.2322 12.3744 15.3033 15.3033C12.3743 18.2322 7.62562 18.2322 4.6967 15.3033C1.76777 12.3744 1.76777 7.62562 4.6967 4.6967C7.62563 1.76777 12.3744 1.76777 15.3033 4.6967" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3639 5.63604C21.8787 9.15076 21.8787 14.8492 18.3639 18.3639C14.8492 21.8787 9.15074 21.8787 5.63604 18.3639C2.12132 14.8492 2.12132 9.15074 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.3639 5.63604" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.4853 7.51472C29.1715 12.201 29.1715 19.799 24.4853 24.4853C19.799 29.1715 12.201 29.1715 7.51472 24.4853C2.82843 19.799 2.82843 12.201 7.51472 7.51472C12.201 2.82843 19.799 2.82843 24.4853 7.51472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.4853 7.51472C29.1715 12.201 29.1715 19.799 24.4853 24.4853C19.799 29.1715 12.201 29.1715 7.51472 24.4853C2.82843 19.799 2.82843 12.201 7.51472 7.51472C12.201 2.82843 19.799 2.82843 24.4853 7.51472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.4853 7.51472C29.1715 12.201 29.1715 19.799 24.4853 24.4853C19.799 29.1715 12.201 29.1715 7.51472 24.4853C2.82843 19.799 2.82843 12.201 7.51472 7.51472C12.201 2.82843 19.799 2.82843 24.4853 7.51472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.4853 7.51472C29.1715 12.201 29.1715 19.799 24.4853 24.4853C19.799 29.1715 12.201 29.1715 7.51472 24.4853C2.82843 19.799 2.82843 12.201 7.51472 7.51472C12.201 2.82843 19.799 2.82843 24.4853 7.51472" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconCircle: FC<IIconSize> = ({ size = 24 }) => IconSize[size];

