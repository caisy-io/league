import React, { useState } from "react";
import { EmojiPicker } from './EmojiPicker';
import { Emoji } from 'emoji-mart'

export const Default = ({ ...args }) => {
  const [pickedEmoji, setPickedEmoji] = useState('');
  return (<>
    <EmojiPicker onSelect={(emoji) => setPickedEmoji(emoji)} >
    </EmojiPicker>
    <span>Picked emoji: <Emoji
      set={'apple'}
      emoji={pickedEmoji}
      size={24}
    /></span>
  </>
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
