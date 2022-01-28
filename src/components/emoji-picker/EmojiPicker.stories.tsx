import React from "react";
import { EmojiPicker } from './EmojiPicker';

export default {
  title: `Components/EmojiPicker`,
  component: EmojiPickerDemo,
  argTypes: {
  },
};

function EmojiPickerDemo() {
  return <EmojiPicker>
  </EmojiPicker>
}

const Template = (args) => < EmojiPickerDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
