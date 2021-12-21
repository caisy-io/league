import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3333 13.8866L11.8267 12.3799" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.17317 12.3799L2.6665 13.8866" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7711 4.89641C13.8537 6.979 13.8537 10.3555 11.7711 12.4381C9.68856 14.5207 6.31201 14.5207 4.22942 12.4381C2.14683 10.3555 2.14683 6.979 4.22942 4.89641C6.31201 2.81383 9.68855 2.81383 11.7711 4.89641" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.2998 3.87336L4.2998 2.19336" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7065 3.8802L11.7065 2.2002" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.8335 6.28809V9.04475L10.0002 10.3661" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3333 13.8866L11.8267 12.3799" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.17317 12.3799L2.6665 13.8866" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7711 4.89641C13.8537 6.979 13.8537 10.3555 11.7711 12.4381C9.68856 14.5207 6.31201 14.5207 4.22942 12.4381C2.14683 10.3555 2.14683 6.979 4.22942 4.89641C6.31201 2.81383 9.68855 2.81383 11.7711 4.89641" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.2998 3.87336L4.2998 2.19336" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7065 3.8802L11.7065 2.2002" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.8335 6.28809V9.04475L10.0002 10.3661" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6665 17.3584L14.7832 15.4751" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.21683 15.4751L3.3335 17.3584" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.7141 6.12039C17.3173 8.72363 17.3173 12.9443 14.7141 15.5475C12.1108 18.1508 7.89014 18.1508 5.2869 15.5475C2.68366 12.9443 2.68366 8.72363 5.2869 6.12039C7.89013 3.51716 12.1108 3.51716 14.7141 6.12039" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.875 4.8417L5.375 2.7417" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.1333 4.85L14.6333 2.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.7915 7.85986V11.3057L12.4998 12.9574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0002 20.8298L18.7402 18.5698" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.26 18.5698L5 20.8298" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6565 7.34486C21.7804 10.4687 21.7804 15.5336 18.6565 18.6574C15.5326 21.7813 10.4678 21.7813 7.34389 18.6574C4.22001 15.5336 4.22001 10.4688 7.34389 7.34486C10.4678 4.22098 15.5326 4.22098 18.6565 7.34486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.4502 5.81004L7.4502 3.29004" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.5601 5.8198L18.5601 3.2998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.75 9.43213V13.5671L16 15.5491" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>         
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.0002 20.8298L18.7402 18.5698" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.26 18.5698L5 20.8298" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6565 7.34486C21.7804 10.4687 21.7804 15.5336 18.6565 18.6574C15.5326 21.7813 10.4678 21.7813 7.34389 18.6574C4.22001 15.5336 4.22001 10.4688 7.34389 7.34486C10.4678 4.22098 15.5326 4.22098 18.6565 7.34486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.4502 5.81004L7.4502 3.29004" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.5601 5.8198L18.5601 3.2998" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.75 9.43213V13.5671L16 15.5491" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>         
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6667 27.7731L23.6533 24.7598" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.34683 24.7598L5.3335 27.7731" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.5423 9.79282C27.7075 13.958 27.7075 20.7111 23.5423 24.8763C19.3771 29.0414 12.624 29.0414 8.45884 24.8763C4.29367 20.7111 4.29367 13.958 8.45884 9.79282C12.624 5.62765 19.3771 5.62765 23.5423 9.79282" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.6001 7.74672L8.6001 4.38672" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.4136 7.7599L23.4136 4.3999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6665 12.5762V18.0895L19.9998 20.7322" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6667 27.7731L23.6533 24.7598" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.34683 24.7598L5.3335 27.7731" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.5423 9.79282C27.7075 13.958 27.7075 20.7111 23.5423 24.8763C19.3771 29.0414 12.624 29.0414 8.45884 24.8763C4.29367 20.7111 4.29367 13.958 8.45884 9.79282C12.624 5.62765 19.3771 5.62765 23.5423 9.79282" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.6001 7.74672L8.6001 4.38672" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.4136 7.7599L23.4136 4.3999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6665 12.5762V18.0895L19.9998 20.7322" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6667 27.7731L23.6533 24.7598" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.34683 24.7598L5.3335 27.7731" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.5423 9.79282C27.7075 13.958 27.7075 20.7111 23.5423 24.8763C19.3771 29.0414 12.624 29.0414 8.45884 24.8763C4.29367 20.7111 4.29367 13.958 8.45884 9.79282C12.624 5.62765 19.3771 5.62765 23.5423 9.79282" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.6001 7.74672L8.6001 4.38672" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.4136 7.7599L23.4136 4.3999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6665 12.5762V18.0895L19.9998 20.7322" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.6667 27.7731L23.6533 24.7598" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.34683 24.7598L5.3335 27.7731" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.5423 9.79282C27.7075 13.958 27.7075 20.7111 23.5423 24.8763C19.3771 29.0414 12.624 29.0414 8.45884 24.8763C4.29367 20.7111 4.29367 13.958 8.45884 9.79282C12.624 5.62765 19.3771 5.62765 23.5423 9.79282" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.6001 7.74672L8.6001 4.38672" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.4136 7.7599L23.4136 4.3999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.6665 12.5762V18.0895L19.9998 20.7322" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconAlarmClock: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
