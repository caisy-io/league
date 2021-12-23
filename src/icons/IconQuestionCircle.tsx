import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.00187" cy="5.99992" r="4.50187" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.84424 4.84216C4.96275 4.33139 5.42797 3.97724 5.95186 3.99898C6.5382 3.9665 7.04084 4.4133 7.07733 4.9994C7.07733 5.75166 6.00189 5.99981 6.00189 6.50002" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.06458 7.87559C6.06458 7.91012 6.03659 7.93812 6.00206 7.93812C5.96753 7.93812 5.93953 7.91012 5.93953 7.87559C5.93953 7.84106 5.96753 7.81307 6.00206 7.81307" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.00204 7.81308C6.03658 7.81308 6.06457 7.84107 6.06457 7.87561" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.7525" cy="8.00006" r="6.0025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.20898 6.45654C7.367 5.77551 7.98729 5.30331 8.68582 5.3323C9.46759 5.289 10.1378 5.88472 10.1864 6.66619C10.1864 7.66921 8.75251 8.00007 8.75251 8.66702" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.83579 10.5012C8.83579 10.5472 8.79846 10.5846 8.75242 10.5846C8.70637 10.5846 8.66905 10.5472 8.66905 10.5012C8.66905 10.4552 8.70637 10.4178 8.75242 10.4178" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.75273 10.4178C8.79877 10.4178 8.83609 10.4551 8.83609 10.5011" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.5026" cy="9.99995" r="7.50312" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.57324 8.07044C8.77076 7.21914 9.54612 6.62889 10.4193 6.66513C11.3965 6.611 12.2342 7.35566 12.2951 8.33249C12.2951 9.58627 10.5027 9.99985 10.5027 10.8335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.607 13.1263C10.607 13.1839 10.5603 13.2305 10.5028 13.2305C10.4452 13.2305 10.3986 13.1839 10.3986 13.1263C10.3986 13.0688 10.4452 13.0221 10.5028 13.0221" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5024 13.022C10.56 13.022 10.6066 13.0686 10.6066 13.1262" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.2523" cy="12.0001" r="9.00375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.93701 9.68482C10.174 8.66326 11.1045 7.95496 12.1523 7.99844C13.3249 7.93349 14.3302 8.82709 14.4032 9.99928C14.4032 11.5038 12.2523 12.0001 12.2523 13.0005" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3772 15.7517C12.3772 15.8207 12.3212 15.8767 12.2522 15.8767C12.1831 15.8767 12.1271 15.8207 12.1271 15.7517C12.1271 15.6826 12.1831 15.6266 12.2522 15.6266" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2521 15.6266C12.3212 15.6266 12.3772 15.6826 12.3772 15.7517" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.2523" cy="12.0001" r="9.00375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.93701 9.68482C10.174 8.66326 11.1045 7.95496 12.1523 7.99844C13.3249 7.93349 14.3302 8.82709 14.4032 9.99928C14.4032 11.5038 12.2523 12.0001 12.2523 13.0005" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3772 15.7517C12.3772 15.8207 12.3212 15.8767 12.2522 15.8767C12.1831 15.8767 12.1271 15.8207 12.1271 15.7517C12.1271 15.6826 12.1831 15.6266 12.2522 15.6266" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2521 15.6266C12.3212 15.6266 12.3772 15.6826 12.3772 15.7517" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.0026" cy="16.0001" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9155 12.9131C13.2316 11.551 14.4721 10.6066 15.8692 10.6646C17.4327 10.578 18.7731 11.7694 18.8704 13.3324C18.8704 15.3384 16.0026 16.0001 16.0026 17.334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.1691 21.0021C16.1691 21.0942 16.0945 21.1689 16.0024 21.1689C15.9103 21.1689 15.8357 21.0942 15.8357 21.0021C15.8357 20.9101 15.9103 20.8354 16.0024 20.8354" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0025 20.8355C16.0946 20.8355 16.1693 20.9102 16.1693 21.0023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.0026" cy="16.0001" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9155 12.9131C13.2316 11.551 14.4721 10.6066 15.8692 10.6646C17.4327 10.578 18.7731 11.7694 18.8704 13.3324C18.8704 15.3384 16.0026 16.0001 16.0026 17.334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.1691 21.0021C16.1691 21.0942 16.0945 21.1689 16.0024 21.1689C15.9103 21.1689 15.8357 21.0942 15.8357 21.0021C15.8357 20.9101 15.9103 20.8354 16.0024 20.8354" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0025 20.8355C16.0946 20.8355 16.1693 20.9102 16.1693 21.0023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.0026" cy="16.0001" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9155 12.9131C13.2316 11.551 14.4721 10.6066 15.8692 10.6646C17.4327 10.578 18.7731 11.7694 18.8704 13.3324C18.8704 15.3384 16.0026 16.0001 16.0026 17.334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.1691 21.0021C16.1691 21.0942 16.0945 21.1689 16.0024 21.1689C15.9103 21.1689 15.8357 21.0942 15.8357 21.0021C15.8357 20.9101 15.9103 20.8354 16.0024 20.8354" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0025 20.8355C16.0946 20.8355 16.1693 20.9102 16.1693 21.0023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16.0026" cy="16.0001" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9155 12.9131C13.2316 11.551 14.4721 10.6066 15.8692 10.6646C17.4327 10.578 18.7731 11.7694 18.8704 13.3324C18.8704 15.3384 16.0026 16.0001 16.0026 17.334" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.1691 21.0021C16.1691 21.0942 16.0945 21.1689 16.0024 21.1689C15.9103 21.1689 15.8357 21.0942 15.8357 21.0021C15.8357 20.9101 15.9103 20.8354 16.0024 20.8354" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0025 20.8355C16.0946 20.8355 16.1693 20.9102 16.1693 21.0023" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
}

export const IconQuestionCircle: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
