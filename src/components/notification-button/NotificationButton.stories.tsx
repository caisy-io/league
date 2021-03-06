import React from "react";
import { NotificationButton } from "./NotificationButton";
import { IconDocumentsComponents } from "../../icons";
import { Img } from "../../base-components/img";

export default {
  title: `Components/Notifications/NotificationButton`,
  component: NotificationButtonDemo,
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1763%3A42449",
    },
  },
};

function NotificationButtonDemo({ children }) {
  return children;
}

const UserTemplate = ({ content }) => (
  <NotificationButtonDemo>
    <NotificationButton
      image={
        <Img
          lazyload={false}
          src={
            "https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="!
          }
          resolution={48}
        />
      }
    >
      {content}
    </NotificationButton>
  </NotificationButtonDemo>
);

export const User = UserTemplate.bind({});
User.args = {
  content: "John Doe",
};

const DocumentTemplate = ({ content }) => (
  <NotificationButtonDemo>
    <NotificationButton icon={<IconDocumentsComponents size={16} />}>{content}</NotificationButton>
  </NotificationButtonDemo>
);

export const Document = DocumentTemplate.bind({});
Document.args = {
  content: "Document",
};
