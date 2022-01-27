import React from "react";
import { EmojiPicker } from './EmojiPicker';

export default {
  title: `Components/EmojiPicker`,
  component: EmojiPickerDemo,
  argTypes: {
    boolean: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    text: {
      description: "An example text argument type",
      control: { type: "text" },
    },
    select: {
      description: "An example select argument type",
      options: ["option1", "option2", "option2"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "option1",
        },
      },
    },
  },
};

function EmojiPickerDemo({ boolean, text, select }) {
  return <EmojiPicker>
  </EmojiPicker>
}

const Template = (args) => < EmojiPickerDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
