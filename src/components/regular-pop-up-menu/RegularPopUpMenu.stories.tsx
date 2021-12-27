import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC, useState } from "react";
import RegularPopUpMenu from '.';
import { IRegularPopUpMenu } from "./RegularPopUpMenu";
import { ModalHeader } from "..";
import { ModalHeaderTitle } from "..";
import { SimpleInput } from "../input-fields/simple-input/SimpleInput";
import { MenuListItem } from "../menu-list-item/MenuListItem";
import { IconStarOutlined } from "../..";
import { SPopUpHeader } from "./styles/SPopUpHeader";
import { SPopUpInput } from "./styles/SPopUpInput";
import { SPopUpItem } from "./styles/SPopUpItem";
import { SPopUpContent } from './styles/SPopUpContent';

const STooglePopUp = styled.h2`
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 70px;
`

interface IRegularPopUpMenuMemo extends IRegularPopUpMenu {
  listItems: Array<string>;
}

const RegularPopUpMenuDemo: FC<IRegularPopUpMenuMemo> = ({listItems}) => {
  const [value, setValue] = useState("");
  const [toogleModal, setToogleModal] = useState(false);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
    {toogleModal ? (
        <RegularPopUpMenu>
          <SPopUpHeader>
            <ModalHeader onClose={() => setToogleModal(false)}>
              <ModalHeaderTitle>Label</ModalHeaderTitle>
            </ModalHeader>
          </SPopUpHeader>

          <SPopUpContent>
            <SPopUpInput>
              <SimpleInput label='Label' placeholder="Default" onChange={onChange} value={value}/>
            </SPopUpInput>

            {listItems.map((item, ind) =>
              <SPopUpItem key={`${ind}-menu-item`}>
                <MenuListItem >
                  <div> <IconStarOutlined />  <span>{`${item} ${ind + 1}`}</span>  </div>
                </MenuListItem>
              </SPopUpItem>
            )}
          </SPopUpContent> 
        </RegularPopUpMenu>
      ) : (
        <STooglePopUp onClick={() => setToogleModal(true)}>Click me!!</STooglePopUp>
    )}
    </>
  );
};

export default {
  title: "Components/RegularPopUpmenu/PopUp",
  component: RegularPopUpMenuDemo,

} as ComponentMeta<typeof RegularPopUpMenuDemo>;

const Template:  ComponentStory<typeof RegularPopUpMenuDemo>= (args) => <RegularPopUpMenuDemo  {...args} />;

export const Regular_Pop_Up_Menu_with_Scroll = Template.bind({});
Regular_Pop_Up_Menu_with_Scroll.args = {
  listItems: ["Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default"],
};

export const Regular_Pop_Up_Menu_without_Scroll = Template.bind({});
Regular_Pop_Up_Menu_without_Scroll.args = {
  listItems: ["Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default"],
};
