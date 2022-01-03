import React from "react";
import { ComponentCard } from './ComponentCard';
import { SComponentCardWrapper } from './styles/SComponentCardWrapper';
import { Img } from "../../base-components/img/Img";

export default {
  title: `Components/Cards/ComponentCard`,
  component: ComponentCardDemo,
  argTypes: {
    title: {
      description: "Title of the component card",
      control: { type: "text" },
    },
    description: {
      description: "Description of the component card",
      control: { type: "text" },
    },
    tags: {
      description: "Description of the component card",
      control: { type: "text" },
    },
    image: {
      name: "image",
      description: "Image of the component",
      control: { type: "ReactNode" },
    },
  },
};

function ComponentCardDemo({ title, description, tags, image }) {
  return <SComponentCardWrapper>
    <ComponentCard title={title} description={description} tags={tags} image={image}>
    </ComponentCard>
  </SComponentCardWrapper>
}

const Template = (args) => < ComponentCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  description: "Description",
  tags: "Tag A, Tag B, Tag C",
  image: <Img lazyload={false} src={"https://images.unsplash.com/photo-1597365657409-3295ffce315c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"!} resolution={48} />,
};
