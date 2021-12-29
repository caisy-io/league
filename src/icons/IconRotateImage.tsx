import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0471 10.8108L8.89648 13.9615C8.40048 14.4575 7.59582 14.4575 7.09982 13.9615L3.94915 10.8108C3.45315 10.3148 3.45315 9.51012 3.94915 9.01412L7.09982 5.86346C7.59582 5.36746 8.40048 5.36746 8.89648 5.86346L12.0471 9.01412C12.5431 9.51012 12.5431 10.3148 12.0471 10.8108Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.86379 5.16546H2.71246H4.22046H2.45312V3.39746" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.2333 5.16541C12.4033 3.11475 10.3993 1.66675 8.05061 1.66675C5.70195 1.66675 3.69461 3.11475 2.86328 5.16541" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>      
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0471 10.8108L8.89648 13.9615C8.40048 14.4575 7.59582 14.4575 7.09982 13.9615L3.94915 10.8108C3.45315 10.3148 3.45315 9.51012 3.94915 9.01412L7.09982 5.86346C7.59582 5.36746 8.40048 5.36746 8.89648 5.86346L12.0471 9.01412C12.5431 9.51012 12.5431 10.3148 12.0471 10.8108Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.86379 5.16546H2.71246H4.22046H2.45312V3.39746" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.2333 5.16541C12.4033 3.11475 10.3993 1.66675 8.05061 1.66675C5.70195 1.66675 3.69461 3.11475 2.86328 5.16541" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>           
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.0592 13.5132L11.1208 17.4515C10.5008 18.0715 9.49501 18.0715 8.87501 17.4515L4.93668 13.5132C4.31668 12.8932 4.31668 11.8873 4.93668 11.2673L8.87501 7.32901C9.49501 6.70901 10.5008 6.70901 11.1208 7.32901L15.0592 11.2673C15.6792 11.8873 15.6792 12.8932 15.0592 13.5132Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.57974 6.45658H3.39057H5.27557H3.06641V4.24658" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5416 6.45658C15.5041 3.89325 12.9991 2.08325 10.0633 2.08325C7.12744 2.08325 4.61827 3.89325 3.5791 6.45658" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>      
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.0702 16.2161L13.3442 20.9421C12.6002 21.6861 11.3932 21.6861 10.6492 20.9421L5.92323 16.2161C5.17923 15.4721 5.17923 14.2651 5.92323 13.5211L10.6492 8.79506C11.3932 8.05106 12.6002 8.05106 13.3442 8.79506L18.0702 13.5211C18.8142 14.2651 18.8142 15.4721 18.0702 16.2161Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.29569 7.74795H4.06869H6.33069H3.67969V5.09595" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.8499 7.748C18.6049 4.672 15.5989 2.5 12.0759 2.5C8.55292 2.5 5.54192 4.672 4.29492 7.748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>     
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.0702 16.2161L13.3442 20.9421C12.6002 21.6861 11.3932 21.6861 10.6492 20.9421L5.92323 16.2161C5.17923 15.4721 5.17923 14.2651 5.92323 13.5211L10.6492 8.79506C11.3932 8.05106 12.6002 8.05106 13.3442 8.79506L18.0702 13.5211C18.8142 14.2651 18.8142 15.4721 18.0702 16.2161Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.29569 7.74795H4.06869H6.33069H3.67969V5.09595" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.8499 7.748C18.6049 4.672 15.5989 2.5 12.0759 2.5C8.55292 2.5 5.54192 4.672 4.29492 7.748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0943 21.6213L17.793 27.9227C16.801 28.9147 15.1916 28.9147 14.1996 27.9227L7.8983 21.6213C6.9063 20.6293 6.9063 19.02 7.8983 18.028L14.1996 11.7267C15.1916 10.7347 16.801 10.7347 17.793 11.7267L24.0943 18.028C25.0863 19.02 25.0863 20.6293 24.0943 21.6213Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.72758 10.3307H5.42492H8.44092H4.90625V6.79468" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.4666 10.3306C24.8066 6.22925 20.7986 3.33325 16.1012 3.33325C11.4039 3.33325 7.38923 6.22925 5.72656 10.3306" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0943 21.6213L17.793 27.9227C16.801 28.9147 15.1916 28.9147 14.1996 27.9227L7.8983 21.6213C6.9063 20.6293 6.9063 19.02 7.8983 18.028L14.1996 11.7267C15.1916 10.7347 16.801 10.7347 17.793 11.7267L24.0943 18.028C25.0863 19.02 25.0863 20.6293 24.0943 21.6213Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.72758 10.3307H5.42492H8.44092H4.90625V6.79468" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.4666 10.3306C24.8066 6.22925 20.7986 3.33325 16.1012 3.33325C11.4039 3.33325 7.38923 6.22925 5.72656 10.3306" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0943 21.6213L17.793 27.9227C16.801 28.9147 15.1916 28.9147 14.1996 27.9227L7.8983 21.6213C6.9063 20.6293 6.9063 19.02 7.8983 18.028L14.1996 11.7267C15.1916 10.7347 16.801 10.7347 17.793 11.7267L24.0943 18.028C25.0863 19.02 25.0863 20.6293 24.0943 21.6213Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.72758 10.3307H5.42492H8.44092H4.90625V6.79468" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.4666 10.3306C24.8066 6.22925 20.7986 3.33325 16.1012 3.33325C11.4039 3.33325 7.38923 6.22925 5.72656 10.3306" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.0943 21.6213L17.793 27.9227C16.801 28.9147 15.1916 28.9147 14.1996 27.9227L7.8983 21.6213C6.9063 20.6293 6.9063 19.02 7.8983 18.028L14.1996 11.7267C15.1916 10.7347 16.801 10.7347 17.793 11.7267L24.0943 18.028C25.0863 19.02 25.0863 20.6293 24.0943 21.6213Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.72758 10.3307H5.42492H8.44092H4.90625V6.79468" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.4666 10.3306C24.8066 6.22925 20.7986 3.33325 16.1012 3.33325C11.4039 3.33325 7.38923 6.22925 5.72656 10.3306" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
};

export const IconRotateImage: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
