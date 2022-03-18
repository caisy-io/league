import React from "react";
import { MicroMenu } from "./MicroMenu";

export default {
  title: `Components/MicroMenu`,
  component: MicroMenu,
  menuHeight: {
    description: "height of menu",
    control: { type: "text" },
    table: {
      defaultValue: {
        summary: "",
      },
    },
  },
};

const options = [
  { key: "14:00", value: "14:00" },
  { key: "14:30", value: "14:30" },
  { key: "15:00", value: "15:00" },
  { key: "16:00", value: "16:00" },
  { key: "17:00", value: "17:00" },
  { key: "18:00", value: "18:00" },
  { key: "19:00", value: "19:00" },
  { key: "20:00", value: "20:00" },
  { key: "21:00", value: "21:00" },
];
const MicroMenuDemo: React.FC<{ menuHeight; options; renderItem }> = ({ menuHeight, options, renderItem }) => (
  <MicroMenu menuHeight={menuHeight} options={options} renderItem={renderItem} />
);

export const Default: any = MicroMenuDemo.bind({});
Default.args = {
  menuHeight: "200px",
  options: options,
};
