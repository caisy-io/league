import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.33301 3.99844C7.70147 3.63039 8.29843 3.63039 8.6669 3.99844C8.29884 3.62998 8.29884 3.03301 8.6669 2.66455C8.29843 3.0326 7.70147 3.0326 7.33301 2.66455C7.70106 3.03301 7.70106 3.62998 7.33301 3.99844Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0015 3.99844C12.3699 3.63039 12.9669 3.63039 13.3354 3.99844C12.9673 3.62998 12.9673 3.03301 13.3354 2.66455C12.9669 3.0326 12.3699 3.0326 12.0015 2.66455C12.3695 3.03301 12.3695 3.62998 12.0015 3.99844Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.00012 6.58484C8.3908 6.19416 9.02423 6.19416 9.41492 6.58484V6.58484C9.80561 6.97553 9.80561 7.60896 9.41492 7.99965L4.37256 13.042C3.98188 13.4327 3.34845 13.4327 2.95776 13.042V13.042C2.56707 12.6513 2.56707 12.0179 2.95776 11.6272L8.00012 6.58484Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0015 8.6669C12.3699 8.29884 12.9669 8.29884 13.3354 8.6669C12.9673 8.29843 12.9673 7.70147 13.3354 7.33301C12.9669 7.70106 12.3699 7.70106 12.0015 7.33301C12.3695 7.70147 12.3695 8.29843 12.0015 8.6669Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.33301 3.99844C7.70147 3.63039 8.29843 3.63039 8.6669 3.99844C8.29884 3.62998 8.29884 3.03301 8.6669 2.66455C8.29843 3.0326 7.70147 3.0326 7.33301 2.66455C7.70106 3.03301 7.70106 3.62998 7.33301 3.99844Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0015 3.99844C12.3699 3.63039 12.9669 3.63039 13.3354 3.99844C12.9673 3.62998 12.9673 3.03301 13.3354 2.66455C12.9669 3.0326 12.3699 3.0326 12.0015 2.66455C12.3695 3.03301 12.3695 3.62998 12.0015 3.99844Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.00012 6.58484C8.3908 6.19416 9.02423 6.19416 9.41492 6.58484V6.58484C9.80561 6.97553 9.80561 7.60896 9.41492 7.99965L4.37256 13.042C3.98188 13.4327 3.34845 13.4327 2.95776 13.042V13.042C2.56707 12.6513 2.56707 12.0179 2.95776 11.6272L8.00012 6.58484Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0015 8.6669C12.3699 8.29884 12.9669 8.29884 13.3354 8.6669C12.9673 8.29843 12.9673 7.70147 13.3354 7.33301C12.9669 7.70106 12.3699 7.70106 12.0015 7.33301C12.3695 7.70147 12.3695 8.29843 12.0015 8.6669Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.16602 4.99793C9.62659 4.53786 10.3728 4.53786 10.8334 4.99793C10.3733 4.53735 10.3733 3.79115 10.8334 3.33057C10.3728 3.79063 9.62659 3.79063 9.16602 3.33057C9.62608 3.79115 9.62608 4.53735 9.16602 4.99793Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.002 4.99793C15.4625 4.53786 16.2087 4.53786 16.6693 4.99793C16.2092 4.53735 16.2092 3.79115 16.6693 3.33057C16.2087 3.79063 15.4625 3.79063 15.002 3.33057C15.462 3.79115 15.462 4.53735 15.002 4.99793Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 8.23093C10.4884 7.74257 11.2802 7.74257 11.7685 8.23093V8.23093C12.2569 8.71929 12.2569 9.51108 11.7685 9.99944L5.46558 16.3024C4.97722 16.7907 4.18544 16.7907 3.69708 16.3024V16.3024C3.20872 15.814 3.20872 15.0222 3.69708 14.5339L10 8.23093Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.002 10.8334C15.4625 10.3733 16.2087 10.3733 16.6693 10.8334C16.2092 10.3728 16.2092 9.62659 16.6693 9.16602C16.2087 9.62608 15.4625 9.62608 15.002 9.16602C15.462 9.62659 15.462 10.3728 15.002 10.8334Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9995 5.99742C11.5522 5.44533 12.4477 5.44533 13.0003 5.99742C12.4483 5.44472 12.4483 4.54928 13.0003 3.99658C12.4477 4.54866 11.5522 4.54866 10.9995 3.99658C11.5516 4.54928 11.5516 5.44472 10.9995 5.99742Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.0024 5.99742C18.5551 5.44533 19.4506 5.44533 20.0033 5.99742C19.4512 5.44472 19.4512 4.54928 20.0033 3.99658C19.4506 4.54866 18.5551 4.54866 18.0024 3.99658C18.5545 4.54928 18.5545 5.44472 18.0024 5.99742Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0014 9.87658C12.5871 9.29079 13.5373 9.29123 14.1231 9.87702V9.87702C14.7089 10.4628 14.7093 11.413 14.1236 11.9988L6.55914 19.5632C5.97335 20.149 5.02316 20.1485 4.43737 19.5628V19.5628C3.85159 18.977 3.85115 18.0268 4.43693 17.441L12.0014 9.87658Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.0024 13.0003C18.5551 12.4483 19.4506 12.4483 20.0033 13.0003C19.4512 12.4477 19.4512 11.5522 20.0033 10.9995C19.4506 11.5516 18.5551 11.5516 18.0024 10.9995C18.5545 11.5522 18.5545 12.4477 18.0024 13.0003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.9995 5.99742C11.5522 5.44533 12.4477 5.44533 13.0003 5.99742C12.4483 5.44472 12.4483 4.54928 13.0003 3.99658C12.4477 4.54866 11.5522 4.54866 10.9995 3.99658C11.5516 4.54928 11.5516 5.44472 10.9995 5.99742Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.0024 5.99742C18.5551 5.44533 19.4506 5.44533 20.0033 5.99742C19.4512 5.44472 19.4512 4.54928 20.0033 3.99658C19.4506 4.54866 18.5551 4.54866 18.0024 3.99658C18.5545 4.54928 18.5545 5.44472 18.0024 5.99742Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0014 9.87658C12.5871 9.29079 13.5373 9.29123 14.1231 9.87702V9.87702C14.7089 10.4628 14.7093 11.413 14.1236 11.9988L6.55914 19.5632C5.97335 20.149 5.02316 20.1485 4.43737 19.5628V19.5628C3.85159 18.977 3.85115 18.0268 4.43693 17.441L12.0014 9.87658Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.0024 13.0003C18.5551 12.4483 19.4506 12.4483 20.0033 13.0003C19.4512 12.4477 19.4512 11.5522 20.0033 10.9995C19.4506 11.5516 18.5551 11.5516 18.0024 10.9995C18.5545 11.5522 18.5545 12.4477 18.0024 13.0003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.6729 8.00323C15.4098 7.26712 16.6037 7.26712 17.3406 8.00323C16.6045 7.2663 16.6045 6.07238 17.3406 5.33545C16.6037 6.07156 15.4098 6.07156 14.6729 5.33545C15.409 6.07238 15.409 7.2663 14.6729 8.00323Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0098 8.00323C24.7467 7.26712 25.9406 7.26712 26.6775 8.00323C25.9414 7.2663 25.9414 6.07238 26.6775 5.33545C25.9406 6.07156 24.7467 6.07156 24.0098 5.33545C24.7459 6.07238 24.7459 7.2663 24.0098 8.00323Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.3617 12.8219C16.9475 12.2361 17.8972 12.2361 18.483 12.8219L19.1913 13.5302C19.7771 14.116 19.7771 15.0657 19.1913 15.6515L8.39831 26.4445C7.81252 27.0303 6.86277 27.0303 6.27699 26.4445L5.5687 25.7362C4.98292 25.1504 4.98292 24.2007 5.5687 23.6149L16.3617 12.8219Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0098 17.3406C24.7467 16.6045 25.9406 16.6045 26.6775 17.3406C25.9414 16.6037 25.9414 15.4098 26.6775 14.6729C25.9406 15.409 24.7467 15.409 24.0098 14.6729C24.7459 15.4098 24.7459 16.6037 24.0098 17.3406Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.6729 8.00323C15.4098 7.26712 16.6037 7.26712 17.3406 8.00323C16.6045 7.2663 16.6045 6.07238 17.3406 5.33545C16.6037 6.07156 15.4098 6.07156 14.6729 5.33545C15.409 6.07238 15.409 7.2663 14.6729 8.00323Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0098 8.00323C24.7467 7.26712 25.9406 7.26712 26.6775 8.00323C25.9414 7.2663 25.9414 6.07238 26.6775 5.33545C25.9406 6.07156 24.7467 6.07156 24.0098 5.33545C24.7459 6.07238 24.7459 7.2663 24.0098 8.00323Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.3617 12.8219C16.9475 12.2361 17.8972 12.2361 18.483 12.8219L19.1913 13.5302C19.7771 14.116 19.7771 15.0657 19.1913 15.6515L8.39831 26.4445C7.81252 27.0303 6.86277 27.0303 6.27699 26.4445L5.5687 25.7362C4.98292 25.1504 4.98292 24.2007 5.5687 23.6149L16.3617 12.8219Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0098 17.3406C24.7467 16.6045 25.9406 16.6045 26.6775 17.3406C25.9414 16.6037 25.9414 15.4098 26.6775 14.6729C25.9406 15.409 24.7467 15.409 24.0098 14.6729C24.7459 15.4098 24.7459 16.6037 24.0098 17.3406Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.6729 8.00323C15.4098 7.26712 16.6037 7.26712 17.3406 8.00323C16.6045 7.2663 16.6045 6.07238 17.3406 5.33545C16.6037 6.07156 15.4098 6.07156 14.6729 5.33545C15.409 6.07238 15.409 7.2663 14.6729 8.00323Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0098 8.00323C24.7467 7.26712 25.9406 7.26712 26.6775 8.00323C25.9414 7.2663 25.9414 6.07238 26.6775 5.33545C25.9406 6.07156 24.7467 6.07156 24.0098 5.33545C24.7459 6.07238 24.7459 7.2663 24.0098 8.00323Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.3617 12.8219C16.9475 12.2361 17.8972 12.2361 18.483 12.8219L19.1913 13.5302C19.7771 14.116 19.7771 15.0657 19.1913 15.6515L8.39831 26.4445C7.81252 27.0303 6.86277 27.0303 6.27699 26.4445L5.5687 25.7362C4.98292 25.1504 4.98292 24.2007 5.5687 23.6149L16.3617 12.8219Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0098 17.3406C24.7467 16.6045 25.9406 16.6045 26.6775 17.3406C25.9414 16.6037 25.9414 15.4098 26.6775 14.6729C25.9406 15.409 24.7467 15.409 24.0098 14.6729C24.7459 15.4098 24.7459 16.6037 24.0098 17.3406Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.6729 8.00323C15.4098 7.26712 16.6037 7.26712 17.3406 8.00323C16.6045 7.2663 16.6045 6.07238 17.3406 5.33545C16.6037 6.07156 15.4098 6.07156 14.6729 5.33545C15.409 6.07238 15.409 7.2663 14.6729 8.00323Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0098 8.00323C24.7467 7.26712 25.9406 7.26712 26.6775 8.00323C25.9414 7.2663 25.9414 6.07238 26.6775 5.33545C25.9406 6.07156 24.7467 6.07156 24.0098 5.33545C24.7459 6.07238 24.7459 7.2663 24.0098 8.00323Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.3617 12.8219C16.9475 12.2361 17.8972 12.2361 18.483 12.8219L19.1913 13.5302C19.7771 14.116 19.7771 15.0657 19.1913 15.6515L8.39831 26.4445C7.81252 27.0303 6.86277 27.0303 6.27699 26.4445L5.5687 25.7362C4.98292 25.1504 4.98292 24.2007 5.5687 23.6149L16.3617 12.8219Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0098 17.3406C24.7467 16.6045 25.9406 16.6045 26.6775 17.3406C25.9414 16.6037 25.9414 15.4098 26.6775 14.6729C25.9406 15.409 24.7467 15.409 24.0098 14.6729C24.7459 15.4098 24.7459 16.6037 24.0098 17.3406Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconMagicWand: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
