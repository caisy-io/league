import React, { useState } from "react";
import { IconStarOutlined } from "../../icons/IconStarOutlined";
import { RadioButtonListItem } from "./RadioButtonListItem";

// Default RadioButtonListItem Demo
export default {
  title: "Components/Interactional/RadioButtonListItem",
  component: RadioButtonListItem,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=3421%3A70985",
    },
  },
  argTypes: {},
};

const Template = ({ disabled, content, withIcon, left, activated: propsActive }) => {
const [activated, setActivated] = useState(false);
  React.useEffect(() => {
    setActivated(propsActive)
  }, [propsActive]);
return (
  <RadioButtonListItem onChange={setActivated} activated={activated} disabled={disabled} left={left}>
    {withIcon && (
      <IconStarOutlined size={20} />
    )}
    <p data-main>{content}</p>
  </RadioButtonListItem>
)};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  withIcon: false,
  left: false,
  activated: false,
  content: "Default",
};
