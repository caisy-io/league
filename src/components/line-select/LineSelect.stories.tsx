import React from "react";
import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { LineSelect } from "./LineSelect";
import { LineSelectItem } from "./LineSelectItem";
import { IconEmojis } from "../../icons/IconEmojis";

export default {
  title: "Components/Forms/LineSelect",
  component: SimpleInputDropdownDemo,
  argTypes: {
    required: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
    },
    error: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
    },
    translationBadge: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
    },
  },
};

const dataSource = [
  {
    key: "title_label",
    title: "Default",
    label: "Label"
  },
  {
    key: "icon_title",
    title: "Title and Icon",
    icon: <IconStarOutlined size={20}></IconStarOutlined>,
  },
  {
    key: "icon_title_label",
    title: "Label, Title and Icon",
    label: "Label",
    icon: <IconStarOutlined size={20}></IconStarOutlined>,
  },
];

function SimpleInputDropdownDemo({ error, required }) {
  const [selectValue, setSelectValue] = React.useState(null);
  return <LineSelect
    error={error}
    required={required}
    dataSource={dataSource}
    placeholder="Select an option.."
    value={selectValue}
    onSelectValue={(e) => setSelectValue(e)}
  >
    <LineSelectItem value={10}><IconEmojis />Ten</LineSelectItem>
    <LineSelectItem value={20}><IconEmojis />Twenty</LineSelectItem>
    <LineSelectItem value={30}><IconEmojis />Thirty</LineSelectItem>
  </LineSelect>
}

const Template = (args) => <SimpleInputDropdownDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  required: false,
};