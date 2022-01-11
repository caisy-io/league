import React from "react";
import { IconStarOutlined } from "../..";
import { ExtensionCard } from './ExtensionCard';
import { SExtensionCardWrapper } from './styles/SExtensionCardWrapper';

export default {
  title: `Components/Cards/ExtensionCard`,
  component: ExtensionCardDemo,
  argTypes: {
    title: {
      description: "Title of the extension card",
      control: { type: "text" },
    },
    description: {
      description: "Description of the extension card",
      control: { type: "text" },
    },
    flatButtonText: {
      description: "Description of the extension card",
      control: { type: "text" },
    },
  },
};

function ExtensionCardDemo({ title, description, flatButtonText }) {
  return <SExtensionCardWrapper>
    <ExtensionCard titleIcon={<IconStarOutlined></IconStarOutlined>} title={title} description={description} flatButtonIcon={<IconStarOutlined></IconStarOutlined>} flatButtonText={flatButtonText}>
    </ExtensionCard>
  </SExtensionCardWrapper>
}

const Template = (args) => < ExtensionCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  flatButtonText: "Default",
};
