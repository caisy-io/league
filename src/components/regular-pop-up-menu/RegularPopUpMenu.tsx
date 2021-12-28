import React, { FC, ReactNode } from 'react';
import { ModalHeader } from "..";
import { ModalHeaderTitle } from "..";
import { MenuListItem } from "../menu-list-item/MenuListItem";
import { SimpleInput } from "../input-fields/simple-input/SimpleInput";
import { SRegularPopUpMenu } from "./styles/SRegularPopUpMenu";
import { SPopUpHeader } from "./styles/SPopUpHeader";
import { SPopUpContent } from "./styles/SPopUpContent";
import { SPopUpInput } from "./styles/SPopUpInput";
import { SPopUpItem } from "./styles/SPopUpItem";

export interface IRegularPopUpMenu {
  onClose?: () => any;
  headerLabel?: string;
  menuItemsList?: Array<ReactNode>;
  onChange?: any;
  inputValue?: any;
  inputLabel?: string;
  placeholder?: string;
  icon?: ReactNode; 
}

const RegularPopUpMenu: FC<IRegularPopUpMenu> = ({onClose, headerLabel, onChange, inputValue, menuItemsList, inputLabel, placeholder, icon }) => {
  return (
    <SRegularPopUpMenu>
      <SPopUpHeader>
        <ModalHeader onClose={onClose}>
          <ModalHeaderTitle>{headerLabel}</ModalHeaderTitle>
        </ModalHeader>
      </SPopUpHeader>

      <SPopUpContent>
        <SPopUpInput>
          <SimpleInput label={inputLabel} placeholder={placeholder} onChange={onChange} value={inputValue}/>
        </SPopUpInput>

        {menuItemsList?.map((item, ind) =>
          <SPopUpItem key={`${ind}-menu-item`}>
            <MenuListItem >
              <div> {icon && icon} <span>{`${item} ${ind + 1}`}</span> </div>
            </MenuListItem>
          </SPopUpItem>
        )}
      </SPopUpContent> 
    </SRegularPopUpMenu>
  )
}

export default RegularPopUpMenu;