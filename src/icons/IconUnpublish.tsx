import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.001 7.99997C11.001 9.65752 9.65733 11.0012 7.99979 11.0012C6.34224 11.0012 4.99854 9.65752 4.99854 7.99997C4.99854 6.34243 6.34224 4.99872 7.99979 4.99872C8.79615 4.99748 9.56025 5.31329 10.1234 5.8764C10.6865 6.43951 11.0023 7.20361 11.001 7.99997Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="1.99756" y="1.9975" width="12.005" height="12.005" rx="6.0025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.87842 10.1216L10.1215 5.87848" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.001 7.99997C11.001 9.65752 9.65733 11.0012 7.99979 11.0012C6.34224 11.0012 4.99854 9.65752 4.99854 7.99997C4.99854 6.34243 6.34224 4.99872 7.99979 4.99872C8.79615 4.99748 9.56025 5.31329 10.1234 5.8764C10.6865 6.43951 11.0023 7.20361 11.001 7.99997Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="1.99756" y="1.9975" width="12.005" height="12.005" rx="6.0025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.87842 10.1216L10.1215 5.87848" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.7517 9.99998C13.7517 12.0719 12.072 13.7515 10.0001 13.7515C7.92817 13.7515 6.24854 12.0719 6.24854 9.99998C6.24854 7.92805 7.92817 6.24842 10.0001 6.24842C10.9955 6.24687 11.9507 6.64162 12.6546 7.34552C13.3585 8.04941 13.7532 9.00453 13.7517 9.99998Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2.49707" y="2.49689" width="15.0062" height="15.0062" rx="7.50312" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.34814 12.652L12.652 7.34808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.5018 12C16.5018 14.4863 14.4862 16.5019 11.9999 16.5019C9.5136 16.5019 7.49805 14.4863 7.49805 12C7.49805 9.51368 9.5136 7.49811 11.9999 7.49811C13.1945 7.49626 14.3406 7.96996 15.1853 8.81463C16.03 9.6593 16.5037 10.8055 16.5018 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2.99609" y="2.99628" width="18.0075" height="18.0075" rx="9.00375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.81787 15.1823L15.1825 8.81769" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.5018 12C16.5018 14.4863 14.4862 16.5019 11.9999 16.5019C9.5136 16.5019 7.49805 14.4863 7.49805 12C7.49805 9.51368 9.5136 7.49811 11.9999 7.49811C13.1945 7.49626 14.3406 7.96996 15.1853 8.81463C16.03 9.6593 16.5037 10.8055 16.5018 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2.99609" y="2.99628" width="18.0075" height="18.0075" rx="9.00375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.81787 15.1823L15.1825 8.81769" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.0026 16C22.0026 19.3151 19.3151 22.0025 16.0001 22.0025C12.685 22.0025 9.99756 19.3151 9.99756 16C9.99756 12.6849 12.685 9.9975 16.0001 9.9975C17.5928 9.99503 19.121 10.6266 20.2472 11.7529C21.3734 12.8791 22.005 14.4073 22.0026 16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.99512" y="3.995" width="24.01" height="24.01" rx="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7568 20.2431L20.243 11.7569" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.0026 16C22.0026 19.3151 19.3151 22.0025 16.0001 22.0025C12.685 22.0025 9.99756 19.3151 9.99756 16C9.99756 12.6849 12.685 9.9975 16.0001 9.9975C17.5928 9.99503 19.121 10.6266 20.2472 11.7529C21.3734 12.8791 22.005 14.4073 22.0026 16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.99512" y="3.995" width="24.01" height="24.01" rx="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7568 20.2431L20.243 11.7569" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.0026 16C22.0026 19.3151 19.3151 22.0025 16.0001 22.0025C12.685 22.0025 9.99756 19.3151 9.99756 16C9.99756 12.6849 12.685 9.9975 16.0001 9.9975C17.5928 9.99503 19.121 10.6266 20.2472 11.7529C21.3734 12.8791 22.005 14.4073 22.0026 16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.99512" y="3.995" width="24.01" height="24.01" rx="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7568 20.2431L20.243 11.7569" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.0026 16C22.0026 19.3151 19.3151 22.0025 16.0001 22.0025C12.685 22.0025 9.99756 19.3151 9.99756 16C9.99756 12.6849 12.685 9.9975 16.0001 9.9975C17.5928 9.99503 19.121 10.6266 20.2472 11.7529C21.3734 12.8791 22.005 14.4073 22.0026 16Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3.99512" y="3.995" width="24.01" height="24.01" rx="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7568 20.2431L20.243 11.7569" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconUnpublish: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
