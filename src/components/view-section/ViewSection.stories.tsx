import React from "react";
import { ViewSection } from './ViewSection';
import { IconChevronRight } from '../../icons/IconChevronRight';
import { IconEmojis } from '../../icons/IconEmojis';
import { IconCog } from '../../icons/IconCog';
import { IconDragable } from '../../icons/IconDragable';

export default {
  title: `Components/ViewSection`,
  component: ViewSectionDemo,
  argTypes: {
    boolean: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    text: {
      description: "An example text argument type",
      control: { type: "text" },
    },
    select: {
      description: "An example select argument type",
      options: ["option1", "option2", "option2"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "option1",
        },
      },
    },
  },
};

function ViewSectionDemo({ boolean, text, select }) {
  return <ViewSection>
    <div>  <IconChevronRight size={20}></IconChevronRight>
      <IconEmojis size={16}></IconEmojis>
      Hover</div>
    <div>
      <IconCog size={16}></IconCog>
      <IconDragable size={16} />
    </div>
  </ViewSection>
}

const Template = (args) => < ViewSectionDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
