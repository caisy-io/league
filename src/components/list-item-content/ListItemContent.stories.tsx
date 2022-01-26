import React from "react";
import {IconChevronRight, IconStarOutlined} from "../../icons";
import {ListItem} from "../list-item";
import {ListItemContent} from './ListItemContent';

export default {
  title: `Components/ListItemContent`,
  component: ListItemContent,
  argTypes: {
    children: {
      description: "The element's content",
      control: {type: "text"},
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=19%3A861",
    },
  },
};


const Template = ({children}) => {
  const [activated, setActivated] = React.useState(false);
  return <ListItem onClick={() => setActivated(prevState => !prevState)} activated={activated}>
    <IconStarOutlined size={16}/>
    <ListItemContent>
      {children}
    </ListItemContent>
    <IconChevronRight size={16}/>
  </ListItem>
}

export const Default = Template.bind({});
Default.args = {
  children: 'Default'
};
