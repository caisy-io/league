import React, { useRef } from "react";
import { FloatingSearchEditableText } from "./FloatingSearchEditableText";

const Template = ({ ...args }) => {
  const ref = useRef<HTMLInputElement>();
  return <div style={{ width: 250 }}>
    <FloatingSearchEditableText ref={ref} {...args} />
  </div>
}

export default {
  title: "Components/FloatingSearchEditableText",
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
