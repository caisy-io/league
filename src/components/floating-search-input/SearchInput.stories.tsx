import React from "react";
import { FloatingSearchInput } from "./FloatingSearchInput";

const Template = ({ ...args }) => {
  return <div style={{ width: 250 }}>
    <FloatingSearchInput {...args} />
  </div>
}

export default {
  title: "Components/FloatingSearchInput",
  component: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1110%3A20042",
    },
  },
  argTypes: {},
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search",
  withFilter: false,
};
