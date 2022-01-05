import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

interface IIconSolid extends IIconSize {
  solid?: boolean;
}

const IconSize = {
  12: (solid) => solid ? (
  <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.3335 14H4.66683C3.93016 14 3.3335 13.4033 3.3335 12.6667V7.33333C3.3335 6.59667 3.93016 6 4.66683 6H11.3335C12.0702 6 12.6668 6.59667 12.6668 7.33333V12.6667C12.6668 13.4033 12.0702 14 11.3335 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.66683 14H11.3335C12.0702 14 12.6668 13.4033 12.6668 12.6667V7.33333C12.6668 6.59667 12.0702 6 11.3335 6H4.66683C3.93016 6 3.3335 6.59667 3.3335 7.33333V12.6667C3.3335 13.4033 3.93016 14 4.66683 14ZM8.77821 8.32218C9.20778 8.75176 9.20778 9.44824 8.77821 9.87782C8.72283 9.9332 8.66301 9.98144 8.5999 10.0225V11.3933C8.5999 11.7247 8.33127 11.9933 7.9999 11.9933C7.66853 11.9933 7.3999 11.7247 7.3999 11.3933V10.0219C7.33715 9.98094 7.27767 9.93291 7.22257 9.87782C6.793 9.44824 6.793 8.75176 7.22257 8.32218C7.65215 7.89261 8.34863 7.89261 8.77821 8.32218Z"/>
    <path d="M5.3335 6V4.66667V4.66667C5.3335 3.194 6.5275 2 8.00016 2V2C9.47283 2 10.6668 3.194 10.6668 4.66667V4.66667V6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </SIconBase>
  ) : (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.3335 14H4.66683C3.93016 14 3.3335 13.4033 3.3335 12.6667V7.33333C3.3335 6.59667 3.93016 6 4.66683 6H11.3335C12.0702 6 12.6668 6.59667 12.6668 7.33333V12.6667C12.6668 13.4033 12.0702 14 11.3335 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99984 11.3933V9.66663" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.35355 8.81319C8.54881 9.00846 8.54881 9.32504 8.35355 9.5203C8.15829 9.71556 7.84171 9.71556 7.64645 9.5203C7.45118 9.32504 7.45118 9.00846 7.64645 8.81319C7.84171 8.61793 8.15829 8.61793 8.35355 8.81319" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.3335 6V4.66667V4.66667C5.3335 3.194 6.5275 2 8.00016 2V2C9.47283 2 10.6668 3.194 10.6668 4.66667V4.66667V6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (solid) => solid ? (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.3335 14H4.66683C3.93016 14 3.3335 13.4033 3.3335 12.6667V7.33333C3.3335 6.59667 3.93016 6 4.66683 6H11.3335C12.0702 6 12.6668 6.59667 12.6668 7.33333V12.6667C12.6668 13.4033 12.0702 14 11.3335 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.66683 14H11.3335C12.0702 14 12.6668 13.4033 12.6668 12.6667V7.33333C12.6668 6.59667 12.0702 6 11.3335 6H4.66683C3.93016 6 3.3335 6.59667 3.3335 7.33333V12.6667C3.3335 13.4033 3.93016 14 4.66683 14ZM8.77821 8.32218C9.20778 8.75176 9.20778 9.44824 8.77821 9.87782C8.72283 9.9332 8.66301 9.98144 8.5999 10.0225V11.3933C8.5999 11.7247 8.33127 11.9933 7.9999 11.9933C7.66853 11.9933 7.3999 11.7247 7.3999 11.3933V10.0219C7.33715 9.98094 7.27767 9.93291 7.22257 9.87782C6.793 9.44824 6.793 8.75176 7.22257 8.32218C7.65215 7.89261 8.34863 7.89261 8.77821 8.32218Z"/>
      <path d="M5.3335 6V4.66667V4.66667C5.3335 3.194 6.5275 2 8.00016 2V2C9.47283 2 10.6668 3.194 10.6668 4.66667V4.66667V6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.3335 14H4.66683C3.93016 14 3.3335 13.4033 3.3335 12.6667V7.33333C3.3335 6.59667 3.93016 6 4.66683 6H11.3335C12.0702 6 12.6668 6.59667 12.6668 7.33333V12.6667C12.6668 13.4033 12.0702 14 11.3335 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.99984 11.3933V9.66663" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.35355 8.81319C8.54881 9.00846 8.54881 9.32504 8.35355 9.5203C8.15829 9.71556 7.84171 9.71556 7.64645 9.5203C7.45118 9.32504 7.45118 9.00846 7.64645 8.81319C7.84171 8.61793 8.15829 8.61793 8.35355 8.81319" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.3335 6V4.66667V4.66667C5.3335 3.194 6.5275 2 8.00016 2V2C9.47283 2 10.6668 3.194 10.6668 4.66667V4.66667V6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>  
    ),
  20: (solid) => solid ? (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.167 17.5H5.83366C4.91283 17.5 4.16699 16.7542 4.16699 15.8333V9.16667C4.16699 8.24583 4.91283 7.5 5.83366 7.5H14.167C15.0878 7.5 15.8337 8.24583 15.8337 9.16667V15.8333C15.8337 16.7542 15.0878 17.5 14.167 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M5.83366 17.5H14.167C15.0878 17.5 15.8337 16.7542 15.8337 15.8333V9.16667C15.8337 8.24583 15.0878 7.5 14.167 7.5H5.83366C4.91283 7.5 4.16699 8.24583 4.16699 9.16667V15.8333C4.16699 16.7542 4.91283 17.5 5.83366 17.5ZM10.9728 10.4027C11.5098 10.9397 11.5098 11.8103 10.9728 12.3473C10.9036 12.4165 10.8288 12.4768 10.75 12.5282V14.2416C10.75 14.6559 10.4142 14.9916 9.99996 14.9916C9.58575 14.9916 9.24996 14.6559 9.24996 14.2416V12.5274C9.17152 12.4762 9.09717 12.4161 9.0283 12.3473C8.49133 11.8103 8.49133 10.9397 9.0283 10.4027C9.56527 9.86576 10.4359 9.86576 10.9728 10.4027Z"/>
      <path d="M6.66699 7.5V5.83333V5.83333C6.66699 3.9925 8.15949 2.5 10.0003 2.5V2.5C11.8412 2.5 13.3337 3.9925 13.3337 5.83333V5.83333V7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.1665 17.5H5.83317C4.91234 17.5 4.1665 16.7542 4.1665 15.8333V9.16667C4.1665 8.24583 4.91234 7.5 5.83317 7.5H14.1665C15.0873 7.5 15.8332 8.24583 15.8332 9.16667V15.8333C15.8332 16.7542 15.0873 17.5 14.1665 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.0002 14.2417V12.0834" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.4419 11.0164C10.686 11.2605 10.686 11.6562 10.4419 11.9003C10.1979 12.1444 9.80214 12.1444 9.55806 11.9003C9.31398 11.6562 9.31398 11.2605 9.55806 11.0164C9.80214 10.7724 10.1979 10.7724 10.4419 11.0164" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.6665 7.5V5.83333V5.83333C6.6665 3.9925 8.159 2.5 9.99984 2.5V2.5C11.8407 2.5 13.3332 3.9925 13.3332 5.83333V5.83333V7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  24: (solid) => solid ? (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.0005 21H7.00049C5.89549 21 5.00049 20.105 5.00049 19V11C5.00049 9.895 5.89549 9 7.00049 9H17.0005C18.1055 9 19.0005 9.895 19.0005 11V19C19.0005 20.105 18.1055 21 17.0005 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M7.00049 21H17.0005C18.1055 21 19.0005 20.105 19.0005 19V11C19.0005 9.895 18.1055 9 17.0005 9H7.00049C5.89549 9 5.00049 9.895 5.00049 11V19C5.00049 20.105 5.89549 21 7.00049 21ZM13.1676 12.4833C13.8119 13.1276 13.8119 14.1724 13.1676 14.8167C13.0845 14.8998 12.9948 14.9722 12.9001 15.0338V17.09C12.9001 17.587 12.4972 17.99 12.0001 17.99C11.503 17.99 11.1001 17.587 11.1001 17.09V15.0329C11.006 14.9714 10.9167 14.8994 10.8341 14.8167C10.1897 14.1724 10.1897 13.1276 10.8341 12.4833C11.4785 11.8389 12.5232 11.8389 13.1676 12.4833Z"/>
      <path d="M8 9V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17 21H7C5.895 21 5 20.105 5 19V11C5 9.895 5.895 9 7 9H17C18.105 9 19 9.895 19 11V19C19 20.105 18.105 21 17 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17.09V14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5303 13.2197C12.8232 13.5126 12.8232 13.9874 12.5303 14.2803C12.2374 14.5732 11.7626 14.5732 11.4697 14.2803C11.1768 13.9874 11.1768 13.5126 11.4697 13.2197C11.7626 12.9268 12.2374 12.9268 12.5303 13.2197" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 9V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  28: (solid) => solid ? (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.0005 21H7.00049C5.89549 21 5.00049 20.105 5.00049 19V11C5.00049 9.895 5.89549 9 7.00049 9H17.0005C18.1055 9 19.0005 9.895 19.0005 11V19C19.0005 20.105 18.1055 21 17.0005 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M7.00049 21H17.0005C18.1055 21 19.0005 20.105 19.0005 19V11C19.0005 9.895 18.1055 9 17.0005 9H7.00049C5.89549 9 5.00049 9.895 5.00049 11V19C5.00049 20.105 5.89549 21 7.00049 21ZM13.1676 12.4833C13.8119 13.1276 13.8119 14.1724 13.1676 14.8167C13.0845 14.8998 12.9948 14.9722 12.9001 15.0338V17.09C12.9001 17.587 12.4972 17.99 12.0001 17.99C11.503 17.99 11.1001 17.587 11.1001 17.09V15.0329C11.006 14.9714 10.9167 14.8994 10.8341 14.8167C10.1897 14.1724 10.1897 13.1276 10.8341 12.4833C11.4785 11.8389 12.5232 11.8389 13.1676 12.4833Z"/>
      <path d="M8 9V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17 21H7C5.895 21 5 20.105 5 19V11C5 9.895 5.895 9 7 9H17C18.105 9 19 9.895 19 11V19C19 20.105 18.105 21 17 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17.09V14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5303 13.2197C12.8232 13.5126 12.8232 13.9874 12.5303 14.2803C12.2374 14.5732 11.7626 14.5732 11.4697 14.2803C11.1768 13.9874 11.1768 13.5126 11.4697 13.2197C11.7626 12.9268 12.2374 12.9268 12.5303 13.2197" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 9V7V7C8 4.791 9.791 3 12 3V3C14.209 3 16 4.791 16 7V7V9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  32: (solid) => solid ? (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.667 28H9.33366C7.86033 28 6.66699 26.8067 6.66699 25.3333V14.6667C6.66699 13.1933 7.86033 12 9.33366 12H22.667C24.1403 12 25.3337 13.1933 25.3337 14.6667V25.3333C25.3337 26.8067 24.1403 28 22.667 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.33366 28H22.667C24.1403 28 25.3337 26.8067 25.3337 25.3333V14.6667C25.3337 13.1933 24.1403 12 22.667 12H9.33366C7.86033 12 6.66699 13.1933 6.66699 14.6667V25.3333C6.66699 26.8067 7.86033 28 9.33366 28ZM17.5565 16.6444C18.4157 17.5035 18.4157 18.8965 17.5565 19.7556C17.4457 19.8664 17.3261 19.9629 17.1999 20.0451V22.7866C17.1999 23.4494 16.6626 23.9866 15.9999 23.9866C15.3371 23.9866 14.7999 23.4494 14.7999 22.7866V20.0438C14.6744 19.9619 14.5554 19.8658 14.4452 19.7556C13.5861 18.8965 13.5861 17.5035 14.4452 16.6444C15.3044 15.7852 16.6973 15.7852 17.5565 16.6444Z"/>
      <path d="M10.667 12V9.33333V9.33333C10.667 6.388 13.055 4 16.0003 4V4C18.9457 4 21.3337 6.388 21.3337 9.33333V9.33333V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.6665 28H9.33317C7.85984 28 6.6665 26.8067 6.6665 25.3333V14.6667C6.6665 13.1933 7.85984 12 9.33317 12H22.6665C24.1398 12 25.3332 13.1933 25.3332 14.6667V25.3333C25.3332 26.8067 24.1398 28 22.6665 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.0002 22.7867V19.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.7071 17.6263C17.0976 18.0168 17.0976 18.65 16.7071 19.0405C16.3166 19.431 15.6834 19.431 15.2929 19.0405C14.9024 18.65 14.9024 18.0168 15.2929 17.6263C15.6834 17.2357 16.3166 17.2357 16.7071 17.6263" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6665 12V9.33333V9.33333C10.6665 6.388 13.0545 4 15.9998 4V4C18.9452 4 21.3332 6.388 21.3332 9.33333V9.33333V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  36: (solid) => solid ? (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.667 28H9.33366C7.86033 28 6.66699 26.8067 6.66699 25.3333V14.6667C6.66699 13.1933 7.86033 12 9.33366 12H22.667C24.1403 12 25.3337 13.1933 25.3337 14.6667V25.3333C25.3337 26.8067 24.1403 28 22.667 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.33366 28H22.667C24.1403 28 25.3337 26.8067 25.3337 25.3333V14.6667C25.3337 13.1933 24.1403 12 22.667 12H9.33366C7.86033 12 6.66699 13.1933 6.66699 14.6667V25.3333C6.66699 26.8067 7.86033 28 9.33366 28ZM17.5565 16.6444C18.4157 17.5035 18.4157 18.8965 17.5565 19.7556C17.4457 19.8664 17.3261 19.9629 17.1999 20.0451V22.7866C17.1999 23.4494 16.6626 23.9866 15.9999 23.9866C15.3371 23.9866 14.7999 23.4494 14.7999 22.7866V20.0438C14.6744 19.9619 14.5554 19.8658 14.4452 19.7556C13.5861 18.8965 13.5861 17.5035 14.4452 16.6444C15.3044 15.7852 16.6973 15.7852 17.5565 16.6444Z"/>
      <path d="M10.667 12V9.33333V9.33333C10.667 6.388 13.055 4 16.0003 4V4C18.9457 4 21.3337 6.388 21.3337 9.33333V9.33333V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.6665 28H9.33317C7.85984 28 6.6665 26.8067 6.6665 25.3333V14.6667C6.6665 13.1933 7.85984 12 9.33317 12H22.6665C24.1398 12 25.3332 13.1933 25.3332 14.6667V25.3333C25.3332 26.8067 24.1398 28 22.6665 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.0002 22.7867V19.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.7071 17.6263C17.0976 18.0168 17.0976 18.65 16.7071 19.0405C16.3166 19.431 15.6834 19.431 15.2929 19.0405C14.9024 18.65 14.9024 18.0168 15.2929 17.6263C15.6834 17.2357 16.3166 17.2357 16.7071 17.6263" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6665 12V9.33333V9.33333C10.6665 6.388 13.0545 4 15.9998 4V4C18.9452 4 21.3332 6.388 21.3332 9.33333V9.33333V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  40: (solid) => solid ? (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.667 28H9.33366C7.86033 28 6.66699 26.8067 6.66699 25.3333V14.6667C6.66699 13.1933 7.86033 12 9.33366 12H22.667C24.1403 12 25.3337 13.1933 25.3337 14.6667V25.3333C25.3337 26.8067 24.1403 28 22.667 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.33366 28H22.667C24.1403 28 25.3337 26.8067 25.3337 25.3333V14.6667C25.3337 13.1933 24.1403 12 22.667 12H9.33366C7.86033 12 6.66699 13.1933 6.66699 14.6667V25.3333C6.66699 26.8067 7.86033 28 9.33366 28ZM17.5565 16.6444C18.4157 17.5035 18.4157 18.8965 17.5565 19.7556C17.4457 19.8664 17.3261 19.9629 17.1999 20.0451V22.7866C17.1999 23.4494 16.6626 23.9866 15.9999 23.9866C15.3371 23.9866 14.7999 23.4494 14.7999 22.7866V20.0438C14.6744 19.9619 14.5554 19.8658 14.4452 19.7556C13.5861 18.8965 13.5861 17.5035 14.4452 16.6444C15.3044 15.7852 16.6973 15.7852 17.5565 16.6444Z"/>
      <path d="M10.667 12V9.33333V9.33333C10.667 6.388 13.055 4 16.0003 4V4C18.9457 4 21.3337 6.388 21.3337 9.33333V9.33333V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.6665 28H9.33317C7.85984 28 6.6665 26.8067 6.6665 25.3333V14.6667C6.6665 13.1933 7.85984 12 9.33317 12H22.6665C24.1398 12 25.3332 13.1933 25.3332 14.6667V25.3333C25.3332 26.8067 24.1398 28 22.6665 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.0002 22.7867V19.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.7071 17.6263C17.0976 18.0168 17.0976 18.65 16.7071 19.0405C16.3166 19.431 15.6834 19.431 15.2929 19.0405C14.9024 18.65 14.9024 18.0168 15.2929 17.6263C15.6834 17.2357 16.3166 17.2357 16.7071 17.6263" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6665 12V9.33333V9.33333C10.6665 6.388 13.0545 4 15.9998 4V4C18.9452 4 21.3332 6.388 21.3332 9.33333V9.33333V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  48: (solid) => solid ? (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22.667 28H9.33366C7.86033 28 6.66699 26.8067 6.66699 25.3333V14.6667C6.66699 13.1933 7.86033 12 9.33366 12H22.667C24.1403 12 25.3337 13.1933 25.3337 14.6667V25.3333C25.3337 26.8067 24.1403 28 22.667 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.33366 28H22.667C24.1403 28 25.3337 26.8067 25.3337 25.3333V14.6667C25.3337 13.1933 24.1403 12 22.667 12H9.33366C7.86033 12 6.66699 13.1933 6.66699 14.6667V25.3333C6.66699 26.8067 7.86033 28 9.33366 28ZM17.5565 16.6444C18.4157 17.5035 18.4157 18.8965 17.5565 19.7556C17.4457 19.8664 17.3261 19.9629 17.1999 20.0451V22.7866C17.1999 23.4494 16.6626 23.9866 15.9999 23.9866C15.3371 23.9866 14.7999 23.4494 14.7999 22.7866V20.0438C14.6744 19.9619 14.5554 19.8658 14.4452 19.7556C13.5861 18.8965 13.5861 17.5035 14.4452 16.6444C15.3044 15.7852 16.6973 15.7852 17.5565 16.6444Z"/>
      <path d="M10.667 12V9.33333V9.33333C10.667 6.388 13.055 4 16.0003 4V4C18.9457 4 21.3337 6.388 21.3337 9.33333V9.33333V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.6665 28H9.33317C7.85984 28 6.6665 26.8067 6.6665 25.3333V14.6667C6.6665 13.1933 7.85984 12 9.33317 12H22.6665C24.1398 12 25.3332 13.1933 25.3332 14.6667V25.3333C25.3332 26.8067 24.1398 28 22.6665 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.0002 22.7867V19.3334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.7071 17.6263C17.0976 18.0168 17.0976 18.65 16.7071 19.0405C16.3166 19.431 15.6834 19.431 15.2929 19.0405C14.9024 18.65 14.9024 18.0168 15.2929 17.6263C15.6834 17.2357 16.3166 17.2357 16.7071 17.6263" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.6665 12V9.33333V9.33333C10.6665 6.388 13.0545 4 15.9998 4V4C18.9452 4 21.3332 6.388 21.3332 9.33333V9.33333V12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
};

export const IconLock: FC<IIconSolid> = ({ size = 24, solid }) => IconSize[size](solid);

