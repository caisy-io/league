import React from "react";
import { EmojiPicker } from './EmojiPicker';

export const Default = ({ ...args }) => {
  return (
    <EmojiPicker>
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
