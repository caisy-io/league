import {ListItem} from "./ListItem";
import {IconChevronRight, IconDragable, IconGearSettings, IconPin, IconStarOutlined} from "../../icons";
import {useState} from "react";

export default {
  title: "Components/Interactional/ListItem",
  component: ListItem,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=19%3A861",
    },
  },
};

const SmallListItemTemplate = ({showLeftIcon, showRightIcon, content}) => {
  const [activated, setActivated] = useState(false);
  
  const toggleActivated = () => {
    setActivated((prev) => !prev);
  };
  
  return (
    <ListItem onClick={toggleActivated} activated={activated}>
      {showLeftIcon && <IconStarOutlined size={16}/>}
      <p data-main>{content}</p>
      {showRightIcon && (
        <IconChevronRight size={16}/>
      )}
    </ListItem>
  );
};

export const SmallListItem = SmallListItemTemplate.bind({});
SmallListItem.args = {
  showLeftIcon: true,
  showRightIcon: true,
  content: "Default",
};

const ListSpoilerTemplate = ({showLeftIcon, showRightIcon, content}) => {
  const [activated, setActivated] = useState(false);
  
  const toggleActivated = () => {
    setActivated((prev) => !prev);
  };
  return (
    <ListItem onClick={toggleActivated} activated={activated}>
      <div style={{
        display: "flex",
        transformOrigin: 'center',
        transform: `rotate(${activated ? "90deg" : "0"})`,
        transition: "transform 200ms",
      }}>
        <IconChevronRight size={16}/>
      </div>
      {showLeftIcon && <IconStarOutlined size={16}/>}
      <p data-main>{content}</p>
      {showRightIcon && (
        <IconStarOutlined size={16}/>
      )}
    </ListItem>
  );
};

export const ListSpoiler = ListSpoilerTemplate.bind({});
ListSpoiler.args = {
  showLeftIcon: true,
  showRightIcon: true,
  content: "Default",
};

const ViewSectionTemplate = ({content}) => {
  const [activated, setActivated] = useState(false);
  
  const toggleActivated = () => {
    setActivated((prev) => !prev);
  };
  return (
    <ListItem onClick={toggleActivated} activated={activated}>
      <div style={{
        display: "flex",
        transformOrigin: "center",
        transform: `rotate(${activated ? "90deg" : "0"})`,
        transition: "transform 200ms",
      }}>
        <IconChevronRight size={16}/>
      </div>
      🤘
      <p data-main>{content}</p>
      <IconGearSettings size={16}/>
      <IconDragable size={16}/>
    </ListItem>
  );
};

export const ViewSection = ViewSectionTemplate.bind({});
ViewSection.args = {
  content: "Default",
};

const ViewListItemTemplate = ({content}) => {
  const [hover, setHover] = useState(false);
  const [activated, setActivated] = useState(false);
  return (
    <ListItem
      onClick={() => setActivated((prev) => !prev)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      activated={activated}
    >
      <p data-main>{content}</p>{" "}
      {(hover || activated) && (<IconPin size={16}/>)}
    </ListItem>
  );
};

export const ViewListItem = ViewListItemTemplate.bind({});
ViewListItem.args = {
  content: "Default",
};
