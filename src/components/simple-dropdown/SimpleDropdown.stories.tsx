import React from "react";
import { IconStarOutlined } from "../../icons";
import { SimpleDropdown } from "./SimpleDropdown";

const dataSource = [
  {
    key: "title_label",
    title: "Default Title Eshkereeeeeeeeee! Wow! I am veeeeeery long indeed!",
  },
  {
    key: "icon_title",
    title: "Title and Icon - Wow! I am veeeeeery long indeed!",
    iconOrFlag: <IconStarOutlined size={20} />,
  },
  {
    key: "icon_title_label",
    title: "Label, Title and Icon - Wow! I am veeeeeery long indeed!",
    iconOrFlag: <IconStarOutlined size={20} />,
  },
];

export default {
  title: `Components/SimpleDropdown`,
  component: SimpleDropdown,
  argTypes: {},
};

const SimpleDropdownDemo: React.FC = () => <SimpleDropdown dataSource={dataSource} placeholder="select language" />;

export const Default: any = SimpleDropdownDemo.bind({});
Default.args = {};
