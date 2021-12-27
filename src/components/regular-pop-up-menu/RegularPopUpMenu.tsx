import React, { FC, ReactNode } from 'react';
import { SRegularPopUpMenu } from "./styles/SRegularPopUpMenu";

export interface IRegularPopUpMenu {
  children: ReactNode
}

const RegularPopUpMenu: FC<IRegularPopUpMenu> = (props) => {
  return (
    <SRegularPopUpMenu>
      {props.children}
    </SRegularPopUpMenu>
  )
}

export default RegularPopUpMenu;