import React from "react";
import { ColorPicker } from "./ColorPicker";

export default {
  title: `Components/ColorPicker`,
  component: ColorPicker,
};

const ColorPickerDemo = (args) => <ColorPicker {...args} onChange={(color) => console.log(color)} />;

export const Default: any = ColorPickerDemo.bind({});

Default.args = {
  initColor: { r: 200, g: 150, b: 35, a: 0.5 },
};
