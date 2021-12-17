import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6.00033H14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.37984 8.66683H4.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 12.6668H4C2.89533 12.6668 2 11.7715 2 10.6668V5.3335C2 4.22883 2.89533 3.3335 4 3.3335H12C13.1047 3.3335 14 4.22883 14 5.3335V10.6668C14 11.7715 13.1047 12.6668 12 12.6668Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6.00033H14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.37984 8.66683H4.6665" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 12.6668H4C2.89533 12.6668 2 11.7715 2 10.6668V5.3335C2 4.22883 2.89533 3.3335 4 3.3335H12C13.1047 3.3335 14 4.22883 14 5.3335V10.6668C14 11.7715 13.1047 12.6668 12 12.6668Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.8335 7.49967H17.8335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.30866 10.8332H6.16699" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.3335 15.8332H5.3335C3.95266 15.8332 2.8335 14.714 2.8335 13.3332V6.6665C2.8335 5.28567 3.95266 4.1665 5.3335 4.1665H15.3335C16.7143 4.1665 17.8335 5.28567 17.8335 6.6665V13.3332C17.8335 14.714 16.7143 15.8332 15.3335 15.8332Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.6665 9H21.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2365 13H7.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.6665 19H6.6665C5.0095 19 3.6665 17.657 3.6665 16V8C3.6665 6.343 5.0095 5 6.6665 5H18.6665C20.3235 5 21.6665 6.343 21.6665 8V16C21.6665 17.657 20.3235 19 18.6665 19Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.6665 9H21.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2365 13H7.6665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.6665 19H6.6665C5.0095 19 3.6665 17.657 3.6665 16V8C3.6665 6.343 5.0095 5 6.6665 5H18.6665C20.3235 5 21.6665 6.343 21.6665 8V16C21.6665 17.657 20.3235 19 18.6665 19Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11.9997H28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.7602 17.3332H9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 25.3332H8C5.79067 25.3332 4 23.5425 4 21.3332V10.6665C4 8.45717 5.79067 6.6665 8 6.6665H24C26.2093 6.6665 28 8.45717 28 10.6665V21.3332C28 23.5425 26.2093 25.3332 24 25.3332Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11.9997H28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.7602 17.3332H9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 25.3332H8C5.79067 25.3332 4 23.5425 4 21.3332V10.6665C4 8.45717 5.79067 6.6665 8 6.6665H24C26.2093 6.6665 28 8.45717 28 10.6665V21.3332C28 23.5425 26.2093 25.3332 24 25.3332Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11.9997H28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.7602 17.3332H9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 25.3332H8C5.79067 25.3332 4 23.5425 4 21.3332V10.6665C4 8.45717 5.79067 6.6665 8 6.6665H24C26.2093 6.6665 28 8.45717 28 10.6665V21.3332C28 23.5425 26.2093 25.3332 24 25.3332Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11.9997H28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.7602 17.3332H9.3335" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 25.3332H8C5.79067 25.3332 4 23.5425 4 21.3332V10.6665C4 8.45717 5.79067 6.6665 8 6.6665H24C26.2093 6.6665 28 8.45717 28 10.6665V21.3332C28 23.5425 26.2093 25.3332 24 25.3332Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
};

export const IconCreditCard: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
