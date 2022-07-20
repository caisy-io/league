import React from "react";
import { NotificationBlock } from "./NotificationBlock";

export default {
  title: `Components/Notifications/NotificationBlock`,
  component: NotificationBlockDemo,
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1763%3A42449",
    },
  },
};

function NotificationBlockDemo({ children }) {
  return children;
}

const Template = () => (
  <NotificationBlockDemo>
    <NotificationBlock>Content</NotificationBlock>
  </NotificationBlockDemo>
);

export const Default = Template.bind({});

Default.args = {};
