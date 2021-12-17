import React, { useState } from "react";
import { IconStarOutlined } from "../..";
import { RadioButtonListItem } from "./RadioButtonListItem";

// Default RadioButtonListItem Demo
export default {
  title: "Components/Interactional/RadioButtonListItem",
  component: RadioButtonListItemDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=3421%3A70985",
    },
  },
  argTypes: {},
};

function RadioButtonListItemDemo({ disabled, content, withIcon }) {
  const [activated, setActivated] = useState(false);
  return (
    <div style={{ width: 320 }}>
      <RadioButtonListItem onChange={setActivated} activated={activated} disabled={disabled}>
        {withIcon && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconStarOutlined size={20} />
          </div>
        )}
        <p style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{content}</p>
      </RadioButtonListItem>
    </div>
  );
}

const Template = ({ disabled, content, withIcon }) => (
  <RadioButtonListItemDemo withIcon={withIcon} content={content} disabled={disabled} />
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  withIcon: false,
  content: "Default",
};
