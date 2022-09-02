import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5747 6.8291L11.7305 7.98488L10.5615 9.15466"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.42531 6.83789L4.26953 7.99367L5.43853 9.16267"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5889 6.05566L7.41943 9.94455" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4.88889 1.6H11.1111C12.9275 1.6 14.4 3.07249 14.4 4.88889V11.1111C14.4 12.9275 12.9275 14.4 11.1111 14.4H4.88889C3.07249 14.4 1.6 12.9275 1.6 11.1111V4.88889C1.6 3.07249 3.07249 1.6 4.88889 1.6Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5747 6.8291L11.7305 7.98488L10.5615 9.15466"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.42531 6.83789L4.26953 7.99367L5.43853 9.16267"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5889 6.05566L7.41943 9.94455" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4.88889 1.6H11.1111C12.9275 1.6 14.4 3.07249 14.4 4.88889V11.1111C14.4 12.9275 12.9275 14.4 11.1111 14.4H4.88889C3.07249 14.4 1.6 12.9275 1.6 11.1111V4.88889C1.6 3.07249 3.07249 1.6 4.88889 1.6Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.31 8.49512L14.796 9.98112L13.293 11.4851"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6901 8.50586L5.2041 9.99186L6.7071 11.4949"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.757 7.5L9.25342 12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 1.75H14C16.3472 1.75 18.25 3.65279 18.25 6V14C18.25 16.3472 16.3472 18.25 14 18.25H6C3.65279 18.25 1.75 16.3472 1.75 14V6C1.75 3.65279 3.65279 1.75 6 1.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.0457 10.1602L17.8619 11.9764L16.0249 13.8146"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.95441 10.1738L6.13818 11.9901L7.97518 13.8271"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.9251 8.94434L11.0874 15.0554" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7.11111 1.75H16.8889C19.8497 1.75 22.25 4.15025 22.25 7.11111V16.8889C22.25 19.8497 19.8497 22.25 16.8889 22.25H7.11111C4.15025 22.25 1.75 19.8497 1.75 16.8889V7.11111C1.75 4.15025 4.15025 1.75 7.11111 1.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.0457 10.1602L17.8619 11.9764L16.0249 13.8146"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.95441 10.1738L6.13818 11.9901L7.97518 13.8271"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.9251 8.94434L11.0874 15.0554" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7.11111 1.75H16.8889C19.8497 1.75 22.25 4.15025 22.25 7.11111V16.8889C22.25 19.8497 19.8497 22.25 16.8889 22.25H7.11111C4.15025 22.25 1.75 19.8497 1.75 16.8889V7.11111C1.75 4.15025 4.15025 1.75 7.11111 1.75Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5171 13.4912L23.9938 15.9679L21.4888 18.4745"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.483 13.5098L8.00635 15.9864L10.5113 18.4914"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.2619 11.8335L14.7559 20.1668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.33333 1.9H22.6667C26.772 1.9 30.1 5.22802 30.1 9.33333V22.6667C30.1 26.772 26.772 30.1 22.6667 30.1H9.33333C5.22802 30.1 1.9 26.772 1.9 22.6667V9.33333C1.9 5.22802 5.22802 1.9 9.33333 1.9Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5171 13.4912L23.9938 15.9679L21.4888 18.4745"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.483 13.5098L8.00635 15.9864L10.5113 18.4914"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.2619 11.8335L14.7559 20.1668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.33333 1.9H22.6667C26.772 1.9 30.1 5.22802 30.1 9.33333V22.6667C30.1 26.772 26.772 30.1 22.6667 30.1H9.33333C5.22802 30.1 1.9 26.772 1.9 22.6667V9.33333C1.9 5.22802 5.22802 1.9 9.33333 1.9Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5171 13.4912L23.9938 15.9679L21.4888 18.4745"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.483 13.5098L8.00635 15.9864L10.5113 18.4914"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.2619 11.8335L14.7559 20.1668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.33333 1.9H22.6667C26.772 1.9 30.1 5.22802 30.1 9.33333V22.6667C30.1 26.772 26.772 30.1 22.6667 30.1H9.33333C5.22802 30.1 1.9 26.772 1.9 22.6667V9.33333C1.9 5.22802 5.22802 1.9 9.33333 1.9Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5171 13.4912L23.9938 15.9679L21.4888 18.4745"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.483 13.5098L8.00635 15.9864L10.5113 18.4914"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.2619 11.8335L14.7559 20.1668" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.33333 1.9H22.6667C26.772 1.9 30.1 5.22802 30.1 9.33333V22.6667C30.1 26.772 26.772 30.1 22.6667 30.1H9.33333C5.22802 30.1 1.9 26.772 1.9 22.6667V9.33333C1.9 5.22802 5.22802 1.9 9.33333 1.9Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SIconBase>
  ),
};

export const IconCodeBlock: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
