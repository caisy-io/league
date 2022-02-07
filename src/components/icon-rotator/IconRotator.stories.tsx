import React from "react";
import { IconRotator } from './IconRotator';
import { IconChevron } from '../../icons/IconChevron';

export default {
  title: `Components/IconRotator`,
  component: IconRotator,
  argTypes: {
    activated: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
  },
};

const IconRotatorDemo: React.FC<{ boolean, text, select }> = ({ boolean, text, select }) => (
  <IconRotator>
    <IconChevron />
  </IconRotator>
);

export const Default: any = IconRotatorDemo.bind({});
Default.args = {
  boolean: true,
  text: 'Hello World',
  select: 'option2',
};
