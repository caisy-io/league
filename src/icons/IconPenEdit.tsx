import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.251 11.102l8.851-8.851a.857.857 0 011.211 0l1.437 1.436a.857.857 0 010 1.212l-8.852 8.85a.853.853 0 01-.605.251H2v-2.293c0-.227.09-.445.251-.605zM9.283 4.451l2.265 2.265"></path>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.251 11.102l8.851-8.851a.857.857 0 011.211 0l1.437 1.436a.857.857 0 010 1.212l-8.852 8.85a.853.853 0 01-.605.251H2v-2.293c0-.227.09-.445.251-.605zM9.283 4.451l2.265 2.265"></path>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.251 11.102l8.851-8.851a.857.857 0 011.211 0l1.437 1.436a.857.857 0 010 1.212l-8.852 8.85a.853.853 0 01-.605.251H2v-2.293c0-.227.09-.445.251-.605zM9.283 4.451l2.265 2.265"></path>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.251 11.102l8.851-8.851a.857.857 0 011.211 0l1.437 1.436a.857.857 0 010 1.212l-8.852 8.85a.853.853 0 01-.605.251H2v-2.293c0-.227.09-.445.251-.605zM9.283 4.451l2.265 2.265"></path>
    </SIconBase>
  ),
};

export const IconPenEdit: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
