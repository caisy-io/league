import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.99935 5.63997H2.66602" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.99935 11.5H3.99935C3.26297 11.5 2.66602 10.903 2.66602 10.1667V2.5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3327 9.83301H9.66602C9.11373 9.83301 8.66602 10.2807 8.66602 10.833V12.1663C8.66602 12.7186 9.11373 13.1663 9.66602 13.1663H12.3327C12.885 13.1663 13.3327 12.7186 13.3327 12.1663V10.833C13.3327 10.2807 12.885 9.83301 12.3327 9.83301Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3327 3.97363H9.66602C9.11373 3.97363 8.66602 4.42135 8.66602 4.97363V6.30697C8.66602 6.85925 9.11373 7.30697 9.66602 7.30697H12.3327C12.885 7.30697 13.3327 6.85925 13.3327 6.30697V4.97363C13.3327 4.42135 12.885 3.97363 12.3327 3.97363Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.99935 5.63997H2.66602" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.99935 11.5H3.99935C3.26297 11.5 2.66602 10.903 2.66602 10.1667V2.5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3327 9.83301H9.66602C9.11373 9.83301 8.66602 10.2807 8.66602 10.833V12.1663C8.66602 12.7186 9.11373 13.1663 9.66602 13.1663H12.3327C12.885 13.1663 13.3327 12.7186 13.3327 12.1663V10.833C13.3327 10.2807 12.885 9.83301 12.3327 9.83301Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3327 3.97363H9.66602C9.11373 3.97363 8.66602 4.42135 8.66602 4.97363V6.30697C8.66602 6.85925 9.11373 7.30697 9.66602 7.30697H12.3327C12.885 7.30697 13.3327 6.85925 13.3327 6.30697V4.97363C13.3327 4.42135 12.885 3.97363 12.3327 3.97363Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.83268 7.04997H3.66602" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.83268 14.375H5.33268C4.41221 14.375 3.66602 13.6288 3.66602 12.7083V3.125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.7493 12.2913H12.416C11.7257 12.2913 11.166 12.8509 11.166 13.5413V15.2079C11.166 15.8983 11.7257 16.4579 12.416 16.4579H15.7493C16.4397 16.4579 16.9993 15.8983 16.9993 15.2079V13.5413C16.9993 12.8509 16.4397 12.2913 15.7493 12.2913Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.7493 4.96704H12.416C11.7257 4.96704 11.166 5.52669 11.166 6.21704V7.88371C11.166 8.57406 11.7257 9.13371 12.416 9.13371H15.7493C16.4397 9.13371 16.9993 8.57406 16.9993 7.88371V6.21704C16.9993 5.52669 16.4397 4.96704 15.7493 4.96704Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.66553 8.45996H4.66553" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.66553 17.25H6.66553C5.56096 17.25 4.66553 16.3546 4.66553 15.25V3.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.1655 14.7495H15.1655C14.3371 14.7495 13.6655 15.4211 13.6655 16.2495V18.2495C13.6655 19.0779 14.3371 19.7495 15.1655 19.7495H19.1655C19.994 19.7495 20.6655 19.0779 20.6655 18.2495V16.2495C20.6655 15.4211 19.994 14.7495 19.1655 14.7495Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.1655 5.96045H15.1655C14.3371 5.96045 13.6655 6.63202 13.6655 7.46045V9.46045C13.6655 10.2889 14.3371 10.9604 15.1655 10.9604H19.1655C19.994 10.9604 20.6655 10.2889 20.6655 9.46045V7.46045C20.6655 6.63202 19.994 5.96045 19.1655 5.96045Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.66553 8.45996H4.66553" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.66553 17.25H6.66553C5.56096 17.25 4.66553 16.3546 4.66553 15.25V3.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.1655 14.7495H15.1655C14.3371 14.7495 13.6655 15.4211 13.6655 16.2495V18.2495C13.6655 19.0779 14.3371 19.7495 15.1655 19.7495H19.1655C19.994 19.7495 20.6655 19.0779 20.6655 18.2495V16.2495C20.6655 15.4211 19.994 14.7495 19.1655 14.7495Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.1655 5.96045H15.1655C14.3371 5.96045 13.6655 6.63202 13.6655 7.46045V9.46045C13.6655 10.2889 14.3371 10.9604 15.1655 10.9604H19.1655C19.994 10.9604 20.6655 10.2889 20.6655 9.46045V7.46045C20.6655 6.63202 19.994 5.96045 19.1655 5.96045Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9987 11.2799H5.33203" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9987 23H7.9987C6.52594 23 5.33203 21.8061 5.33203 20.3333V5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6654 19.666H19.332C18.2275 19.666 17.332 20.5614 17.332 21.666V24.3327C17.332 25.4373 18.2275 26.3327 19.332 26.3327H24.6654C25.7699 26.3327 26.6654 25.4373 26.6654 24.3327V21.666C26.6654 20.5614 25.7699 19.666 24.6654 19.666Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6654 7.94727H19.332C18.2275 7.94727 17.332 8.8427 17.332 9.94727V12.6139C17.332 13.7185 18.2275 14.6139 19.332 14.6139H24.6654C25.7699 14.6139 26.6654 13.7185 26.6654 12.6139V9.94727C26.6654 8.8427 25.7699 7.94727 24.6654 7.94727Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9987 11.2799H5.33203" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9987 23H7.9987C6.52594 23 5.33203 21.8061 5.33203 20.3333V5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6654 19.666H19.332C18.2275 19.666 17.332 20.5614 17.332 21.666V24.3327C17.332 25.4373 18.2275 26.3327 19.332 26.3327H24.6654C25.7699 26.3327 26.6654 25.4373 26.6654 24.3327V21.666C26.6654 20.5614 25.7699 19.666 24.6654 19.666Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6654 7.94727H19.332C18.2275 7.94727 17.332 8.8427 17.332 9.94727V12.6139C17.332 13.7185 18.2275 14.6139 19.332 14.6139H24.6654C25.7699 14.6139 26.6654 13.7185 26.6654 12.6139V9.94727C26.6654 8.8427 25.7699 7.94727 24.6654 7.94727Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9987 11.2799H5.33203" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9987 23H7.9987C6.52594 23 5.33203 21.8061 5.33203 20.3333V5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6654 19.666H19.332C18.2275 19.666 17.332 20.5614 17.332 21.666V24.3327C17.332 25.4373 18.2275 26.3327 19.332 26.3327H24.6654C25.7699 26.3327 26.6654 25.4373 26.6654 24.3327V21.666C26.6654 20.5614 25.7699 19.666 24.6654 19.666Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6654 7.94727H19.332C18.2275 7.94727 17.332 8.8427 17.332 9.94727V12.6139C17.332 13.7185 18.2275 14.6139 19.332 14.6139H24.6654C25.7699 14.6139 26.6654 13.7185 26.6654 12.6139V9.94727C26.6654 8.8427 25.7699 7.94727 24.6654 7.94727Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9987 11.2799H5.33203" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9987 23H7.9987C6.52594 23 5.33203 21.8061 5.33203 20.3333V5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6654 19.666H19.332C18.2275 19.666 17.332 20.5614 17.332 21.666V24.3327C17.332 25.4373 18.2275 26.3327 19.332 26.3327H24.6654C25.7699 26.3327 26.6654 25.4373 26.6654 24.3327V21.666C26.6654 20.5614 25.7699 19.666 24.6654 19.666Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.6654 7.94727H19.332C18.2275 7.94727 17.332 8.8427 17.332 9.94727V12.6139C17.332 13.7185 18.2275 14.6139 19.332 14.6139H24.6654C25.7699 14.6139 26.6654 13.7185 26.6654 12.6139V9.94727C26.6654 8.8427 25.7699 7.94727 24.6654 7.94727Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconReferenceTreeStructure: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
