import React, { FC, ReactNode } from "react";
import { SPreview } from "./styles/SPreview"

interface IPreview {
  children: ReactNode;
}

const Preview: FC<IPreview> = props => {
  return (
    <SPreview>
      {props.children}
    </SPreview>
  )
}

export default Preview;
