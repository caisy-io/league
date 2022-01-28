import React from "react";
import { IconEmojis } from "../../icons/IconEmojis";
import { LineSelect } from "./LineSelect";
import { LineSelectItem } from "./LineSelectItem";
import { LineSelectLabel } from "./LineSelectILabel";

export default {
  title: "Components/Forms/LineSelect",
  component: SimpleInputDropdownDemo,
  argTypes: {
    state: {
      description: "Changes the state of the input",
      options: ["default", "success", "error"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    label: {
      description: "An example boolean argument type",
      control: { type: "text" },
    },
  },
};

function SimpleInputDropdownDemo({ state, label }) {
  const [selectValue, setSelectValue] = React.useState(null);
  return <><LineSelectLabel errorMessage="Error message"
    state={state}>{label}</LineSelectLabel>
    <LineSelect
      state={state}
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