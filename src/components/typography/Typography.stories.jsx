import React from "react";
import { Typography } from './Typography';

export default {
  title: `Components/Style Guide/Typography`,
  component: TypographyDemo,
  argTypes: {
    text: {
      description: "Changes the state of the component to Activated",
      control: { type: "text" },
    },
    fontSize: {
      description: "Changes the overall design of the search bar operand",
      options: ["12", "16", "18", "20", "24"],
      control: { type: "select" },
    },
    lineHeight: {
      description: "Changes the overall design of the search bar operand",
      options: ["12", "16", "18", "20", "24"],
      control: { type: "select" },
    },
    fontWeight: {
      description: "Changes the overall design of the search bar operand",
      options: ["400", "500", "600", "700"],
      control: { type: "select" },
    },
    spacing: {
      description: "Changes the overall design of the search bar operand",
      control: { type: "number" },
    },
  },
};

function TypographyDemo({ text, fontSize, fontWeight, lineHeight, spacing }) {
  return <Typography text={text} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} spacing={spacing}>
  </Typography>
}

const Template = (args) => < TypographyDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "12",
  lineHeight: "12",
  fontWeight: "400",
};
