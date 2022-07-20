import React from "react";
import { NotificationBlock } from "./NotificationBlock";
import { Notification, SNotificationBody, SNotificationDate } from "../";

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
    <NotificationBlock>
      <div>2 new notifications in Brand Name A / Project Name</div>
      <Notification>
        <SNotificationDate>TODAY, 3:30PM</SNotificationDate>
        <SNotificationBody>Notification Text</SNotificationBody>
      </Notification>
      <Notification>
        <SNotificationDate>TODAY, 3:30PM</SNotificationDate>
        <SNotificationBody>Notification Text</SNotificationBody>
      </Notification>
    </NotificationBlock>
  </NotificationBlockDemo>
);

export const Default = Template.bind({});

Default.args = {};
