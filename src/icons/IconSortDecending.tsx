import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0014 14.0025V2.66443" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.99756 2.66453H8.00006" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33154 5.33225H8.00015" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66504 8.0001H7.99976" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.59912 10.6678H8.00012" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0015 14.0026L13.6688 12.3352" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.3345 12.3352L12.0018 14.0026" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0014 14.0025V2.66443" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.99756 2.66453H8.00006" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.33154 5.33225H8.00015" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.66504 8.0001H7.99976" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.59912 10.6678H8.00012" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0015 14.0026L13.6688 12.3352" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.3345 12.3352L12.0018 14.0026" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0023 17.5031V3.33057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.49707 3.33054H10.0002" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.16455 6.66525H10.0003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83154 9.99997H9.99995" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.99902 13.3347H10.0003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0024 17.5031L17.0866 15.4189" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.918 15.4189L15.0022 17.5031" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0026 21.0038V3.9967" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.99658 3.99667H12.0003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.99707 7.99838H12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.99805 12H12.0001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.39844 16.0017H11.9999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.0024 21.0037L20.5035 18.5027" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5015 18.5027L18.0025 21.0037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.0026 21.0038V3.9967" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.99658 3.99667H12.0003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.99707 7.99838H12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.99805 12H12.0001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.39844 16.0017H11.9999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.0024 21.0037L20.5035 18.5027" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5015 18.5027L18.0025 21.0037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.0034 28.005V5.32886" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99512 5.32881H16.0001" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6626 10.6644H15.9998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 16H16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.1978 21.3355H15.9998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.0029 28.0049L27.3377 24.6702" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6685 24.6702L24.0032 28.0049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.0034 28.005V5.32886" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99512 5.32881H16.0001" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6626 10.6644H15.9998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 16H16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.1978 21.3355H15.9998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.0029 28.0049L27.3377 24.6702" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6685 24.6702L24.0032 28.0049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.0034 28.005V5.32886" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99512 5.32881H16.0001" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6626 10.6644H15.9998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 16H16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.1978 21.3355H15.9998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.0029 28.0049L27.3377 24.6702" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6685 24.6702L24.0032 28.0049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.0034 28.005V5.32886" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99512 5.32881H16.0001" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.6626 10.6644H15.9998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33057 16H16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.1978 21.3355H15.9998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24.0029 28.0049L27.3377 24.6702" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6685 24.6702L24.0032 28.0049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconSortDecending: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
