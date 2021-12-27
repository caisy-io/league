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
  listItemText: {
    name: "itemText",
    description: "Preview of the icon",
    control: { type: "text" },
  },
  labelText: {
    name: "itemText",
    description: "Preview of the icon",
    control: { type: "text" },
  },
};

function ListStatusItemDemo({ listItemText, itemIcon, labelText }) {
  return <SListStatusItemWrapper>
    <ListStatusItem listItemText={listItemText} itemIcon={itemIcon} labelText={labelText}>
    </ListStatusItem>
  </SListStatusItemWrapper>
}

const Template = (args) => < ListStatusItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  listItemText: "Default",
  itemIcon: <IconStarOutlined size={16} />,
  labelText: "Default"
};
