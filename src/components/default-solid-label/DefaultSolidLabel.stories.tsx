import React from "react";
import { DefaultSolidLabel } from './DefaultSolidLabel';
import { Img } from "../../base-components/img/Img";

export default {
  title: `Components/Forms/DefaultSolidLabel`,
  component: DefaultSolidLabelDemo,
  argTypes: {
    labelText: {
      description: "Changes the state of the component to Activated",
      control: { type: "text" },
    },
    leftImage: {
      name: "image",
      description: "Preview of the icon",
      control: { type: "ReactNode" },
    },
  },
};

function DefaultSolidLabelDemo({ content, labelText, leftImage }) {
  return <DefaultSolidLabel labelText={labelText} leftImage={leftImage}>
    {content}
  </DefaultSolidLabel>
}

const Template = (args) => < DefaultSolidLabelDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelText: "Default",
};

export const LeftImage = Template.bind({});
LeftImage.args = {
  labelText: "Default",
  leftImage: <Img lazyload={false} src={"https://images.unsplash.com/photo-1496147195884-6ab7f7c0a027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"!} resolution={48} />,
};
