import React from "react";
import { PreviewIcon } from './PreviewIcon';
import { IconStarOutlined } from '../../icons/IconStarOutlined';

export default {
  title: `Components/PreviewIcon`,
  component: PreviewIconDemo,
  argTypes: {
    size: {
      name: "size",
      description: "Size of the preview icon",
      control: { type: "number" },
      type: "number"
    },
  },
};

function PreviewIconDemo(args) {
  return <PreviewIcon {...args} icon={<IconStarOutlined></IconStarOutlined>}>
  </PreviewIcon>
}

const Template = (args) => < PreviewIconDemo {...args} />;

export const PDF_16 = Template.bind({});
PDF_16.args = {
  size: 16
};
export const PDF_20 = Template.bind({});
PDF_20.args = {
  size: 20
};
export const PDF_24 = Template.bind({});
PDF_24.args = {
  size: 24
};
export const PDF_28 = Template.bind({});
PDF_28.args = {
  size: 28
};
export const PDF_32 = Template.bind({});
PDF_32.args = {
  size: 32
};
export const PDF_36 = Template.bind({});
PDF_36.args = {
  size: 36
};
export const PDF_40 = Template.bind({});
PDF_40.args = {
  size: 40
};
export const PDF_48 = Template.bind({});
PDF_48.args = {
  size: 48
};
