import React, { useState } from "react";
import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { Button } from "../button";
import { message } from "../message";

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
  // With it we can set a custom title, custom icon or duration for the message:

  const customIcon = () => {
    message.info("Test message with a custom icon", { icon: <IconStarOutlined></IconStarOutlined> });
  };

  const customAction = () => {
    message.info("Test message with a custom action", { action: <div onClick={console.log("you clicked my action")}>Action</div> });
  };

  const customDuration = () => {
    message.info("Test message with custom duration (5s)", { duration: 5000 });
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
        marginTop: 150,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={info}>Info</Button>
      <Button onClick={customIcon}>Custom icon</Button>
      <Button onClick={customAction}>Custom action</Button>
      <Button onClick={customDuration}>Custom duration</Button>
      <div>
        <input
          placeholder="Custom content!"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button onClick={customContent}>Custom content</Button>
      </div>
      <div>
        This is based on a real use case
        <Button onClick={realUsageExample}>Document was deleted</Button>
      </div>
    </div>
  );
}

const Template = (args) => < MessageDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
