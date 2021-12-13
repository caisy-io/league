import React from "react";
import { Typography } from './Typography';

export default {
  title: `Components/Style Guide/Typography`,
  component: TypographyDemo,
  argTypes: {
    // example argument type
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function TypographyDemo({ content, ...args }) {
  return <Typography>
    {content}
  </Typography>
}

const Template = (args) => < TypographyDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
