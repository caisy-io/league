import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6668 12.6667C14.6668 13.0203 14.5264 13.3594 14.2763 13.6095C14.0263 13.8595 13.6871 14 13.3335 14H2.66683C2.31321 14 1.97407 13.8595 1.72402 13.6095C1.47397 13.3594 1.3335 13.0203 1.3335 12.6667V3.33333C1.3335 2.97971 1.47397 2.64057 1.72402 2.39052C1.97407 2.14048 2.31321 2 2.66683 2H6.00016L7.3335 4H13.3335C13.6871 4 14.0263 4.14048 14.2763 4.39052C14.5264 4.64057 14.6668 4.97971 14.6668 5.33333V12.6667Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 7.3335V11.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 9.3335H10" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6668 12.6667C14.6668 13.0203 14.5264 13.3594 14.2763 13.6095C14.0263 13.8595 13.6871 14 13.3335 14H2.66683C2.31321 14 1.97407 13.8595 1.72402 13.6095C1.47397 13.3594 1.3335 13.0203 1.3335 12.6667V3.33333C1.3335 2.97971 1.47397 2.64057 1.72402 2.39052C1.97407 2.14048 2.31321 2 2.66683 2H6.00016L7.3335 4H13.3335C13.6871 4 14.0263 4.14048 14.2763 4.39052C14.5264 4.64057 14.6668 4.97971 14.6668 5.33333V12.6667Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 7.3335V11.3335" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 9.3335H10" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.3332 15.8333C18.3332 16.2754 18.1576 16.6993 17.845 17.0118C17.5325 17.3244 17.1085 17.5 16.6665 17.5H3.33317C2.89114 17.5 2.46722 17.3244 2.15466 17.0118C1.8421 16.6993 1.6665 16.2754 1.6665 15.8333V4.16667C1.6665 3.72464 1.8421 3.30072 2.15466 2.98816C2.46722 2.67559 2.89114 2.5 3.33317 2.5H7.49984L9.1665 5H16.6665C17.1085 5 17.5325 5.17559 17.845 5.48816C18.1576 5.80072 18.3332 6.22464 18.3332 6.66667V15.8333Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 9.1665V14.1665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 11.6665H12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>     
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14H15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>        
  ),
  32: (
    <SIconBase width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 25.3333C30 26.0406 29.6945 26.7189 29.1506 27.219C28.6068 27.719 27.8691 28 27.1 28H3.9C3.13087 28 2.39325 27.719 1.84939 27.219C1.30553 26.7189 1 26.0406 1 25.3333V6.66667C1 5.95942 1.30553 5.28115 1.84939 4.78105C2.39325 4.28095 3.13087 4 3.9 4H11.15L14.05 8H27.1C27.8691 8 28.6068 8.28095 29.1506 8.78105C29.6945 9.28115 30 9.95942 30 10.6667V25.3333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 14.6665V22.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 18.6665H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 25.3333C30 26.0406 29.6945 26.7189 29.1506 27.219C28.6068 27.719 27.8691 28 27.1 28H3.9C3.13087 28 2.39325 27.719 1.84939 27.219C1.30553 26.7189 1 26.0406 1 25.3333V6.66667C1 5.95942 1.30553 5.28115 1.84939 4.78105C2.39325 4.28095 3.13087 4 3.9 4H11.15L14.05 8H27.1C27.8691 8 28.6068 8.28095 29.1506 8.78105C29.6945 9.28115 30 9.95942 30 10.6667V25.3333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 14.6665V22.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 18.6665H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 25.3333C30 26.0406 29.6945 26.7189 29.1506 27.219C28.6068 27.719 27.8691 28 27.1 28H3.9C3.13087 28 2.39325 27.719 1.84939 27.219C1.30553 26.7189 1 26.0406 1 25.3333V6.66667C1 5.95942 1.30553 5.28115 1.84939 4.78105C2.39325 4.28095 3.13087 4 3.9 4H11.15L14.05 8H27.1C27.8691 8 28.6068 8.28095 29.1506 8.78105C29.6945 9.28115 30 9.95942 30 10.6667V25.3333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 14.6665V22.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 18.6665H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 25.3333C30 26.0406 29.6945 26.7189 29.1506 27.219C28.6068 27.719 27.8691 28 27.1 28H3.9C3.13087 28 2.39325 27.719 1.84939 27.219C1.30553 26.7189 1 26.0406 1 25.3333V6.66667C1 5.95942 1.30553 5.28115 1.84939 4.78105C2.39325 4.28095 3.13087 4 3.9 4H11.15L14.05 8H27.1C27.8691 8 28.6068 8.28095 29.1506 8.78105C29.6945 9.28115 30 9.95942 30 10.6667V25.3333Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 14.6665V22.6665" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 18.6665H21" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconFolderAdd: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
