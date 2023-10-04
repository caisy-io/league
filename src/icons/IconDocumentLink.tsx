import React, {FC} from "react";
import {SIconBase} from "./styles/SIconBase";
import {IIconSize} from "../utils/types";

const IconSize = {
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3327 17.5H14.5827C15.7333 17.5 16.666 16.5673 16.666 15.4167V6.97639C16.666 6.31335 16.4026 5.67747 15.9338 5.20862L13.9574 3.23223C13.4885 2.76339 12.8527 2.5 12.1896 2.5H6.24935C5.09876 2.5 4.16602 3.43274 4.16602 4.58333V9.16667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.33398 12.5C9.71434 12.5009 10.8331 13.6196 10.834 15V15C10.8331 16.3804 9.71434 17.4991 8.33398 17.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83398 17.5C4.45362 17.4991 3.33483 16.3804 3.33398 15H3.33398C3.33483 13.6196 4.45362 12.5009 5.83398 12.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.33398 14.9997H5.83398" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.647 6.66651H13.75C13.0596 6.66651 12.5 6.10687 12.5 5.41651V2.51953" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </SIconBase>,
}

export const IconDocumentLink: FC<IIconSize> = ({size = 20}) => IconSize[size];
