import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6667 14H5.33333C3.49267 14 2 12.5073 2 10.6667V5.33333C2 3.49267 3.49267 2 5.33333 2H10.6667C12.5073 2 14 3.49267 14 5.33333V10.6667C14 12.5073 12.5073 14 10.6667 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99252 7.00726C9.25186 7.00726 8.65186 6.40659 8.65186 5.66659V5.66659C8.65186 4.92593 9.25252 4.32593 9.99252 4.32593" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.97739 4.32593H9.99272C10.7327 4.32593 11.3334 4.92593 11.3334 5.66659V5.66659C11.3334 6.40726 10.7327 7.00726 9.99272 7.00726H5.97739C5.23672 7.00726 4.63672 6.40659 4.63672 5.66659V5.66659C4.63672 4.92593 5.23739 4.32593 5.97739 4.32593Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.97754 8.99268C6.71821 8.99268 7.31821 9.59334 7.31821 10.3333V10.3333C7.31821 11.074 6.71754 11.674 5.97754 11.674" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99272 11.674H5.97739C5.23672 11.674 4.63672 11.0733 4.63672 10.3333V10.3333C4.63672 9.59268 5.23739 8.99268 5.97739 8.99268H9.99272C10.7334 8.99268 11.3334 9.59334 11.3334 10.3333V10.3333C11.3334 11.074 10.7327 11.674 9.99272 11.674Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6667 14H5.33333C3.49267 14 2 12.5073 2 10.6667V5.33333C2 3.49267 3.49267 2 5.33333 2H10.6667C12.5073 2 14 3.49267 14 5.33333V10.6667C14 12.5073 12.5073 14 10.6667 14Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99252 7.00726C9.25186 7.00726 8.65186 6.40659 8.65186 5.66659V5.66659C8.65186 4.92593 9.25252 4.32593 9.99252 4.32593" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.97739 4.32593H9.99272C10.7327 4.32593 11.3334 4.92593 11.3334 5.66659V5.66659C11.3334 6.40726 10.7327 7.00726 9.99272 7.00726H5.97739C5.23672 7.00726 4.63672 6.40659 4.63672 5.66659V5.66659C4.63672 4.92593 5.23739 4.32593 5.97739 4.32593Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.97754 8.99268C6.71821 8.99268 7.31821 9.59334 7.31821 10.3333V10.3333C7.31821 11.074 6.71754 11.674 5.97754 11.674" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99272 11.674H5.97739C5.23672 11.674 4.63672 11.0733 4.63672 10.3333V10.3333C4.63672 9.59268 5.23739 8.99268 5.97739 8.99268H9.99272C10.7334 8.99268 11.3334 9.59334 11.3334 10.3333V10.3333C11.3334 11.074 10.7327 11.674 9.99272 11.674Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.6668 17.5H7.00016C4.69933 17.5 2.8335 15.6342 2.8335 13.3333V6.66667C2.8335 4.36583 4.69933 2.5 7.00016 2.5H13.6668C15.9677 2.5 17.8335 4.36583 17.8335 6.66667V13.3333C17.8335 15.6342 15.9677 17.5 13.6668 17.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.8243 8.75914C11.8984 8.75914 11.1484 8.0083 11.1484 7.0833V7.0833C11.1484 6.15747 11.8993 5.40747 12.8243 5.40747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.80523 5.40747H12.8244C13.7494 5.40747 14.5002 6.15747 14.5002 7.0833V7.0833C14.5002 8.00914 13.7494 8.75914 12.8244 8.75914H7.80523C6.87939 8.75914 6.12939 8.0083 6.12939 7.0833V7.0833C6.12939 6.15747 6.88023 5.40747 7.80523 5.40747Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.80518 11.2407C8.73101 11.2407 9.48101 11.9916 9.48101 12.9166V12.9166C9.48101 13.8424 8.73018 14.5924 7.80518 14.5924" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8244 14.5924H7.80523C6.87939 14.5924 6.12939 13.8416 6.12939 12.9166V12.9166C6.12939 11.9907 6.88023 11.2407 7.80523 11.2407H12.8244C13.7502 11.2407 14.5002 11.9916 14.5002 12.9166V12.9166C14.5002 13.8424 13.7494 14.5924 12.8244 14.5924Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6665 21H8.6665C5.9055 21 3.6665 18.761 3.6665 16V8C3.6665 5.239 5.9055 3 8.6665 3H16.6665C19.4275 3 21.6665 5.239 21.6665 8V16C21.6665 18.761 19.4275 21 16.6665 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6555 10.511C14.5445 10.511 13.6445 9.61001 13.6445 8.50001V8.50001C13.6445 7.38901 14.5455 6.48901 15.6555 6.48901" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.63258 6.48901H15.6556C16.7656 6.48901 17.6666 7.38901 17.6666 8.50001V8.50001C17.6666 9.61101 16.7656 10.511 15.6556 10.511H9.63258C8.52158 10.511 7.62158 9.61001 7.62158 8.50001V8.50001C7.62158 7.38901 8.52258 6.48901 9.63258 6.48901Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.63232 13.489C10.7433 13.489 11.6433 14.39 11.6433 15.5V15.5C11.6433 16.611 10.7423 17.511 9.63232 17.511" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6556 17.511H9.63258C8.52158 17.511 7.62158 16.61 7.62158 15.5V15.5C7.62158 14.389 8.52258 13.489 9.63258 13.489H15.6556C16.7666 13.489 17.6666 14.39 17.6666 15.5V15.5C17.6666 16.611 16.7656 17.511 15.6556 17.511Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6665 21H8.6665C5.9055 21 3.6665 18.761 3.6665 16V8C3.6665 5.239 5.9055 3 8.6665 3H16.6665C19.4275 3 21.6665 5.239 21.6665 8V16C21.6665 18.761 19.4275 21 16.6665 21Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6555 10.511C14.5445 10.511 13.6445 9.61001 13.6445 8.50001V8.50001C13.6445 7.38901 14.5455 6.48901 15.6555 6.48901" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.63258 6.48901H15.6556C16.7656 6.48901 17.6666 7.38901 17.6666 8.50001V8.50001C17.6666 9.61101 16.7656 10.511 15.6556 10.511H9.63258C8.52158 10.511 7.62158 9.61001 7.62158 8.50001V8.50001C7.62158 7.38901 8.52258 6.48901 9.63258 6.48901Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.63232 13.489C10.7433 13.489 11.6433 14.39 11.6433 15.5V15.5C11.6433 16.611 10.7423 17.511 9.63232 17.511" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.6556 17.511H9.63258C8.52158 17.511 7.62158 16.61 7.62158 15.5V15.5C7.62158 14.389 8.52258 13.489 9.63258 13.489H15.6556C16.7666 13.489 17.6666 14.39 17.6666 15.5V15.5C17.6666 16.611 16.7656 17.511 15.6556 17.511Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 28H10.6667C6.98533 28 4 25.0147 4 21.3333V10.6667C4 6.98533 6.98533 4 10.6667 4H21.3333C25.0147 4 28 6.98533 28 10.6667V21.3333C28 25.0147 25.0147 28 21.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.9855 14.0148C18.5042 14.0148 17.3042 12.8134 17.3042 11.3334V11.3334C17.3042 9.8521 18.5055 8.6521 19.9855 8.6521" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9548 8.6521H19.9854C21.4654 8.6521 22.6668 9.8521 22.6668 11.3334V11.3334C22.6668 12.8148 21.4654 14.0148 19.9854 14.0148H11.9548C10.4734 14.0148 9.27344 12.8134 9.27344 11.3334V11.3334C9.27344 9.8521 10.4748 8.6521 11.9548 8.6521Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9546 17.9854C13.4359 17.9854 14.6359 19.1867 14.6359 20.6667V20.6667C14.6359 22.148 13.4346 23.348 11.9546 23.348" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9854 23.348H11.9548C10.4734 23.348 9.27344 22.1467 9.27344 20.6667V20.6667C9.27344 19.1854 10.4748 17.9854 11.9548 17.9854H19.9854C21.4668 17.9854 22.6668 19.1867 22.6668 20.6667V20.6667C22.6668 22.148 21.4654 23.348 19.9854 23.348Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 28H10.6667C6.98533 28 4 25.0147 4 21.3333V10.6667C4 6.98533 6.98533 4 10.6667 4H21.3333C25.0147 4 28 6.98533 28 10.6667V21.3333C28 25.0147 25.0147 28 21.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.9855 14.0148C18.5042 14.0148 17.3042 12.8134 17.3042 11.3334V11.3334C17.3042 9.8521 18.5055 8.6521 19.9855 8.6521" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9548 8.6521H19.9854C21.4654 8.6521 22.6668 9.8521 22.6668 11.3334V11.3334C22.6668 12.8148 21.4654 14.0148 19.9854 14.0148H11.9548C10.4734 14.0148 9.27344 12.8134 9.27344 11.3334V11.3334C9.27344 9.8521 10.4748 8.6521 11.9548 8.6521Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9546 17.9854C13.4359 17.9854 14.6359 19.1867 14.6359 20.6667V20.6667C14.6359 22.148 13.4346 23.348 11.9546 23.348" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9854 23.348H11.9548C10.4734 23.348 9.27344 22.1467 9.27344 20.6667V20.6667C9.27344 19.1854 10.4748 17.9854 11.9548 17.9854H19.9854C21.4668 17.9854 22.6668 19.1867 22.6668 20.6667V20.6667C22.6668 22.148 21.4654 23.348 19.9854 23.348Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 28H10.6667C6.98533 28 4 25.0147 4 21.3333V10.6667C4 6.98533 6.98533 4 10.6667 4H21.3333C25.0147 4 28 6.98533 28 10.6667V21.3333C28 25.0147 25.0147 28 21.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.9855 14.0148C18.5042 14.0148 17.3042 12.8134 17.3042 11.3334V11.3334C17.3042 9.8521 18.5055 8.6521 19.9855 8.6521" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9548 8.6521H19.9854C21.4654 8.6521 22.6668 9.8521 22.6668 11.3334V11.3334C22.6668 12.8148 21.4654 14.0148 19.9854 14.0148H11.9548C10.4734 14.0148 9.27344 12.8134 9.27344 11.3334V11.3334C9.27344 9.8521 10.4748 8.6521 11.9548 8.6521Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9546 17.9854C13.4359 17.9854 14.6359 19.1867 14.6359 20.6667V20.6667C14.6359 22.148 13.4346 23.348 11.9546 23.348" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9854 23.348H11.9548C10.4734 23.348 9.27344 22.1467 9.27344 20.6667V20.6667C9.27344 19.1854 10.4748 17.9854 11.9548 17.9854H19.9854C21.4668 17.9854 22.6668 19.1867 22.6668 20.6667V20.6667C22.6668 22.148 21.4654 23.348 19.9854 23.348Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 28H10.6667C6.98533 28 4 25.0147 4 21.3333V10.6667C4 6.98533 6.98533 4 10.6667 4H21.3333C25.0147 4 28 6.98533 28 10.6667V21.3333C28 25.0147 25.0147 28 21.3333 28Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.9855 14.0148C18.5042 14.0148 17.3042 12.8134 17.3042 11.3334V11.3334C17.3042 9.8521 18.5055 8.6521 19.9855 8.6521" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9548 8.6521H19.9854C21.4654 8.6521 22.6668 9.8521 22.6668 11.3334V11.3334C22.6668 12.8148 21.4654 14.0148 19.9854 14.0148H11.9548C10.4734 14.0148 9.27344 12.8134 9.27344 11.3334V11.3334C9.27344 9.8521 10.4748 8.6521 11.9548 8.6521Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.9546 17.9854C13.4359 17.9854 14.6359 19.1867 14.6359 20.6667V20.6667C14.6359 22.148 13.4346 23.348 11.9546 23.348" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.9854 23.348H11.9548C10.4734 23.348 9.27344 22.1467 9.27344 20.6667V20.6667C9.27344 19.1854 10.4748 17.9854 11.9548 17.9854H19.9854C21.4668 17.9854 22.6668 19.1867 22.6668 20.6667V20.6667C22.6668 22.148 21.4654 23.348 19.9854 23.348Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconTogglesSquare: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
