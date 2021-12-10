import React from "react";
import { ComponentImage } from './ComponentImage';

export default {
  title: `Components/Style Guide/ComponentImage`,
  component: ComponentImageDemo,
  argTypes: {
    type: {
      description: "Changes the type of the component image",
      options: ["open", "grid", "list-item"],
      control: { type: "select" },
    }
  },
};

function ComponentImageDemo({ type }) {
  return <ComponentImage type={type}>
  </ComponentImage>
}

const Template = (args) => < ComponentImageDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "open"
};
