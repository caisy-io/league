import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.25164 11.1019L11.1028 2.25072C11.4371 1.91643 11.9797 1.91643 12.314 2.25072L13.7506 3.68734C14.0849 4.02164 14.0849 4.56423 13.7506 4.89852L4.89858 13.7488C4.73829 13.91 4.52057 14 4.29342 14H2.00049V11.707C2.00049 11.4799 2.09049 11.2622 2.25164 11.1019Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.2832 4.45129L11.5484 6.71646" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.25164 11.1019L11.1028 2.25072C11.4371 1.91643 11.9797 1.91643 12.314 2.25072L13.7506 3.68734C14.0849 4.02164 14.0849 4.56423 13.7506 4.89852L4.89858 13.7488C4.73829 13.91 4.52057 14 4.29342 14H2.00049V11.707C2.00049 11.4799 2.09049 11.2622 2.25164 11.1019Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.2832 4.45129L11.5484 6.71646" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.293 13.619L13.619 3.29299C14.009 2.90299 14.642 2.90299 15.032 3.29299L16.708 4.96899C17.098 5.35899 17.098 5.99199 16.708 6.38198L6.381 16.707C6.194 16.895 5.94 17 5.675 17H3V14.325C3 14.06 3.105 13.806 3.293 13.619Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9253 5.07043L14.9297 8.07482" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.33535 16.136L16.1366 4.33478C16.5823 3.88906 17.3057 3.88906 17.7514 4.33478L19.6669 6.25022C20.1126 6.69593 20.1126 7.41937 19.6669 7.86508L7.86451 19.6652C7.6508 19.88 7.36051 20 7.05765 20H4.00049V16.9428C4.00049 16.64 4.12049 16.3497 4.33535 16.136Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.813 6.9856L17.0144 10.187" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.33535 16.136L16.1366 4.33478C16.5823 3.88906 17.3057 3.88906 17.7514 4.33478L19.6669 6.25022C20.1126 6.69593 20.1126 7.41937 19.6669 7.86508L7.86451 19.6652C7.6508 19.88 7.36051 20 7.05765 20H4.00049V16.9428C4.00049 16.64 4.12049 16.3497 4.33535 16.136Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.813 6.9856L17.0144 10.187" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.4176 21.17L21.1691 6.41847C21.7263 5.86132 22.6306 5.86132 23.1877 6.41847L25.582 8.81277C26.1392 9.36992 26.1392 10.2742 25.582 10.8314L10.8291 25.5815C10.5619 25.85 10.1991 26 9.82048 26H5.99902V22.1786C5.99902 21.8 6.14902 21.4371 6.4176 21.17Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.4116 9.3291L22.6705 13.588" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.4176 21.17L21.1691 6.41847C21.7263 5.86132 22.6306 5.86132 23.1877 6.41847L25.582 8.81277C26.1392 9.36992 26.1392 10.2742 25.582 10.8314L10.8291 25.5815C10.5619 25.85 10.1991 26 9.82048 26H5.99902V22.1786C5.99902 21.8 6.14902 21.4371 6.4176 21.17Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.4116 9.3291L22.6705 13.588" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.4176 21.17L21.1691 6.41847C21.7263 5.86132 22.6306 5.86132 23.1877 6.41847L25.582 8.81277C26.1392 9.36992 26.1392 10.2742 25.582 10.8314L10.8291 25.5815C10.5619 25.85 10.1991 26 9.82048 26H5.99902V22.1786C5.99902 21.8 6.14902 21.4371 6.4176 21.17Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.4116 9.3291L22.6705 13.588" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.4176 21.17L21.1691 6.41847C21.7263 5.86132 22.6306 5.86132 23.1877 6.41847L25.582 8.81277C26.1392 9.36992 26.1392 10.2742 25.582 10.8314L10.8291 25.5815C10.5619 25.85 10.1991 26 9.82048 26H5.99902V22.1786C5.99902 21.8 6.14902 21.4371 6.4176 21.17Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.4116 9.3291L22.6705 13.588" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconEdit: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
