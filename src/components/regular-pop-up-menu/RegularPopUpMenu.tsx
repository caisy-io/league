import React, { FC } from 'react';
import { ModalHeader } from "../modal";
import { ModalHeaderTitle } from "../modal";
import { SRegularPopUpMenu } from "./styles/SRegularPopUpMenu";
import { SPopUpHeader } from "./styles/SPopUpHeader";
import { SPopUpContent } from "./styles/SPopUpContent";
import { Scrollbar } from '../scrollbar';

export interface IRegularPopUpMenu {
  onClose?: () => any;
  title?: string;
}

const RegularPopUpMenu: FC<IRegularPopUpMenu> = ({onClose, title, children}) => {
  return (
    <SRegularPopUpMenu>
     
      <SPopUpHeader>
        <ModalHeader onClose={onClose}>
          <ModalHeaderTitle>{title}</ModalHeaderTitle>
        </ModalHeader>
      </SPopUpHeader>
     
      <SPopUpContent>
        <Scrollbar>
          {children}
        </Scrollbar>
      </SPopUpContent> 

    </SRegularPopUpMenu>
  )
}

export default RegularPopUpMenu;
