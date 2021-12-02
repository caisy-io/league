import React, { FC, ReactNode } from "react";
import { SPreview } from "./styles/SPreview"

interface IPreview {
  flag?: ReactNode;
  icon?: ReactNode;
  image?: ReactNode;
  text?: ReactNode;
  size?: 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48;
}

const Preview: FC<IPreview> = ({ flag, icon, image, text, size }) => {
  return (
    <SPreview size={size} isFlag={flag && true}>
      {flag}
      {icon}
      {image}
      {text}
    </SPreview>
  )
}

export default Preview;
