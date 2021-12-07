import React from "react";
import { Img } from "../../base-components/img/Img";
import { NotificationsGroupSelectListItem } from './NotificationsGroupSelectListItem';

export default {
  title: `Components/NotificationsGroupSelectListItem`,
  component: NotificationsGroupSelectListItemDemo,
  argTypes: {
    title: {
      description: "Changes the title text of the component",
      control: { type: "text" },
    },
    activated: {
      description: "Changes the state of the component to activated",
      control: { type: "boolean" },
    },
  },
};

function NotificationsGroupSelectListItemDemo({ content, ...args }) {

  const [onActivated, setActivated] = React.useState(false);
  
  return <NotificationsGroupSelectListItem activated={onActivated} onChange={(e) => setActivated(e)} title={args.title} previewProps={{ image: <Img lazyload={false} src={"https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!} resolution={48} /> }}>
  </NotificationsGroupSelectListItem>
}

const Template = (args) => < NotificationsGroupSelectListItemDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Default",
  label: "Label",
  activated: false,
};