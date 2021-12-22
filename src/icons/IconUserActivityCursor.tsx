import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M11.0664 10.3996H7.7264L5.5872 12.5204C4.9992 13.1036 4 12.6868 4 11.8588V3.33318C4 2.50358 5.0032 2.08758 5.5904 2.67478L11.7256 8.80998C12.312 9.39638 11.8968 10.3996 11.0664 10.3996Z"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M11.0664 10.3996H7.7264L5.5872 12.5204C4.9992 13.1036 4 12.6868 4 11.8588V3.33318C4 2.50358 5.0032 2.08758 5.5904 2.67478L11.7256 8.80998C12.312 9.39638 11.8968 10.3996 11.0664 10.3996Z"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M14.1665 12.9996H9.9915L7.3175 15.6506C6.5825 16.3796 5.3335 15.8586 5.3335 14.8236V4.1666C5.3335 3.1296 6.5875 2.6096 7.3215 3.3436L14.9905 11.0126C15.7235 11.7456 15.2045 12.9996 14.1665 12.9996Z"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M17.2661 15.5996H12.2561L9.0473 18.7808C8.1653 19.6556 6.6665 19.0304 6.6665 17.7884V5.00001C6.6665 3.75561 8.1713 3.13161 9.0521 4.01241L18.2549 13.2152C19.1345 14.0948 18.5117 15.5996 17.2661 15.5996Z"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M17.2661 15.5996H12.2561L9.0473 18.7808C8.1653 19.6556 6.6665 19.0304 6.6665 17.7884V5.00001C6.6665 3.75561 8.1713 3.13161 9.0521 4.01241L18.2549 13.2152C19.1345 14.0948 18.5117 15.5996 17.2661 15.5996Z"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M22.1328 20.7994H15.4528L11.1744 25.041C9.9984 26.2074 8 25.3738 8 23.7178V6.6666C8 5.0074 10.0064 4.1754 11.1808 5.3498L23.4512 17.6202C24.624 18.793 23.7936 20.7994 22.1328 20.7994Z"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M22.1328 20.7994H15.4528L11.1744 25.041C9.9984 26.2074 8 25.3738 8 23.7178V6.6666C8 5.0074 10.0064 4.1754 11.1808 5.3498L23.4512 17.6202C24.624 18.793 23.7936 20.7994 22.1328 20.7994Z"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M22.1328 20.7994H15.4528L11.1744 25.041C9.9984 26.2074 8 25.3738 8 23.7178V6.6666C8 5.0074 10.0064 4.1754 11.1808 5.3498L23.4512 17.6202C24.624 18.793 23.7936 20.7994 22.1328 20.7994Z"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M22.1328 20.7994H15.4528L11.1744 25.041C9.9984 26.2074 8 25.3738 8 23.7178V6.6666C8 5.0074 10.0064 4.1754 11.1808 5.3498L23.4512 17.6202C24.624 18.793 23.7936 20.7994 22.1328 20.7994Z"/>
    </SIconBase>
  ),
};

export const IconUserActivityCursor: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
