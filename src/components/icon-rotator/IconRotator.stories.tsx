import React, { useState } from "react";
import { IconRotator } from './IconRotator';
import { IconChevron } from '../../icons/IconChevron';
import { Button } from '../button';

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
  const [degrees, setDegrees] = useState(0);
  const handleClick = () => {
    if (!degrees) {
      setDegrees(rotationDegrees);
    }
    else {
      setDegrees(null);
    }
  };
  return (<><IconRotator rotationDegrees={degrees}>
    <IconChevron />
  </IconRotator>
    <Button onClick={() => handleClick()}>Rotate me!</Button>
  </>)
};

export const Default: any = IconRotatorDemo.bind({});
Default.args = {
  rotationDegrees: 90,
};
