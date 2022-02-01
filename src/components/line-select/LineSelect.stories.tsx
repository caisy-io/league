import React from "react";
import { IconEmojis } from "../../icons/IconEmojis";
import { LineSelect } from "./LineSelect";
import { LineSelectItem } from "./LineSelectItem";
import { LineSelectLabel } from "./LineSelectILabel";

export const Default = ({ state, label, required }) => {
  const [selectValue, setSelectValue] = React.useState(null);
  return <><LineSelectLabel errorMessage="Error message"
    state={state} required={required}>{label}</LineSelectLabel>
    <LineSelect
      state={state}
      value={selectValue}
      onSelectValue={(e) => setSelectValue(e)}
    >
      <LineSelectItem value={10}><IconEmojis />This is a very, very long menu item</LineSelectItem>
      <LineSelectItem value={20}><IconEmojis />Twenty</LineSelectItem>
      <LineSelectItem value={30}><IconEmojis />Thirty</LineSelectItem>
    </LineSelect>
  </>
}

export default {
  title: "Components/Forms/LineSelect",
  component: Default,
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
    errorMessage: {
      description: "The error message that's displayed incase of an error",
      control: { type: "text" },
    },
    required: {
      description: "The error message that's displayed incase of an error",
      control: { type: "boolean" },
    },
  },
};

Default.args = {
  error: false,
  required: false,
  label: "Label",
  errorMessage: "Error Message",
  state: "default"
};