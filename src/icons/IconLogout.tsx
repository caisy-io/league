import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M8 7.997h6.002M11.82 5.814l2.183 2.183M11.82 10.18l2.183-2.183M11.668 3.255a6 6 0 100 9.49"
      ></path>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M8 7.997h6.002M11.82 5.814l2.183 2.183M11.82 10.18l2.183-2.183M11.668 3.255a6 6 0 100 9.49"
      ></path>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 9.996h7.503M14.774 7.268l2.729 2.728M14.774 12.725l2.729-2.729M14.585 4.069a7.5 7.5 0 100 11.862"
      ></path>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 11.996h9.004M17.73 8.722l3.274 3.274M17.73 15.27l3.274-3.274M17.502 4.883a9 9 0 100 14.234"
      ></path>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 11.996h9.004M17.73 8.722l3.274 3.274M17.73 15.27l3.274-3.274M17.502 4.883a9 9 0 100 14.234"
      ></path>    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M16 15.994h12.005M23.64 11.628l4.365 4.366M23.64 20.36l4.365-4.366M23.336 6.51a12 12 0 100 18.98"
      ></path>    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M16 15.994h12.005M23.64 11.628l4.365 4.366M23.64 20.36l4.365-4.366M23.336 6.51a12 12 0 100 18.98"
      ></path>    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M16 15.994h12.005M23.64 11.628l4.365 4.366M23.64 20.36l4.365-4.366M23.336 6.51a12 12 0 100 18.98"
      ></path>    </SIconBase>

  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M16 15.994h12.005M23.64 11.628l4.365 4.366M23.64 20.36l4.365-4.366M23.336 6.51a12 12 0 100 18.98"
      ></path>    </SIconBase>
  )
}

export const IconLogout: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
