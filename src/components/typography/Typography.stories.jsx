import React from "react";
import { Typography } from './Typography';

export default {
  title: `Components/Style Guide/Typography`,
  component: TypographyDemo,
  argTypes: {
    lineHeight: {
      description: "Changes the overall design of the search bar operand",
      options: ["Inter", "IBM Plex Mono"],
      control: { type: "select" },
    },
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
  fontFamily: "Inter",
  fontSize: "12",
  lineHeight: "12",
  fontWeight: "400",
};

export const Heading_01 = Template.bind({});
Heading_01.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "18",
  lineHeight: "24",
  fontWeight: "600",
  spacing: 0,
};

export const Body_01_Semibold = Template.bind({});
Body_01_Semibold.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "18",
  lineHeight: "24",
  fontWeight: "600",
  spacing: 0,
};

export const Body_01_Medium = Template.bind({});
Body_01_Medium.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "18",
  lineHeight: "24",
  fontWeight: "500",
  spacing: 0,
};

export const Body_01 = Template.bind({});
Body_01.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "18",
  lineHeight: "24",
  fontWeight: "400",
  spacing: 0,
};

export const Body_02_Semibold = Template.bind({});
Body_02_Semibold.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "16",
  lineHeight: "24",
  fontWeight: "600",
  spacing: 0,
};

export const Body_02_Medium = Template.bind({});
Body_02_Medium.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "16",
  lineHeight: "24",
  fontWeight: "500",
  spacing: 0,
};

export const Body_02 = Template.bind({});
Body_02.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "16",
  lineHeight: "24",
  fontWeight: "400",
  spacing: 0,
};

export const Body_03_Semibold = Template.bind({});
Body_03_Semibold.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "14",
  lineHeight: "20",
  fontWeight: "600",
  spacing: 0,
};

export const Body_03_Medium = Template.bind({});
Body_03_Medium.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "14",
  lineHeight: "20",
  fontWeight: "500",
  spacing: 0,
};

export const Body_03 = Template.bind({});
Body_03.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "14",
  lineHeight: "20",
  fontWeight: "400",
  spacing: 0,
};

export const Caption_01_Medium = Template.bind({});
Caption_01_Medium.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "12",
  lineHeight: "16",
  fontWeight: "500",
  spacing: 0,
};

export const Caption_01 = Template.bind({});
Caption_01.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "12",
  lineHeight: "16",
  fontWeight: "400",
  spacing: 0,
};

export const Caption_02_Semibold = Template.bind({});
Caption_02_Semibold.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "11",
  lineHeight: "14",
  fontWeight: "600",
  spacing: 0,
};

export const Caption_02_Medium = Template.bind({});
Caption_02_Medium.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "11",
  lineHeight: "14",
  fontWeight: "500",
  spacing: 0,
};

export const Caption_02 = Template.bind({});
Caption_02.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "11",
  lineHeight: "14",
  fontWeight: "400",
  spacing: 0,
};

export const Highlight = Template.bind({});
Highlight.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "11",
  lineHeight: "16",
  fontWeight: "700",
  spacing: 0.06,
};

export const Highlight_Small_Badges = Template.bind({});
Highlight_Small_Badges.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "11",
  lineHeight: "16",
  fontWeight: "700",
  spacing: 0,
};

export const Highlight_Micro = Template.bind({});
Highlight_Micro.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "8",
  lineHeight: "12",
  fontWeight: "700",
  spacing: 0.08,
};

export const Badges_Small = Template.bind({});
Badges_Small.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "9",
  lineHeight: "16",
  fontWeight: "700",
  spacing: 0,
};

export const Primary_Buttons = Template.bind({});
Primary_Buttons.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontSize: "11",
  lineHeight: "16",
  fontWeight: "700",
  spacing: 0,
};

export const Monospace_Caption = Template.bind({});
Monospace_Caption.args = {
  text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  fontFamily: "IBM Plex Mono",
  fontSize: "11",
  lineHeight: "16",
  fontWeight: "700",
  spacing: 0,
};


