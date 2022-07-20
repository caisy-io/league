import React from "react";
import { Notification, SNotificationDate, SNotificationBody } from "./";

export default {
  title: `Components/Notifications/Notification`,
  component: NotificationDemo,
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1763%3A42538",
    },
  },
};

function NotificationDemo({ children }) {
  return children;
}

const Template = () => (
  <NotificationDemo>
    <Notification>
      <SNotificationDate>TODAY, 3:30PM</SNotificationDate>
      <SNotificationBody>Notification text</SNotificationBody>
    </Notification>
  </NotificationDemo>
);

export const Default = Template.bind({});

Default.args = {};
