import React from "react";
import { IconScaleBigger, IconScaleSmaller, IconStarOutlined } from "../../icons";
import { Slider } from "./Slider";

export default {
  title: `Components/Slider`,
  component: Slider,
  argTypes: {
    initialValue: {
      description: "Set initial value of slider",
      control: { type: "number" },
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
    getSliderValue: {
      description: "Method to get value of slider",
    },
    onValueChange: {
      description: "Method run when the value changed",
    },
    leftIcon: {
      description: "icon",
    },
    rightIcon: {
      description: "icon",
    },
  },
};

const SliderDemo = ({ leftIcon, rightIcon, initialValue, min, max }) => (
  <Slider leftIcon={leftIcon} rightIcon={rightIcon} initialValue={initialValue} min={min} max={max} />
);

export const Default: any = SliderDemo.bind({});
Default.args = {
  initialValue: 3,
  leftIcon: <IconStarOutlined />,
  rightIcon: <IconStarOutlined />,
  min: 2,
  max: 5,
};
