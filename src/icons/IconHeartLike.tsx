import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.464 2.6665C12.5807 2.6665 14 4.65317 14 6.50317C14 10.2585 8.10733 13.3332 8 13.3332C7.89267 13.3332 2 10.2585 2 6.50317C2 4.65317 3.41933 2.6665 5.536 2.6665C6.746 2.6665 7.54067 3.26984 8 3.80717C8.45933 3.26984 9.254 2.6665 10.464 2.6665Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.464 2.6665C12.5807 2.6665 14 4.65317 14 6.50317C14 10.2585 8.10733 13.3332 8 13.3332C7.89267 13.3332 2 10.2585 2 6.50317C2 4.65317 3.41933 2.6665 5.536 2.6665C6.746 2.6665 7.54067 3.26984 8 3.80717C8.45933 3.26984 9.254 2.6665 10.464 2.6665Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.08 3.3335C15.7258 3.3335 17.5 5.81683 17.5 8.12933C17.5 12.8235 10.1342 16.6668 10 16.6668C9.86583 16.6668 2.5 12.8235 2.5 8.12933C2.5 5.81683 4.27417 3.3335 6.92 3.3335C8.4325 3.3335 9.42583 4.08766 10 4.75933C10.5742 4.08766 11.5675 3.3335 13.08 3.3335Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.696 4C18.871 4 21 6.98 21 9.755C21 15.388 12.161 20 12 20C11.839 20 3 15.388 3 9.755C3 6.98 5.129 4 8.304 4C10.119 4 11.311 4.905 12 5.711C12.689 4.905 13.881 4 15.696 4Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.696 4C18.871 4 21 6.98 21 9.755C21 15.388 12.161 20 12 20C11.839 20 3 15.388 3 9.755C3 6.98 5.129 4 8.304 4C10.119 4 11.311 4.905 12 5.711C12.689 4.905 13.881 4 15.696 4Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.928 5.3335C25.1613 5.3335 28 9.30683 28 13.0068C28 20.5175 16.2147 26.6668 16 26.6668C15.7853 26.6668 4 20.5175 4 13.0068C4 9.30683 6.83867 5.3335 11.072 5.3335C13.492 5.3335 15.0813 6.54016 16 7.61483C16.9187 6.54016 18.508 5.3335 20.928 5.3335Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.928 5.3335C25.1613 5.3335 28 9.30683 28 13.0068C28 20.5175 16.2147 26.6668 16 26.6668C15.7853 26.6668 4 20.5175 4 13.0068C4 9.30683 6.83867 5.3335 11.072 5.3335C13.492 5.3335 15.0813 6.54016 16 7.61483C16.9187 6.54016 18.508 5.3335 20.928 5.3335Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.928 5.3335C25.1613 5.3335 28 9.30683 28 13.0068C28 20.5175 16.2147 26.6668 16 26.6668C15.7853 26.6668 4 20.5175 4 13.0068C4 9.30683 6.83867 5.3335 11.072 5.3335C13.492 5.3335 15.0813 6.54016 16 7.61483C16.9187 6.54016 18.508 5.3335 20.928 5.3335Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.928 5.3335C25.1613 5.3335 28 9.30683 28 13.0068C28 20.5175 16.2147 26.6668 16 26.6668C15.7853 26.6668 4 20.5175 4 13.0068C4 9.30683 6.83867 5.3335 11.072 5.3335C13.492 5.3335 15.0813 6.54016 16 7.61483C16.9187 6.54016 18.508 5.3335 20.928 5.3335Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconHeartLike: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
