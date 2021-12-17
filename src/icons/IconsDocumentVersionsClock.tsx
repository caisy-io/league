import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3357 5.33204H10.6679C10.2996 5.33204 10.001 5.03344 10.001 4.66509V1.99731" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99805 5.33204V3.3312C3.99805 2.59452 4.59525 1.99731 5.33194 1.99731H10.1153C10.469 1.99731 10.8082 2.13797 11.0583 2.38814L12.9444 4.27426C13.1946 4.52436 13.3353 4.86358 13.3353 5.21732V12.6684C13.3353 13.4051 12.7381 14.0023 12.0014 14.0023H5.33194C4.59525 14.0023 3.99805 13.4051 3.99805 12.6684V12.0015" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.25293 7.54248V8.84569L6.27736 9.46995" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="1.99756" y="5.33203" width="6.66944" height="6.66945" rx="3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3357 5.33204H10.6679C10.2996 5.33204 10.001 5.03344 10.001 4.66509V1.99731" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99805 5.33204V3.3312C3.99805 2.59452 4.59525 1.99731 5.33194 1.99731H10.1153C10.469 1.99731 10.8082 2.13797 11.0583 2.38814L12.9444 4.27426C13.1946 4.52436 13.3353 4.86358 13.3353 5.21732V12.6684C13.3353 13.4051 12.7381 14.0023 12.0014 14.0023H5.33194C4.59525 14.0023 3.99805 13.4051 3.99805 12.6684V12.0015" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.25293 7.54248V8.84569L6.27736 9.46995" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="1.99756" y="5.33203" width="6.66944" height="6.66945" rx="3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6694 6.66523H13.3347C12.8742 6.66523 12.501 6.29198 12.501 5.83155V2.49683" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.99756 6.66523V4.16419C4.99756 3.24333 5.74406 2.49683 6.66492 2.49683H12.6441C13.0863 2.49683 13.5103 2.67265 13.8229 2.98536L16.1805 5.34301C16.4933 5.65563 16.6691 6.07966 16.6691 6.52184V15.8357C16.6691 16.7566 15.9226 17.5031 15.0017 17.5031H6.66492C5.74406 17.5031 4.99756 16.7566 4.99756 15.8357V15.002" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.56592 9.42822V11.0572L7.84645 11.8376" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2.49658" y="6.66528" width="8.33681" height="8.33681" rx="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.0035 7.99842H16.0019C15.4494 7.99842 15.0015 7.55052 15.0015 6.998V2.99634" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.99756 7.99842V4.99717C5.99756 3.89214 6.89336 2.99634 7.99839 2.99634H15.1734C15.704 2.99634 16.2128 3.20733 16.588 3.58258L19.4171 6.41176C19.7924 6.7869 20.0034 7.29574 20.0034 7.82635V19.003C20.0034 20.108 19.1076 21.0038 18.0026 21.0038H7.99839C6.89336 21.0038 5.99756 20.108 5.99756 19.003V18.0026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.87939 11.3137V13.2685L9.41603 14.2049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2.99658" y="7.99854" width="10.0042" height="10.0042" rx="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.0035 7.99842H16.0019C15.4494 7.99842 15.0015 7.55052 15.0015 6.998V2.99634" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.99756 7.99842V4.99717C5.99756 3.89214 6.89336 2.99634 7.99839 2.99634H15.1734C15.704 2.99634 16.2128 3.20733 16.588 3.58258L19.4171 6.41176C19.7924 6.7869 20.0034 7.29574 20.0034 7.82635V19.003C20.0034 20.108 19.1076 21.0038 18.0026 21.0038H7.99839C6.89336 21.0038 5.99756 20.108 5.99756 19.003V18.0026" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.87939 11.3137V13.2685L9.41603 14.2049" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2.99658" y="7.99854" width="10.0042" height="10.0042" rx="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6709 10.6646H21.3354C20.5987 10.6646 20.0015 10.0674 20.0015 9.33067V3.99512" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99658 10.6646V6.66289C7.99658 5.18952 9.19099 3.99512 10.6644 3.99512H20.231C20.9385 3.99512 21.6169 4.27644 22.1171 4.77678L25.8894 8.54901C26.3897 9.0492 26.671 9.72765 26.671 10.4351V25.3373C26.671 26.8107 25.4766 28.0051 24.0032 28.0051H10.6644C9.19099 28.0051 7.99658 26.8107 7.99658 25.3373V24.0034" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5054 15.085V17.6914L12.5542 18.9399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.99463" y="10.6646" width="13.3389" height="13.3389" rx="3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6709 10.6646H21.3354C20.5987 10.6646 20.0015 10.0674 20.0015 9.33067V3.99512" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99658 10.6646V6.66289C7.99658 5.18952 9.19099 3.99512 10.6644 3.99512H20.231C20.9385 3.99512 21.6169 4.27644 22.1171 4.77678L25.8894 8.54901C26.3897 9.0492 26.671 9.72765 26.671 10.4351V25.3373C26.671 26.8107 25.4766 28.0051 24.0032 28.0051H10.6644C9.19099 28.0051 7.99658 26.8107 7.99658 25.3373V24.0034" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5054 15.085V17.6914L12.5542 18.9399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.99463" y="10.6646" width="13.3389" height="13.3389" rx="3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6709 10.6646H21.3354C20.5987 10.6646 20.0015 10.0674 20.0015 9.33067V3.99512" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99658 10.6646V6.66289C7.99658 5.18952 9.19099 3.99512 10.6644 3.99512H20.231C20.9385 3.99512 21.6169 4.27644 22.1171 4.77678L25.8894 8.54901C26.3897 9.0492 26.671 9.72765 26.671 10.4351V25.3373C26.671 26.8107 25.4766 28.0051 24.0032 28.0051H10.6644C9.19099 28.0051 7.99658 26.8107 7.99658 25.3373V24.0034" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5054 15.085V17.6914L12.5542 18.9399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.99463" y="10.6646" width="13.3389" height="13.3389" rx="3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6709 10.6646H21.3354C20.5987 10.6646 20.0015 10.0674 20.0015 9.33067V3.99512" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99658 10.6646V6.66289C7.99658 5.18952 9.19099 3.99512 10.6644 3.99512H20.231C20.9385 3.99512 21.6169 4.27644 22.1171 4.77678L25.8894 8.54901C26.3897 9.0492 26.671 9.72765 26.671 10.4351V25.3373C26.671 26.8107 25.4766 28.0051 24.0032 28.0051H10.6644C9.19099 28.0051 7.99658 26.8107 7.99658 25.3373V24.0034" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5054 15.085V17.6914L12.5542 18.9399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.99463" y="10.6646" width="13.3389" height="13.3389" rx="3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
}

export const IconsDocumentVersionsClock: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
