import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M4.5498 9.66662C4.5498 10.6515 5.34823 11.45 6.33314 11.45H9.66647C10.6514 11.45 11.4498 10.6515 11.4498 9.66662V6.33328C11.4498 5.34838 10.6514 4.54995 9.66647 4.54995L6.33314 4.54995C5.34823 4.54995 4.5498 5.34838 4.5498 6.33328L4.5498 9.66662Z"/>
    <path d="M14 2.66667L2 2.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 13.3333L2 13.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 9.66667L2 9.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 6.33329L2 6.33329" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M4.5498 9.66662C4.5498 10.6515 5.34823 11.45 6.33314 11.45H9.66647C10.6514 11.45 11.4498 10.6515 11.4498 9.66662V6.33328C11.4498 5.34838 10.6514 4.54995 9.66647 4.54995L6.33314 4.54995C5.34823 4.54995 4.5498 5.34838 4.5498 6.33328L4.5498 9.66662Z"/>
    <path d="M14 2.66667L2 2.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 13.3333L2 13.3333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 9.66667L2 9.66667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 6.33329L2 6.33329" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M5.6875 12.0833C5.6875 13.3145 6.68553 14.3125 7.91667 14.3125H12.0833C13.3145 14.3125 14.3125 13.3145 14.3125 12.0833V7.91667C14.3125 6.68553 13.3145 5.6875 12.0833 5.6875H7.91667C6.68553 5.6875 5.6875 6.68553 5.6875 7.91667L5.6875 12.0833Z"/>
    <path d="M17.5 3.33333L2.5 3.33333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 16.6667L2.5 16.6667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 12.0833L2.5 12.0833" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 7.91671L2.5 7.91671" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M6.82422 14.5C6.82422 15.9774 8.02186 17.175 9.49922 17.175H14.4992C15.9766 17.175 17.1742 15.9774 17.1742 14.5V9.50005C17.1742 8.02269 15.9766 6.82505 14.4992 6.82505L9.49922 6.82505C8.02186 6.82505 6.82422 8.02269 6.82422 9.50005L6.82422 14.5Z"/>
    <path d="M21 4L3 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 20L3 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 14.5L3 14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 9.5L3 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M6.82422 14.5C6.82422 15.9774 8.02186 17.175 9.49922 17.175H14.4992C15.9766 17.175 17.1742 15.9774 17.1742 14.5V9.50005C17.1742 8.02269 15.9766 6.82505 14.4992 6.82505L9.49922 6.82505C8.02186 6.82505 6.82422 8.02269 6.82422 9.50005L6.82422 14.5Z"/>
    <path d="M21 4L3 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 20L3 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 14.5L3 14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 9.5L3 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.09961 19.3334C9.09961 21.3032 10.6965 22.9 12.6663 22.9H19.3329C21.3028 22.9 22.8996 21.3032 22.8996 19.3334V12.6667C22.8996 10.6969 21.3028 9.10002 19.3329 9.10002L12.6663 9.10002C10.6965 9.10002 9.09961 10.6969 9.09961 12.6667L9.09961 19.3334Z"/>
    <path d="M28 5.33333L4 5.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 26.6667L4 26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 19.3333L4 19.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 12.6667L4 12.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.09961 19.3334C9.09961 21.3032 10.6965 22.9 12.6663 22.9H19.3329C21.3028 22.9 22.8996 21.3032 22.8996 19.3334V12.6667C22.8996 10.6969 21.3028 9.10002 19.3329 9.10002L12.6663 9.10002C10.6965 9.10002 9.09961 10.6969 9.09961 12.6667L9.09961 19.3334Z"/>
    <path d="M28 5.33333L4 5.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 26.6667L4 26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 19.3333L4 19.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 12.6667L4 12.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.09961 19.3334C9.09961 21.3032 10.6965 22.9 12.6663 22.9H19.3329C21.3028 22.9 22.8996 21.3032 22.8996 19.3334V12.6667C22.8996 10.6969 21.3028 9.10002 19.3329 9.10002L12.6663 9.10002C10.6965 9.10002 9.09961 10.6969 9.09961 12.6667L9.09961 19.3334Z"/>
    <path d="M28 5.33333L4 5.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 26.6667L4 26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 19.3333L4 19.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 12.6667L4 12.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill transparent-stroke" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.09961 19.3334C9.09961 21.3032 10.6965 22.9 12.6663 22.9H19.3329C21.3028 22.9 22.8996 21.3032 22.8996 19.3334V12.6667C22.8996 10.6969 21.3028 9.10002 19.3329 9.10002L12.6663 9.10002C10.6965 9.10002 9.09961 10.6969 9.09961 12.6667L9.09961 19.3334Z"/>
    <path d="M28 5.33333L4 5.33333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 26.6667L4 26.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 19.3333L4 19.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 12.6667L4 12.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconWrappingBehind: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
