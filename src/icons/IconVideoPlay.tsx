import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3335 14H2.66683C2.31318 14.0001 1.97398 13.8597 1.72391 13.6096C1.47384 13.3595 1.3334 13.0203 1.3335 12.6667V3.33333C1.3334 2.97968 1.47384 2.64049 1.72391 2.39042C1.97398 2.14035 2.31318 1.9999 2.66683 2H13.3335C13.6871 1.9999 14.0263 2.14035 14.2764 2.39042C14.5265 2.64049 14.6669 2.97968 14.6668 3.33333V12.6667C14.6669 13.0203 14.5265 13.3595 14.2764 13.6096C14.0263 13.8597 13.6871 14.0001 13.3335 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.3335 5.33333H14.6668" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 5.33333L5.33333 2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.3335 5.33333L8.66683 2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6665 5.33333L11.9998 2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.74854 10.8995V8.43404C6.74857 8.27918 6.83123 8.1361 6.96537 8.05872C7.09951 7.98134 7.26475 7.98141 7.39883 8.0589L9.53202 9.29162C9.66601 9.36903 9.74854 9.51202 9.74854 9.66676C9.74854 9.8215 9.66601 9.9645 9.53202 10.0419L7.39883 11.2746C7.26476 11.3521 7.09952 11.3522 6.96537 11.2748C6.83123 11.1974 6.74857 11.0543 6.74854 10.8995Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.3335 14H2.66683C2.31318 14.0001 1.97398 13.8597 1.72391 13.6096C1.47384 13.3595 1.3334 13.0203 1.3335 12.6667V3.33333C1.3334 2.97968 1.47384 2.64049 1.72391 2.39042C1.97398 2.14035 2.31318 1.9999 2.66683 2H13.3335C13.6871 1.9999 14.0263 2.14035 14.2764 2.39042C14.5265 2.64049 14.6669 2.97968 14.6668 3.33333V12.6667C14.6669 13.0203 14.5265 13.3595 14.2764 13.6096C14.0263 13.8597 13.6871 14.0001 13.3335 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.3335 5.33333H14.6668" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 5.33333L5.33333 2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.3335 5.33333L8.66683 2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6665 5.33333L11.9998 2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.74854 10.8995V8.43404C6.74857 8.27918 6.83123 8.1361 6.96537 8.05872C7.09951 7.98134 7.26475 7.98141 7.39883 8.0589L9.53202 9.29162C9.66601 9.36903 9.74854 9.51202 9.74854 9.66676C9.74854 9.8215 9.66601 9.9645 9.53202 10.0419L7.39883 11.2746C7.26476 11.3521 7.09952 11.3522 6.96537 11.2748C6.83123 11.1974 6.74857 11.0543 6.74854 10.8995Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17 17.5H3.66667C3.2246 17.5001 2.80061 17.3246 2.48802 17.012C2.17543 16.6994 1.99988 16.2754 2 15.8333V4.16667C1.99988 3.7246 2.17543 3.30061 2.48802 2.98802C2.80061 2.67543 3.2246 2.49988 3.66667 2.5H17C17.4421 2.49988 17.8661 2.67543 18.1786 2.98802C18.4912 3.30061 18.6668 3.7246 18.6667 4.16667V15.8333C18.6668 16.2754 18.4912 16.6994 18.1786 17.012C17.8661 17.3246 17.4421 17.5001 17 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 6.66667H18.6667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.3335 6.66667L7.00016 2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 6.66667L11.1667 2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.667 6.66667L15.3337 2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.76904 13.6242V10.5424C8.76909 10.3488 8.87241 10.1699 9.04009 10.0732C9.20777 9.97649 9.41431 9.97658 9.58191 10.0734L12.2484 11.6143C12.4159 11.7111 12.519 11.8898 12.519 12.0833C12.519 12.2767 12.4159 12.4554 12.2484 12.5522L9.58192 14.0931C9.41432 14.19 9.20777 14.1901 9.04009 14.0933C8.87241 13.9966 8.76908 13.8178 8.76904 13.6242Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.6665 21H4.6665C4.13603 21.0001 3.62723 20.7895 3.25213 20.4144C2.87702 20.0393 2.66636 19.5305 2.6665 19V5C2.66636 4.46952 2.87702 3.96073 3.25213 3.58563C3.62723 3.21052 4.13603 2.99985 4.6665 3H20.6665C21.197 2.99985 21.7058 3.21052 22.0809 3.58563C22.456 3.96073 22.6666 4.46952 22.6665 5V19C22.6666 19.5305 22.456 20.0393 22.0809 20.4144C21.7058 20.7895 21.197 21.0001 20.6665 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.6665 8H22.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 8L8.6665 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6665 8L13.6665 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6665 8L18.6665 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7891 16.3491V12.6509C10.7891 12.4187 10.9131 12.204 11.1143 12.088C11.3155 11.9719 11.5634 11.972 11.7645 12.0882L14.9643 13.9373C15.1653 14.0534 15.2891 14.2679 15.2891 14.5C15.2891 14.7321 15.1653 14.9466 14.9643 15.0627L11.7645 16.9118C11.5634 17.0281 11.3155 17.0282 11.1143 16.9121C10.9131 16.796 10.7891 16.5814 10.7891 16.3491Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M20.6665 21H4.6665C4.13603 21.0001 3.62723 20.7895 3.25213 20.4144C2.87702 20.0393 2.66636 19.5305 2.6665 19V5C2.66636 4.46952 2.87702 3.96073 3.25213 3.58563C3.62723 3.21052 4.13603 2.99985 4.6665 3H20.6665C21.197 2.99985 21.7058 3.21052 22.0809 3.58563C22.456 3.96073 22.6666 4.46952 22.6665 5V19C22.6666 19.5305 22.456 20.0393 22.0809 20.4144C21.7058 20.7895 21.197 21.0001 20.6665 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.6665 8H22.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6665 8L8.6665 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.6665 8L13.6665 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.6665 8L18.6665 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7891 16.3491V12.6509C10.7891 12.4187 10.9131 12.204 11.1143 12.088C11.3155 11.9719 11.5634 11.972 11.7645 12.0882L14.9643 13.9373C15.1653 14.0534 15.2891 14.2679 15.2891 14.5C15.2891 14.7321 15.1653 14.9466 14.9643 15.0627L11.7645 16.9118C11.5634 17.0281 11.3155 17.0282 11.1143 16.9121C10.9131 16.796 10.7891 16.5814 10.7891 16.3491Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6665 28H5.33317C4.62587 28.0002 3.94748 27.7193 3.44734 27.2192C2.9472 26.719 2.66631 26.0406 2.6665 25.3333V6.66667C2.66631 5.95936 2.9472 5.28097 3.44734 4.78083C3.94748 4.28069 4.62587 3.99981 5.33317 4H26.6665C27.3738 3.99981 28.0522 4.28069 28.5523 4.78083C29.0525 5.28097 29.3334 5.95936 29.3332 6.66667V25.3333C29.3334 26.0406 29.0525 26.719 28.5523 27.2192C28.0522 27.7193 27.3738 28.0002 26.6665 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.6665 10.6667H29.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10.6667L10.6667 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6665 10.6667L17.3332 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3335 10.6667L24.0002 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4966 21.7987V16.8678C13.4967 16.5581 13.662 16.272 13.9303 16.1172C14.1985 15.9624 14.529 15.9626 14.7972 16.1176L19.0636 18.583C19.3315 18.7378 19.4966 19.0238 19.4966 19.3333C19.4966 19.6428 19.3315 19.9287 19.0636 20.0836L14.7972 22.549C14.529 22.704 14.1985 22.7041 13.9303 22.5494C13.662 22.3946 13.4966 22.1085 13.4966 21.7987Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6665 28H5.33317C4.62587 28.0002 3.94748 27.7193 3.44734 27.2192C2.9472 26.719 2.66631 26.0406 2.6665 25.3333V6.66667C2.66631 5.95936 2.9472 5.28097 3.44734 4.78083C3.94748 4.28069 4.62587 3.99981 5.33317 4H26.6665C27.3738 3.99981 28.0522 4.28069 28.5523 4.78083C29.0525 5.28097 29.3334 5.95936 29.3332 6.66667V25.3333C29.3334 26.0406 29.0525 26.719 28.5523 27.2192C28.0522 27.7193 27.3738 28.0002 26.6665 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.6665 10.6667H29.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10.6667L10.6667 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6665 10.6667L17.3332 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3335 10.6667L24.0002 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4966 21.7987V16.8678C13.4967 16.5581 13.662 16.272 13.9303 16.1172C14.1985 15.9624 14.529 15.9626 14.7972 16.1176L19.0636 18.583C19.3315 18.7378 19.4966 19.0238 19.4966 19.3333C19.4966 19.6428 19.3315 19.9287 19.0636 20.0836L14.7972 22.549C14.529 22.704 14.1985 22.7041 13.9303 22.5494C13.662 22.3946 13.4966 22.1085 13.4966 21.7987Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6665 28H5.33317C4.62587 28.0002 3.94748 27.7193 3.44734 27.2192C2.9472 26.719 2.66631 26.0406 2.6665 25.3333V6.66667C2.66631 5.95936 2.9472 5.28097 3.44734 4.78083C3.94748 4.28069 4.62587 3.99981 5.33317 4H26.6665C27.3738 3.99981 28.0522 4.28069 28.5523 4.78083C29.0525 5.28097 29.3334 5.95936 29.3332 6.66667V25.3333C29.3334 26.0406 29.0525 26.719 28.5523 27.2192C28.0522 27.7193 27.3738 28.0002 26.6665 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.6665 10.6667H29.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10.6667L10.6667 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6665 10.6667L17.3332 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3335 10.6667L24.0002 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4966 21.7987V16.8678C13.4967 16.5581 13.662 16.272 13.9303 16.1172C14.1985 15.9624 14.529 15.9626 14.7972 16.1176L19.0636 18.583C19.3315 18.7378 19.4966 19.0238 19.4966 19.3333C19.4966 19.6428 19.3315 19.9287 19.0636 20.0836L14.7972 22.549C14.529 22.704 14.1985 22.7041 13.9303 22.5494C13.662 22.3946 13.4966 22.1085 13.4966 21.7987Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M26.6665 28H5.33317C4.62587 28.0002 3.94748 27.7193 3.44734 27.2192C2.9472 26.719 2.66631 26.0406 2.6665 25.3333V6.66667C2.66631 5.95936 2.9472 5.28097 3.44734 4.78083C3.94748 4.28069 4.62587 3.99981 5.33317 4H26.6665C27.3738 3.99981 28.0522 4.28069 28.5523 4.78083C29.0525 5.28097 29.3334 5.95936 29.3332 6.66667V25.3333C29.3334 26.0406 29.0525 26.719 28.5523 27.2192C28.0522 27.7193 27.3738 28.0002 26.6665 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.6665 10.6667H29.3332" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10.6667L10.6667 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6665 10.6667L17.3332 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.3335 10.6667L24.0002 4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4966 21.7987V16.8678C13.4967 16.5581 13.662 16.272 13.9303 16.1172C14.1985 15.9624 14.529 15.9626 14.7972 16.1176L19.0636 18.583C19.3315 18.7378 19.4966 19.0238 19.4966 19.3333C19.4966 19.6428 19.3315 19.9287 19.0636 20.0836L14.7972 22.549C14.529 22.704 14.1985 22.7041 13.9303 22.5494C13.662 22.3946 13.4966 22.1085 13.4966 21.7987Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconVideoPlay: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
