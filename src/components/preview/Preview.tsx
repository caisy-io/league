import React, { FC, ReactNode } from "react";
import { SPreview } from "./styles/SPreview";

export interface IPreview {
  flag?: ReactNode;
  icon?: ReactNode;
  image?: ReactNode;
  text?: string;
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48;
  styleOverwrite?: any;
}

export const Preview: FC<IPreview> = ({ flag, icon, image, text, size, styleOverwrite }) => {
  return (
    <SPreview styleOverwrite={styleOverwrite} size={size} isFlag={flag && true}>
      {flag}
      {icon}
      {image}
      {text}
    </SPreview>
  )
}
