import React from "react";
import { IconStarOutlined } from "../..";
import { NotificationSnackbar } from './NotificationSnackbar';

export default {
  title: `Components/NotificationSnackbar`,
  component: NotificationSnackbarDemo,
  argTypes: {
    error: {
      description: "Shows the item is activated",
      control: { type: "boolean" },
    },
    success: {
      description: "Shows the item is activated",
      control: { type: "boolean" },
    },
    content: {
      description: "Content of the notification snackbar",
      control: { type: "text" },
    },
  },
};

function NotificationSnackbarDemo({ ...args }) {
  return <NotificationSnackbar icon={<IconStarOutlined></IconStarOutlined>} content={args.content} action="Action" error={args.error} success={args.success}>
  </NotificationSnackbar>
}

const Template = (args) => < NotificationSnackbarDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Default",
  error: false,
  success: false,
};
