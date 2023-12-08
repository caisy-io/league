import React from "react";
import { InputField } from "../input-field/InputField";

export default {
  title: `Components/InputField`,
  component: InputField,
  argTypes: {},
  parameters: {},
};

const Template = () => {
  return <InputField title="Input field" commentsCount={0} required />;
};

export const Default = Template.bind({});
Default.args = {};
