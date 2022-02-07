import React from "react";
import { IconRotator } from './IconRotator';
import { IconChevron } from '../../icons/IconChevron';

export default {
  title: `Components/IconRotator`,
  component: IconRotator,
  argTypes: {
    rotationDegrees: {
      description: "An example boolean argument type",
      control: { type: "number" },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
  },
};

const IconRotatorDemo: React.FC<{ rotationDegrees }> = ({ rotationDegrees }) => (
  <IconRotator rotationDegrees={rotationDegrees}>
    <IconChevron />
  </IconRotator>
);

export const Default: any = IconRotatorDemo.bind({});
Default.args = {
  rotationDegrees: 0,
};
