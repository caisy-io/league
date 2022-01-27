import React from "react";
import { ViewItem } from './ViewItem';
import { IconChevronRight } from '../../icons/IconChevronRight';
import { IconEmojis } from '../../icons/IconEmojis';
import { IconCog } from '../../icons/IconCog';
import { IconDragable } from '../../icons/IconDragable';

const Template = () => {
  return <ViewItem>
    <div>  <IconChevronRight size={20}></IconChevronRight>
      <IconEmojis size={16}></IconEmojis>
      Hover</div>
    <div>
      <IconCog size={16}></IconCog>
      <IconDragable size={16} />
    </div>
  </ViewItem>
}

export default {
  title: `Components/ViewItem`,
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
