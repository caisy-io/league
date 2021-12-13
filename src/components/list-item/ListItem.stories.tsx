import { ListItem } from "./ListItem";
import { IconChevronRight, IconDragable, IconGearSettings, IconPin, IconStarOutlined } from "../..";
import { useState } from "react";

function ListItemDemo({ children, activated, onClick = undefined, ...props }) {
  return (
    <div {...props} style={{ width: "fit-content", minWidth: 320 }}>
      <ListItem activated={activated} onClick={onClick}>
        {children}
      </ListItem>
    </div>
  );
}

export default {
  title: "Components/Interactional/ListItem",
  component: ListItemDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=19%3A861",
    },
  },
};

const SmallListItemTemplate = ({ showLeftIcon, showRightIcon, activated, content }) => (
  <ListItemDemo activated={activated}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
      {showLeftIcon && <IconStarOutlined size={16} />}
      {content}
    </div>
    {showRightIcon && (
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconChevronRight size={16} />
      </div>
    )}
  </ListItemDemo>
);

export const SmallListItem = SmallListItemTemplate.bind({});
SmallListItem.args = {
  activated: false,
  showLeftIcon: true,
  showRightIcon: true,
  content: "Default",
};

const ListSpoilerTemplate = ({ showLeftIcon, showRightIcon, content }) => {
  const [activated, setActivated] = useState(false);

  const toggleActivated = () => {
    setActivated((prev) => !prev);
  };
  return (
    <ListItemDemo onClick={toggleActivated} activated={activated}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 8,
          transform: `rotate(${activated ? "90deg" : "0"})`,
          transition: "transform 200ms",
        }}
      >
        <IconChevronRight size={16} />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        {showLeftIcon && <IconStarOutlined size={16} />}
        {content}
      </div>
      {showRightIcon && (
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconStarOutlined size={16} />
        </div>
      )}
    </ListItemDemo>
  );
};

export const ListSpoiler = ListSpoilerTemplate.bind({});
ListSpoiler.args = {
  showLeftIcon: true,
  showRightIcon: true,
  content: "Default",
};

const ViewSectionTemplate = ({ content }) => {
  const [activated, setActivated] = useState(false);

  const toggleActivated = () => {
    setActivated((prev) => !prev);
  };
  return (
    <ListItemDemo onClick={toggleActivated} activated={activated}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 8,
          transform: `rotate(${activated ? "90deg" : "0"})`,
          transition: "transform 200ms",
        }}
      >
        <IconChevronRight size={16} />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>🤘 {content}</div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <IconGearSettings size={16} />
        <IconDragable size={16} />
      </div>
    </ListItemDemo>
  );
};

export const ViewSection = ViewSectionTemplate.bind({});
ViewSection.args = {
  content: "Default",
};

const ViewListItemTemplate = ({ content }) => {
  const [hover, setHover] = useState(false);
  const [activated, setActivated] = useState(false);
  return (
    <ListItemDemo
      onClick={() => setActivated((prev) => !prev)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      activated={activated}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 28,
          fontWeight: 400,
          fontSize: 14,
        }}
      >
        {content}
      </div>
      {(hover || activated) && (
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconPin size={12} />
        </div>
      )}
    </ListItemDemo>
  );
};

export const ViewListItem = ViewListItemTemplate.bind({});
ViewListItem.args = {
  content: "Default",
};
