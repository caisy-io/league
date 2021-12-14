import { useState } from "react";
import { IconStarOutlined } from "../..";
import { ToggleListItem } from "./ToggleListItem";

function ToggleListItemDemo({ content, description, size, showRightIcon, showLeftIcon }) {
  const [active, setActive] = useState(false);
  return (
    <div style={{ width: 320 }}>
      <ToggleListItem
        icon={showLeftIcon && <IconStarOutlined size={20} />}
        active={active}
        onChange={setActive}
        size={size}
        description={description}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {content}
          {showRightIcon && <IconStarOutlined size={20} />}
        </div>
      </ToggleListItem>
    </div>
  );
}

export default {
  title: "Components/Interactional/ToggleListItem",
  component: ToggleListItemDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=558%3A8536",
    },
  },
};
const Template = ({ content, description, size, showRightIcon, showLeftIcon }) => (
  <ToggleListItemDemo
    content={content}
    description={description}
    showLeftIcon={showLeftIcon}
    showRightIcon={showRightIcon}
    size={size}
  />
);

export const Default = Template.bind({});
Default.args = {
  content: "Default",
  description: "Lorem ipsum",
  size: "medium",
  showRightIcon: true,
  showLeftIcon: true,
};
