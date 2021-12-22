import React from "react";
import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { SelectSingle } from "./SelectSingle";

export default {
  title: "Components/Forms/Select",
  component: SelectDemo,
  argTypes: {
    required: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
    },
    error: {
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

function SelectDemo({ error, required }) {
  const [selectValue, setSelectValue] = React.useState(null);
  return <SelectSingle
    error={error}
    required={required}
    dataSource={dataSource}
    placeholder="Select an option.."
    value={selectValue}
    onChange={(e) => setSelectValue(e)}
  />
}

const Template = (args) => <SelectDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  required: true,
};