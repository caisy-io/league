import React, { useState } from "react";
import { EmojiPicker } from "./EmojiPicker";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import Emoji from "@emoji-mart/react";

init({ data });

export const Default = ({ ...args }) => {
  const [pickedEmoji, setPickedEmoji] = useState("trophy");
  return (
    <>
      <EmojiPicker onSelect={(emoji) => setPickedEmoji(emoji)}></EmojiPicker>
      <span>
        {/* @ts-ignore */}
        Picked emoji: <em-emoji set="apple" id={`${pickedEmoji}`} size={`${24}px`}></em-emoji>
      </span>
    </>
  );
};

export default {
  title: `Components/EmojiPicker`,
  component: Default,
  argTypes: {},
};

Default.args = {};

Default.parameters = {
  controls: { hideNoControlsWarning: true },
};
