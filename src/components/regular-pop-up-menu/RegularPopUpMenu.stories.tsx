import styled from "styled-components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FC, useState } from "react";
import RegularPopUpMenu from '.';
import { IRegularPopUpMenu } from "./RegularPopUpMenu";
import { SimpleInput } from "../input-fields/simple-input/SimpleInput";
import { IconStarOutlined } from "../../icons";
import { RegularPopUpInput } from "./RegularPopUpInput";
import { RegularPopUpItem } from "./RegularPopUpItem";

const STooglePopUp = styled.h2`
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 70px;
`

interface IRegularPopUpMenuMemo extends IRegularPopUpMenu {
  listItems: Record<string, any>[];
}

const RegularPopUpMenuDemo: FC<IRegularPopUpMenuMemo> = ({listItems}) => {
  const [value, setValue] = useState("");
  const [toogleModal, setToogleModal] = useState(false);

  const onToggleModal: any = () => {
    setToogleModal(!toogleModal);
  } 
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
    {toogleModal ? (
      <RegularPopUpMenu title="Default" onClose={onToggleModal}>

          <RegularPopUpInput>
            <SimpleInput label='Label' placeholder="Default" onChange={onChange} value={value}/>
          </RegularPopUpInput>

          {listItems.map((item, ind) => {
            return (
              <RegularPopUpItem key={`menu-item-${ind}`}>
                <div> <IconStarOutlined/> <span>{item}</span> </div>
              </RegularPopUpItem>
          )})}
          
      </RegularPopUpMenu>
      ) : (
        <STooglePopUp onClick={() => onToggleModal()}>Click me!!</STooglePopUp>
    )}
    </>
  );
};

export default {
  title: "Components/Menus & Popovers/RegularPopUpmenu",
  component: RegularPopUpMenuDemo,

} as ComponentMeta<typeof RegularPopUpMenuDemo>;

const Template:  ComponentStory<typeof RegularPopUpMenuDemo>= (args) => <RegularPopUpMenuDemo  {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  listItems: ["Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default"],
};

export const With_Scrollbar = Template.bind({});
With_Scrollbar.args = {
  listItems: ["Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default"],
};
