import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 6.96436H9.33333C9.7 6.96436 10 7.26436 10 7.63102V9.66636C10 10.0344 9.70133 10.333 9.33333 10.333H6.66667C6.29867 10.333 6 10.0344 6 9.66636V7.63102C6 7.26302 6.29867 6.96436 6.66667 6.96436Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.87695 6.96467V6.12267C6.87695 5.50267 7.37962 5 7.99962 5C8.61962 5 9.12229 5.50267 9.12229 6.12267V6.96333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.98184 3.37783L7.54317 2.0805C7.83784 1.97317 8.16117 1.97317 8.45584 2.0805L12.0172 3.37783C12.8078 3.66583 13.3332 4.4165 13.3332 5.25717V8.50517C13.3332 10.8925 12.1145 11.8718 8.66317 13.8258C8.25184 14.0585 7.74784 14.0585 7.3365 13.8258C3.88517 11.8718 2.6665 10.8925 2.6665 8.50517V5.25717C2.6665 4.4165 3.19184 3.66583 3.98184 3.37783Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 6.96436H9.33333C9.7 6.96436 10 7.26436 10 7.63102V9.66636C10 10.0344 9.70133 10.333 9.33333 10.333H6.66667C6.29867 10.333 6 10.0344 6 9.66636V7.63102C6 7.26302 6.29867 6.96436 6.66667 6.96436Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.87695 6.96467V6.12267C6.87695 5.50267 7.37962 5 7.99962 5C8.61962 5 9.12229 5.50267 9.12229 6.12267V6.96333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.98184 3.37783L7.54317 2.0805C7.83784 1.97317 8.16117 1.97317 8.45584 2.0805L12.0172 3.37783C12.8078 3.66583 13.3332 4.4165 13.3332 5.25717V8.50517C13.3332 10.8925 12.1145 11.8718 8.66317 13.8258C8.25184 14.0585 7.74784 14.0585 7.3365 13.8258C3.88517 11.8718 2.6665 10.8925 2.6665 8.50517V5.25717C2.6665 4.4165 3.19184 3.66583 3.98184 3.37783Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.66683 8.70557H12.0002C12.4585 8.70557 12.8335 9.08057 12.8335 9.5389V12.0831C12.8335 12.5431 12.4602 12.9164 12.0002 12.9164H8.66683C8.20683 12.9164 7.8335 12.5431 7.8335 12.0831V9.5389C7.8335 9.0789 8.20683 8.70557 8.66683 8.70557Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.93018 8.70583V7.65333C8.93018 6.87833 9.55851 6.25 10.3335 6.25C11.1085 6.25 11.7368 6.87833 11.7368 7.65333V8.70417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.31116 4.22229L9.76282 2.60063C10.1312 2.46646 10.5353 2.46646 10.9037 2.60063L15.3553 4.22229C16.3437 4.58229 17.0003 5.52062 17.0003 6.57146V10.6315C17.0003 13.6156 15.477 14.8398 11.1628 17.2823C10.6487 17.5731 10.0187 17.5731 9.50449 17.2823C5.19033 14.8398 3.66699 13.6156 3.66699 10.6315V6.57146C3.66699 5.52062 4.32366 4.58229 5.31116 4.22229Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6665 10.4473H14.6665C15.2165 10.4473 15.6665 10.8973 15.6665 11.4473V14.5003C15.6665 15.0523 15.2185 15.5003 14.6665 15.5003H10.6665C10.1145 15.5003 9.6665 15.0523 9.6665 14.5003V11.4473C9.6665 10.8953 10.1145 10.4473 10.6665 10.4473Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9824 10.447V9.184C10.9824 8.254 11.7364 7.5 12.6664 7.5C13.5964 7.5 14.3504 8.254 14.3504 9.184V10.445" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.6395 5.06724L11.9815 3.12124C12.4235 2.96024 12.9085 2.96024 13.3505 3.12124L18.6925 5.06724C19.8785 5.49924 20.6665 6.62524 20.6665 7.88624V12.7582C20.6665 16.3392 18.8385 17.8082 13.6615 20.7392C13.0445 21.0882 12.2885 21.0882 11.6715 20.7392C6.4945 17.8082 4.6665 16.3392 4.6665 12.7582V7.88624C4.6665 6.62524 5.4545 5.49924 6.6395 5.06724Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6665 10.4473H14.6665C15.2165 10.4473 15.6665 10.8973 15.6665 11.4473V14.5003C15.6665 15.0523 15.2185 15.5003 14.6665 15.5003H10.6665C10.1145 15.5003 9.6665 15.0523 9.6665 14.5003V11.4473C9.6665 10.8953 10.1145 10.4473 10.6665 10.4473Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9824 10.447V9.184C10.9824 8.254 11.7364 7.5 12.6664 7.5C13.5964 7.5 14.3504 8.254 14.3504 9.184V10.445" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.6395 5.06724L11.9815 3.12124C12.4235 2.96024 12.9085 2.96024 13.3505 3.12124L18.6925 5.06724C19.8785 5.49924 20.6665 6.62524 20.6665 7.88624V12.7582C20.6665 16.3392 18.8385 17.8082 13.6615 20.7392C13.0445 21.0882 12.2885 21.0882 11.6715 20.7392C6.4945 17.8082 4.6665 16.3392 4.6665 12.7582V7.88624C4.6665 6.62524 5.4545 5.49924 6.6395 5.06724Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 13.9297H18.6667C19.4 13.9297 20 14.5297 20 15.263V19.3337C20 20.0697 19.4027 20.667 18.6667 20.667H13.3333C12.5973 20.667 12 20.0697 12 19.3337V15.263C12 14.527 12.5973 13.9297 13.3333 13.9297Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7549 13.9293V12.2453C13.7549 11.0053 14.7602 10 16.0002 10C17.2402 10 18.2455 11.0053 18.2455 12.2453V13.9267" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.96416 6.75615L15.0868 4.16149C15.6762 3.94682 16.3228 3.94682 16.9122 4.16149L24.0348 6.75615C25.6162 7.33215 26.6668 8.83349 26.6668 10.5148V17.0108C26.6668 21.7855 24.2295 23.7442 17.3268 27.6522C16.5042 28.1175 15.4962 28.1175 14.6735 27.6522C7.77083 23.7442 5.3335 21.7855 5.3335 17.0108V10.5148C5.3335 8.83349 6.38416 7.33215 7.96416 6.75615Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
          
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 13.9297H18.6667C19.4 13.9297 20 14.5297 20 15.263V19.3337C20 20.0697 19.4027 20.667 18.6667 20.667H13.3333C12.5973 20.667 12 20.0697 12 19.3337V15.263C12 14.527 12.5973 13.9297 13.3333 13.9297Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7549 13.9293V12.2453C13.7549 11.0053 14.7602 10 16.0002 10C17.2402 10 18.2455 11.0053 18.2455 12.2453V13.9267" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.96416 6.75615L15.0868 4.16149C15.6762 3.94682 16.3228 3.94682 16.9122 4.16149L24.0348 6.75615C25.6162 7.33215 26.6668 8.83349 26.6668 10.5148V17.0108C26.6668 21.7855 24.2295 23.7442 17.3268 27.6522C16.5042 28.1175 15.4962 28.1175 14.6735 27.6522C7.77083 23.7442 5.3335 21.7855 5.3335 17.0108V10.5148C5.3335 8.83349 6.38416 7.33215 7.96416 6.75615Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 13.9297H18.6667C19.4 13.9297 20 14.5297 20 15.263V19.3337C20 20.0697 19.4027 20.667 18.6667 20.667H13.3333C12.5973 20.667 12 20.0697 12 19.3337V15.263C12 14.527 12.5973 13.9297 13.3333 13.9297Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7549 13.9293V12.2453C13.7549 11.0053 14.7602 10 16.0002 10C17.2402 10 18.2455 11.0053 18.2455 12.2453V13.9267" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.96416 6.75615L15.0868 4.16149C15.6762 3.94682 16.3228 3.94682 16.9122 4.16149L24.0348 6.75615C25.6162 7.33215 26.6668 8.83349 26.6668 10.5148V17.0108C26.6668 21.7855 24.2295 23.7442 17.3268 27.6522C16.5042 28.1175 15.4962 28.1175 14.6735 27.6522C7.77083 23.7442 5.3335 21.7855 5.3335 17.0108V10.5148C5.3335 8.83349 6.38416 7.33215 7.96416 6.75615Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
     
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 13.9297H18.6667C19.4 13.9297 20 14.5297 20 15.263V19.3337C20 20.0697 19.4027 20.667 18.6667 20.667H13.3333C12.5973 20.667 12 20.0697 12 19.3337V15.263C12 14.527 12.5973 13.9297 13.3333 13.9297Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7549 13.9293V12.2453C13.7549 11.0053 14.7602 10 16.0002 10C17.2402 10 18.2455 11.0053 18.2455 12.2453V13.9267" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.96416 6.75615L15.0868 4.16149C15.6762 3.94682 16.3228 3.94682 16.9122 4.16149L24.0348 6.75615C25.6162 7.33215 26.6668 8.83349 26.6668 10.5148V17.0108C26.6668 21.7855 24.2295 23.7442 17.3268 27.6522C16.5042 28.1175 15.4962 28.1175 14.6735 27.6522C7.77083 23.7442 5.3335 21.7855 5.3335 17.0108V10.5148C5.3335 8.83349 6.38416 7.33215 7.96416 6.75615Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
};

export const IconSecurityAuth: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
