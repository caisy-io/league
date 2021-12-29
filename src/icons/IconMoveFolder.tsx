import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10L5.33333 11.3333L4 12.6667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 11.3333H5.33333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33333 13.3333H12.6667C13.403 13.3333 14 12.7363 14 12V5.95996C14 5.22358 13.403 4.62663 12.6667 4.62663H8.35276C8.13209 4.62663 7.92571 4.51743 7.80157 4.33498L6.86491 2.95827C6.74077 2.77582 6.53438 2.66662 6.31369 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V7.99996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10L5.33333 11.3333L4 12.6667" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 11.3333H5.33333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33333 13.3333H12.6667C13.403 13.3333 14 12.7363 14 12V5.95996C14 5.22358 13.403 4.62663 12.6667 4.62663H8.35276C8.13209 4.62663 7.92571 4.51743 7.80157 4.33498L6.86491 2.95827C6.74077 2.77582 6.53438 2.66662 6.31369 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V7.99996" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12.5L6.66667 14.1667L5 15.8333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 14.1667H6.66667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.16667 16.6667H15.8333C16.7538 16.6667 17.5 15.9205 17.5 15V7.45004C17.5 6.52957 16.7538 5.78337 15.8333 5.78337H10.441C10.1651 5.78337 9.90714 5.64688 9.75197 5.41882L8.58113 3.69793C8.42596 3.46986 8.16797 3.33336 7.89212 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 15L8 17L6 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 17H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 20H19C20.1046 20 21 19.1046 21 18V8.94C21 7.83543 20.1046 6.94 19 6.94H12.5291C12.1981 6.94 11.8886 6.7762 11.7024 6.50253L10.2974 4.43747C10.1111 4.16379 9.80157 3.99999 9.47054 4H5C3.89543 4 3 4.89543 3 6V12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 15L8 17L6 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 17H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 20H19C20.1046 20 21 19.1046 21 18V8.94C21 7.83543 20.1046 6.94 19 6.94H12.5291C12.1981 6.94 11.8886 6.7762 11.7024 6.50253L10.2974 4.43747C10.1111 4.16379 9.80157 3.99999 9.47054 4H5C3.89543 4 3 4.89543 3 6V12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20L10.6667 22.6667L8 25.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 22.6667H10.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6667 26.6667H25.3333C26.8061 26.6667 28 25.4728 28 24V11.92C28 10.4473 26.8061 9.25337 25.3333 9.25337H16.7055C16.2642 9.25338 15.8514 9.03498 15.6031 8.67008L13.7298 5.91667C13.4815 5.55175 13.0688 5.33335 12.6274 5.33337H6.66667C5.19391 5.33337 4 6.52728 4 8.00004V16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20L10.6667 22.6667L8 25.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 22.6667H10.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6667 26.6667H25.3333C26.8061 26.6667 28 25.4728 28 24V11.92C28 10.4473 26.8061 9.25337 25.3333 9.25337H16.7055C16.2642 9.25338 15.8514 9.03498 15.6031 8.67008L13.7298 5.91667C13.4815 5.55175 13.0688 5.33335 12.6274 5.33337H6.66667C5.19391 5.33337 4 6.52728 4 8.00004V16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20L10.6667 22.6667L8 25.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 22.6667H10.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6667 26.6667H25.3333C26.8061 26.6667 28 25.4728 28 24V11.92C28 10.4473 26.8061 9.25337 25.3333 9.25337H16.7055C16.2642 9.25338 15.8514 9.03498 15.6031 8.67008L13.7298 5.91667C13.4815 5.55175 13.0688 5.33335 12.6274 5.33337H6.66667C5.19391 5.33337 4 6.52728 4 8.00004V16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20L10.6667 22.6667L8 25.3333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 22.6667H10.6667" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6667 26.6667H25.3333C26.8061 26.6667 28 25.4728 28 24V11.92C28 10.4473 26.8061 9.25337 25.3333 9.25337H16.7055C16.2642 9.25338 15.8514 9.03498 15.6031 8.67008L13.7298 5.91667C13.4815 5.55175 13.0688 5.33335 12.6274 5.33337H6.66667C5.19391 5.33337 4 6.52728 4 8.00004V16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconMoveFolder: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
