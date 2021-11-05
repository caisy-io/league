import React from "react";
import { SimpleInput } from "../simple-input/SimpleInput";
import { WithLabel } from "../with-label/WithLabel";
import { WithErrorMessage } from "./WithErrorMessage";

function WithErrorMessageDemo({ content, ...args }) {
  return (
    <WithLabel content="Label">
      <WithErrorMessage content={content}>
        <SimpleInput state="error" {...args} />
      </WithErrorMessage>
    </WithLabel>
  );
}

export default {
  title: "Components/InputFields/WithErrorMessage",
  component: WithErrorMessageDemo,
  argTypes: {
    content: {
      description: "Label",
      control: { type: "text" },
    },
  },
};

const Template = ({ label, ...args }) => <WithErrorMessageDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is an error message",
};
