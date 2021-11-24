import React, { useState } from "react";
import { message } from "../message";
import { Button } from "../button";

export default {
  title: `Components/Message`,
  component: MessageDemo,
  argTypes: {
  },
};

function MessageDemo({ content, ...args }) {
  // To create a message we simply call a function with "message.error/success/info()"
  // And pass the children as the first argument:
  const error = () => {
    message.error('Error publishing "Untitled": Validation failed. Please check the individual fields for errors.');
  };

  const info = () => {
    message.info("You can now publish documents by pressing ⌘ + ⇧ + s");
  };

  const success = () => {
    message.success('"Blog-page" published successfully');
  };

  // We can also pass a "config" object as the second parameter,
  // With it we can set a custom title, or duration for the message:

  /* const customTitle = () => {
    message.error("Test message with custom title", { title: "I am a custom title!" });
  }; */

  const customDuration = () => {
    message.info("Test message with custom duration (5s)", { duration: 10000 });
  };

  // The children content can come from anywhere,
  // We just need to pass the variable with the text we want as the first parameter:

  const [inputValue, setInputValue] = useState("");

  const customContent = () => {
    message.success(inputValue);
  };

  const realUsageExample = () => {
    message.success("Document was deleted");
  };

  return (
    <div
      style={{
        margin: 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 125,
        gap: 20,
      }}
    >
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={info}>Info</Button>
      {/* <Button onClick={customTitle}>Custom title</Button> */}
      <Button onClick={customDuration}>Custom duration</Button>
      <input
        placeholder="Custom content!"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Button onClick={customContent}>Custom content</Button>
      This is based on a real use case
      <Button onClick={realUsageExample}>Document was deleted</Button>
    </div>
  );
}

const Template = (args) => < MessageDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
