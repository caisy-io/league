import React from "react";
import {IconBulletList, IconTemplateLayout} from "../../icons";
import {MicroTabSwitch} from './MicroTabSwitch';
import {MicroTabSwitchItem} from "./MicroTabSwitchItem";


export default {
  title: `Components/MicroTabSwitch`,
  component: MicroTabSwitch,
  argTypes: {
    initialTabIndex: {
      description: "Set initial index of tab",
      control: {type: "number"},
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
    getCurrentIndex: {
      description: "Method to get index value of current tab",
    },
    onTabClick: {
      description: "Method run when you chick on the tab",
    },
    
  },
};

const Template = ({initialTabIndex}) =>
  <MicroTabSwitch initialTabIndex={initialTabIndex}>
    <MicroTabSwitchItem>
      <IconBulletList size={16}/>
    </MicroTabSwitchItem>
    <MicroTabSwitchItem>
      <IconTemplateLayout size={16}/>
    </MicroTabSwitchItem>
  </MicroTabSwitch>
;

export const Default: any = Template.bind({});
Default.args = {
  initialTabIndex: 0,
};

const IconsWithLabelComp = () =>
  <MicroTabSwitch>
    <MicroTabSwitchItem>
      <IconBulletList size={16}/>
      list
    </MicroTabSwitchItem>
    <MicroTabSwitchItem>
      <IconTemplateLayout size={16}/>
      grid
    </MicroTabSwitchItem>
  </MicroTabSwitch>
;
export const IconsWithLabel: any = IconsWithLabelComp.bind({});
IconsWithLabel.args = {};
