import React from "react";
import { SmallWarning } from './SmallWarning';

export default {
  title: `Components/Badges & Labels/SmallWarning`,
  component: SmallWarningDemo,
  argTypes: {
    content: {
      description: "Text content of the small warning component",
      control: { type: "text" },
    },
  },
};

function SmallWarningDemo({ content }) {
  return <SmallWarning>
    {content}
  </SmallWarning>
}

const Template = (args) => < SmallWarningDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: '24 views will be moved to “Team"'
};
