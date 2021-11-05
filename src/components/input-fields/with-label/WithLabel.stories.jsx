import React from "react";
import { SimpleInput } from "../simple-input/SimpleInput";
import { WithLabel } from "./WithLabel";

function WithLabelDemo({ content, ...args }) {
  return (
    <WithLabel content={content}>
      <SimpleInput {...args} />
    </WithLabel>
  );
}

export default {
  title: "Components/InputFields/WithLabel",
  component: WithLabelDemo,
  argTypes: {
    content: {
      description: "Label",
      control: { type: "text" },
    },
  },
};

const Template = ({ label, ...args }) => <WithLabelDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is a label",
};
