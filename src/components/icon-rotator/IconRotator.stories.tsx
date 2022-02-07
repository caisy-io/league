import React from "react";
import { IconChevron } from '../../icons/IconChevron';
import { IconRotator } from './IconRotator';

export default {
  title: `Components/IconRotator`,
  component: IconRotator,
  argTypes: {
    rotationDegrees: {
      description: "An example boolean argument type",
      control: { type: "number" },
    },
  },
};

const IconRotatorDemo: React.FC<{ rotationDegrees }> = ({ rotationDegrees }) => {
  return (<><IconRotator rotationDegrees={rotationDegrees}>
    <IconChevron />
  </IconRotator>
  </>)
};

export const Default: any = IconRotatorDemo.bind({});
Default.args = {
  rotationDegrees: 0,
};
