import React from "react";
import { ComponentCard } from './ComponentCard';
import { SComponentCardWrapper } from './styles/SComponentCardWrapper';

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
  },
};

function ComponentCardDemo({ title, description,tags }) {
  return <SComponentCardWrapper>
    <ComponentCard title={title} description={description} tags={tags}>
    </ComponentCard>
  </SComponentCardWrapper>
}

const Template = (args) => < ComponentCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  description: "Description",
  tags: "Tag A, Tag B, Tag C"
};
