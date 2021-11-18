import React from "react";
import { NotificationSnackbar } from './NotificationSnackbar';

export default {
  title: `Components/NotificationSnackbar`,
  component: NotificationSnackbarDemo,
  argTypes: {
    // example argument type
    activated: {
      description: "Changes the state of the component to Activated",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

function NotificationSnackbarDemo({ content, ...args }) {
  return <NotificationSnackbar>
    {content}
  </NotificationSnackbar>
}

const Template = (args) => < NotificationSnackbarDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
