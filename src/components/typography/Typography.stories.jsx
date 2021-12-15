import React from "react";
import { Typography } from './Typography';

export default {
  title: `Components/Style Guide/Typography`,
  component: TypographyDemo,
  argTypes: {
    // example argument type
    text: {
      description: "Changes the state of the component to Activated",
      control: { type: "text" },
    },
  },
};

function TypographyDemo({ text }) {
  return <Typography>
    {text}
  </Typography>
}

const Template = (args) => < TypographyDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: ""
};
