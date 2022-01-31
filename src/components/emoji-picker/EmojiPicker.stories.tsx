import React from "react";
import { EmojiPicker } from './EmojiPicker';

export const Default = ({ ...args }) => {
  return (
    <EmojiPicker onSelect={(e) => console.log("Selected emoji: " + e)}>
    </EmojiPicker>
  );
};

export default {
  title: `Components/EmojiPicker`,
  component: Default,
  argTypes: {
  },
};

Default.args = {

};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
