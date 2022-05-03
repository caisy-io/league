import React, { useRef, useState } from "react";
import { FloatingSearchEditableText } from "./FloatingSearchEditableText";

const Template = ({ ...args }) => {
  const ref = useRef<HTMLInputElement>();
  const [value, setValue] = useState("");
  const onChange = (e) => {
    // console.log(` onChange`, e);
    setValue(e.target.value);
  };
  return (
    <div style={{ width: 250 }}>
      <FloatingSearchEditableText
        ref={ref}
        onPressEnter={(e) => console.log(e)}
        onChange={onChange}
        value={value}
        {...args}
      />
    </div>
  );
};

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
