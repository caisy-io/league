import React from "react";
import { NotificationBlock } from "./NotificationBlock";
import { Notification } from "../notification/Notification";
import { SNotificationBody } from "../notification/styles/SNotificationBody";
import { SNotificationDate } from "../notification/styles/SNotificationDate";
import { FlatActionButton } from "../flat-action-button/FlatActionButton";
import { NotificationButton } from "../notification-button/NotificationButton";
import { IconDocuments, IconDownloadArrow } from "../../icons";

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
      <Notification>
        <SNotificationDate>TODAY, 3:30PM</SNotificationDate>
        <SNotificationBody>
          <NotificationButton image={<img src="" />}>John Doe</NotificationButton> created
          <NotificationButton icon={<IconDocuments size={16} />}>Document A</NotificationButton>
        </SNotificationBody>
        <div style={{ width: "fit-content" }}>
          <FlatActionButton type="default">
            <IconDownloadArrow size={16} /> Download JSON
          </FlatActionButton>
        </div>
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
