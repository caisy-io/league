import React from "react";
import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { SimpleInputDropdown } from "./SimpleInputDropdown";

export default {
  title: "Components/Forms/SimpleInputDropdown",
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
    title: "Default Title Eshkereeeeeeeeee! Wow! I am veeeeeery long indeed!",
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

function SimpleInputDropdownDemo({ error, required, translationBadge }) {
  const [selectValue, setSelectValue] = React.useState(null);
  return <SimpleInputDropdown
    error={error}
    required={required}
    translationBadge={translationBadge}
    dataSource={dataSource}
    placeholder="Select an option.."
    value={selectValue}
    onSelectValue={(e) => setSelectValue(e)}
  />
}

const Template = (args) => <SimpleInputDropdownDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  required: false,
  translationBadge: false,
};

export const Required = Template.bind({});
Required.args = {
  error: false,
  required: true,
  translationBadge: false,
};

export const Translation = Template.bind({});
Translation.args = {
  error: false,
  required: false,
  translationBadge: true,
};