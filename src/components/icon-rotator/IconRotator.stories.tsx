import React from "react";
import { IconChevronUp } from '../../icons/IconChevronUp';
import { IconRotator } from './IconRotator';

export default {
  title: `Components/IconRotator`,
  component: IconRotator,
  argTypes: {
    rotationDegrees: {
      description: "Number of degrees to rotate the icon by",
      control: { type: "number" },
    },
  },
};

const IconRotatorDemo: React.FC<{ rotationDegrees }> = ({ rotationDegrees }) => {
  return (<><IconRotator rotationDegrees={rotationDegrees}>
    <IconChevronUp size={20} />
  </IconRotator>
  </>)
};

export const Default: any = IconRotatorDemo.bind({});
Default.args = {
  rotationDegrees: 0,
};
