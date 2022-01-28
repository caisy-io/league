import React from "react";
import { IconEmojis } from "../../icons/IconEmojis";
import { LineSelect } from "./LineSelect";
import { LineSelectItem } from "./LineSelectItem";
import { LineSelectLabel } from "./LineSelectILabel";

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
    label: {
      description: "An example boolean argument type",
      control: { type: "text" },
    },
  },
};

function SimpleInputDropdownDemo({ error, required, label }) {
  const [selectValue, setSelectValue] = React.useState(null);
  return <><LineSelectLabel>{label}</LineSelectLabel>
    <LineSelect
      error={error}
      required={required}
      value={selectValue}
      onSelectValue={(e) => setSelectValue(e)}
      label={label}
    >
      <LineSelectItem value={10}><IconEmojis />Ten</LineSelectItem>
      <LineSelectItem value={20}><IconEmojis />Twenty</LineSelectItem>
      <LineSelectItem value={30}><IconEmojis />Thirty</LineSelectItem>
    </LineSelect>
  </>
}

const Template = (args) => <SimpleInputDropdownDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  required: false,
  label: "Label",
};