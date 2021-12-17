import React from "react";
import { ListStatusItem } from './ListStatusItem';
import { SListStatusItemWrapper } from './styles/SListStatusItemWrapper';
import { IconStarOutlined } from "../../icons";

export default {
  title: `Components/List Items/ListStatusItem`,
  component: ListStatusItemDemo,
  itemIcon: {
    description: "Preview of the icon",
    control: { type: "ReactNode" },
  },
  itemText: {
    name: "itemText",
    description: "Preview of the icon",
    control: { type: "text" },
  },
};

function ListStatusItemDemo({ itemText, itemIcon }) {
  return <SListStatusItemWrapper>
    <ListStatusItem itemText={itemText} itemIcon={itemIcon}>
    </ListStatusItem>
  </SListStatusItemWrapper>
}

const Template = (args) => < ListStatusItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemText: "Default",
  itemIcon: <IconStarOutlined size={20} />,
};
