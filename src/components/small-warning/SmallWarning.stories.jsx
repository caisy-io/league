import React from "react";
import { SmallWarning } from './SmallWarning';

export default {
  title: `Components/Badges & Labels/SmallWarning`,
  component: SmallWarningDemo,
  argTypes: {
    // example argument type
    content: {
      description: "Changes the state of the component to Activated",
      control: { type: "text" },
    },
  },
};

function SmallWarningDemo({ content, ...args }) {
  return <SmallWarning>
    {content}
  </SmallWarning>
}

const Template = (args) => < SmallWarningDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: '24 views will be moved to “Team"'
};
