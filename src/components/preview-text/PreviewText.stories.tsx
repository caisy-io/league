import React from "react";
import { PreviewText } from './PreviewText';

export default {
  title: `Components/PreviewText`,
  component: PreviewTextDemo,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the preview text",
      control: { type: "number" },
      type: "number"
    },
  },
};

function PreviewTextDemo(args) {
  return <PreviewText {...args}>
  </PreviewText>
}

const Template = (args) => < PreviewTextDemo {...args} />;

export const PDF_16 = Template.bind({});
PDF_16.args = {
  children: "PDF",
  size: 16
};
export const PDF_20 = Template.bind({});
PDF_20.args = {
  children: "PDF",
  size: 20
};
export const PDF_24 = Template.bind({});
PDF_24.args = {
  children: "PDF",
  size: 24
};
export const PDF_28 = Template.bind({});
PDF_28.args = {
  children: "PDF",
  size: 28
};
export const PDF_32 = Template.bind({});
PDF_32.args = {
  children: "PDF",
  size: 32
};
export const PDF_36 = Template.bind({});
PDF_36.args = {
  children: "PDF",
  size: 36
};
export const PDF_40 = Template.bind({});
PDF_40.args = {
  children: "PDF",
  size: 40
};
export const PDF_48 = Template.bind({});
PDF_48.args = {
  children: "PDF",
  size: 48
};
