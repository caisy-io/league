import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5667 14.5H2.56673C1.83007 14.5 1.2334 13.9033 1.2334 13.1667V3.83333C1.2334 3.09667 1.83007 2.5 2.56673 2.5H12.5667C13.3034 2.5 13.9001 3.09667 13.9001 3.83333V13.1667C13.9001 13.9033 13.3034 14.5 12.5667 14.5Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.2334 5.83333H13.9001" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.23665 4.15996C3.23465 4.15996 3.23332 4.16129 3.23332 4.16329C3.23332 4.16529 3.23465 4.16662 3.23665 4.16662C3.23865 4.16662 3.23999 4.16529 3.23999 4.16329C3.23999 4.16129 3.23865 4.15996 3.23665 4.15996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.93197 4.15996C4.92997 4.15996 4.92863 4.16129 4.92863 4.16329C4.92863 4.16529 4.92997 4.16662 4.93197 4.16662C4.93397 4.16662 4.9353 4.16529 4.9353 4.16329C4.9353 4.16129 4.93397 4.15996 4.93197 4.15996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.62533 4.15996C6.62333 4.15996 6.62199 4.16129 6.62199 4.16329C6.62199 4.16529 6.62333 4.16662 6.62533 4.16662C6.62733 4.16662 6.62866 4.16529 6.62866 4.16329C6.62866 4.16129 6.62666 4.15996 6.62533 4.15996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5667 14.5H2.56673C1.83007 14.5 1.2334 13.9033 1.2334 13.1667V3.83333C1.2334 3.09667 1.83007 2.5 2.56673 2.5H12.5667C13.3034 2.5 13.9001 3.09667 13.9001 3.83333V13.1667C13.9001 13.9033 13.3034 14.5 12.5667 14.5Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.2334 5.83333H13.9001" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.23665 4.15996C3.23465 4.15996 3.23332 4.16129 3.23332 4.16329C3.23332 4.16529 3.23465 4.16662 3.23665 4.16662C3.23865 4.16662 3.23999 4.16529 3.23999 4.16329C3.23999 4.16129 3.23865 4.15996 3.23665 4.15996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.93197 4.15996C4.92997 4.15996 4.92863 4.16129 4.92863 4.16329C4.92863 4.16529 4.92997 4.16662 4.93197 4.16662C4.93397 4.16662 4.9353 4.16529 4.9353 4.16329C4.9353 4.16129 4.93397 4.15996 4.93197 4.15996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.62533 4.15996C6.62333 4.15996 6.62199 4.16129 6.62199 4.16329C6.62199 4.16529 6.62333 4.16662 6.62533 4.16662C6.62733 4.16662 6.62866 4.16529 6.62866 4.16329C6.62866 4.16129 6.62666 4.15996 6.62533 4.15996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.8161 18H3.31608C2.39525 18 1.64941 17.2542 1.64941 16.3333V4.66667C1.64941 3.74583 2.39525 3 3.31608 3H15.8161C16.7369 3 17.4827 3.74583 17.4827 4.66667V16.3333C17.4827 17.2542 16.7369 18 15.8161 18Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.64941 7.16667H17.4827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.15397 5.07498C4.15147 5.07498 4.1498 5.07664 4.1498 5.07914C4.1498 5.08164 4.15147 5.08331 4.15397 5.08331C4.15647 5.08331 4.15814 5.08164 4.15814 5.07914C4.15814 5.07664 4.15647 5.07498 4.15397 5.07498" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.27311 5.07498C6.27061 5.07498 6.26895 5.07664 6.26895 5.07914C6.26895 5.08164 6.27061 5.08331 6.27311 5.08331C6.27561 5.08331 6.27728 5.08164 6.27728 5.07914C6.27728 5.07664 6.27561 5.07498 6.27311 5.07498" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.38932 5.07498C8.38682 5.07498 8.38516 5.07664 8.38516 5.07914C8.38516 5.08164 8.38682 5.08331 8.38932 5.08331C8.39182 5.08331 8.39349 5.08164 8.39349 5.07914C8.39349 5.07664 8.39099 5.07498 8.38932 5.07498" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.0664 21.5H4.06641C2.96141 21.5 2.06641 20.605 2.06641 19.5V5.5C2.06641 4.395 2.96141 3.5 4.06641 3.5H19.0664C20.1714 3.5 21.0664 4.395 21.0664 5.5V19.5C21.0664 20.605 20.1714 21.5 19.0664 21.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.06641 8.5H21.0664" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.07129 5.99C5.06829 5.99 5.06629 5.992 5.06629 5.995C5.06629 5.998 5.06829 6 5.07129 6C5.07429 6 5.07629 5.998 5.07629 5.995C5.07629 5.992 5.07429 5.99 5.07129 5.99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.61426 5.99C7.61126 5.99 7.60926 5.992 7.60926 5.995C7.60926 5.998 7.61126 6 7.61426 6C7.61726 6 7.61926 5.998 7.61926 5.995C7.61926 5.992 7.61726 5.99 7.61426 5.99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1543 5.99C10.1513 5.99 10.1493 5.992 10.1493 5.995C10.1493 5.998 10.1513 6 10.1543 6C10.1573 6 10.1593 5.998 10.1593 5.995C10.1593 5.992 10.1563 5.99 10.1543 5.99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.0664 21.5H4.06641C2.96141 21.5 2.06641 20.605 2.06641 19.5V5.5C2.06641 4.395 2.96141 3.5 4.06641 3.5H19.0664C20.1714 3.5 21.0664 4.395 21.0664 5.5V19.5C21.0664 20.605 20.1714 21.5 19.0664 21.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.06641 8.5H21.0664" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.07129 5.99C5.06829 5.99 5.06629 5.992 5.06629 5.995C5.06629 5.998 5.06829 6 5.07129 6C5.07429 6 5.07629 5.998 5.07629 5.995C5.07629 5.992 5.07429 5.99 5.07129 5.99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.61426 5.99C7.61126 5.99 7.60926 5.992 7.60926 5.995C7.60926 5.998 7.61126 6 7.61426 6C7.61726 6 7.61926 5.998 7.61926 5.995C7.61926 5.992 7.61726 5.99 7.61426 5.99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1543 5.99C10.1513 5.99 10.1493 5.992 10.1493 5.995C10.1493 5.998 10.1513 6 10.1543 6C10.1573 6 10.1593 5.998 10.1593 5.995C10.1593 5.992 10.1563 5.99 10.1543 5.99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5661 28.5H5.56608C4.09275 28.5 2.89941 27.3067 2.89941 25.8333V7.16667C2.89941 5.69333 4.09275 4.5 5.56608 4.5H25.5661C27.0394 4.5 28.2327 5.69333 28.2327 7.16667V25.8333C28.2327 27.3067 27.0394 28.5 25.5661 28.5Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.89941 11.1667H28.2327" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.90592 7.82003C6.90192 7.82003 6.89926 7.8227 6.89926 7.8267C6.89926 7.8307 6.90192 7.83337 6.90592 7.83337C6.90992 7.83337 6.91259 7.8307 6.91259 7.8267C6.91259 7.8227 6.90992 7.82003 6.90592 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2965 7.82003C10.2925 7.82003 10.2899 7.8227 10.2899 7.8267C10.2899 7.8307 10.2925 7.83337 10.2965 7.83337C10.3005 7.83337 10.3032 7.8307 10.3032 7.8267C10.3032 7.8227 10.3005 7.82003 10.2965 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6833 7.82003C13.6793 7.82003 13.6766 7.8227 13.6766 7.8267C13.6766 7.8307 13.6793 7.83337 13.6833 7.83337C13.6873 7.83337 13.6899 7.8307 13.6899 7.8267C13.6899 7.8227 13.6859 7.82003 13.6833 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5661 28.5H5.56608C4.09275 28.5 2.89941 27.3067 2.89941 25.8333V7.16667C2.89941 5.69333 4.09275 4.5 5.56608 4.5H25.5661C27.0394 4.5 28.2327 5.69333 28.2327 7.16667V25.8333C28.2327 27.3067 27.0394 28.5 25.5661 28.5Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.89941 11.1667H28.2327" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.90592 7.82003C6.90192 7.82003 6.89926 7.8227 6.89926 7.8267C6.89926 7.8307 6.90192 7.83337 6.90592 7.83337C6.90992 7.83337 6.91259 7.8307 6.91259 7.8267C6.91259 7.8227 6.90992 7.82003 6.90592 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2965 7.82003C10.2925 7.82003 10.2899 7.8227 10.2899 7.8267C10.2899 7.8307 10.2925 7.83337 10.2965 7.83337C10.3005 7.83337 10.3032 7.8307 10.3032 7.8267C10.3032 7.8227 10.3005 7.82003 10.2965 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6833 7.82003C13.6793 7.82003 13.6766 7.8227 13.6766 7.8267C13.6766 7.8307 13.6793 7.83337 13.6833 7.83337C13.6873 7.83337 13.6899 7.8307 13.6899 7.8267C13.6899 7.8227 13.6859 7.82003 13.6833 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5661 28.5H5.56608C4.09275 28.5 2.89941 27.3067 2.89941 25.8333V7.16667C2.89941 5.69333 4.09275 4.5 5.56608 4.5H25.5661C27.0394 4.5 28.2327 5.69333 28.2327 7.16667V25.8333C28.2327 27.3067 27.0394 28.5 25.5661 28.5Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.89941 11.1667H28.2327" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.90592 7.82003C6.90192 7.82003 6.89926 7.8227 6.89926 7.8267C6.89926 7.8307 6.90192 7.83337 6.90592 7.83337C6.90992 7.83337 6.91259 7.8307 6.91259 7.8267C6.91259 7.8227 6.90992 7.82003 6.90592 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2965 7.82003C10.2925 7.82003 10.2899 7.8227 10.2899 7.8267C10.2899 7.8307 10.2925 7.83337 10.2965 7.83337C10.3005 7.83337 10.3032 7.8307 10.3032 7.8267C10.3032 7.8227 10.3005 7.82003 10.2965 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6833 7.82003C13.6793 7.82003 13.6766 7.8227 13.6766 7.8267C13.6766 7.8307 13.6793 7.83337 13.6833 7.83337C13.6873 7.83337 13.6899 7.8307 13.6899 7.8267C13.6899 7.8227 13.6859 7.82003 13.6833 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5661 28.5H5.56608C4.09275 28.5 2.89941 27.3067 2.89941 25.8333V7.16667C2.89941 5.69333 4.09275 4.5 5.56608 4.5H25.5661C27.0394 4.5 28.2327 5.69333 28.2327 7.16667V25.8333C28.2327 27.3067 27.0394 28.5 25.5661 28.5Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.89941 11.1667H28.2327" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.90592 7.82003C6.90192 7.82003 6.89926 7.8227 6.89926 7.8267C6.89926 7.8307 6.90192 7.83337 6.90592 7.83337C6.90992 7.83337 6.91259 7.8307 6.91259 7.8267C6.91259 7.8227 6.90992 7.82003 6.90592 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2965 7.82003C10.2925 7.82003 10.2899 7.8227 10.2899 7.8267C10.2899 7.8307 10.2925 7.83337 10.2965 7.83337C10.3005 7.83337 10.3032 7.8307 10.3032 7.8267C10.3032 7.8227 10.3005 7.82003 10.2965 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.6833 7.82003C13.6793 7.82003 13.6766 7.8227 13.6766 7.8267C13.6766 7.8307 13.6793 7.83337 13.6833 7.83337C13.6873 7.83337 13.6899 7.8307 13.6899 7.8267C13.6899 7.8227 13.6859 7.82003 13.6833 7.82003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconEmbeddedWindow: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
