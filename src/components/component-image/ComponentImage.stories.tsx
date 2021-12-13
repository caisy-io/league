import React from "react";
import { ComponentImage } from './ComponentImage';
import { Img } from "../../base-components/img/Img";

export default {
  title: `Components/Style Guide/ComponentImage`,
  component: ComponentImageDemo,
  argTypes: {
    type: {
      description: "Changes the type of the component image",
      options: ["open", "grid", "list-item"],
      control: { type: "select" },
    },
    image: {
      description: "Changes the image of the component image",
      control: { type: "text" },
    },
  },
};

function ComponentImageDemo({ type, image }) {
  return <ComponentImage type={type} image={image}>
  </ComponentImage>
}

const Template = (args) => < ComponentImageDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "open",
  image: <Img lazyload={false} src={"https://images.unsplash.com/photo-1597365657409-3295ffce315c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"!} resolution={48} />,
};
