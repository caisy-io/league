import React, { FC } from "react";
import { ISelectedUserBadge, SelectedUserBadge } from "./SelectedUserBadge";

export default {
  title: `Components/Forms/MultiselectUserInput/SelectedUserBadge`,
  component: SelectedUserBadge,
};

const SelectedUserBadgeDemo: FC<ISelectedUserBadge> = ({ ...props }) => <SelectedUserBadge {...props} />;

export const WithPhoto: any = SelectedUserBadgeDemo.bind({});
WithPhoto.args = {
  id: "2",
  name: "Jane Smith",
  email: "jane@example.com",
  photo: "https://source.unsplash.com/random/202x200/?profile",
  onCloseHandler: () => console.log("Close"),
};

export const WithoutPhoto: any = SelectedUserBadgeDemo.bind({});
WithoutPhoto.args = {
  id: "3",
  name: "Alice Johnson",
  email: "alice@example.com",
  photo: null,
  onCloseHandler: () => console.log("Close"),
};

export const SendInvitation: any = SelectedUserBadgeDemo.bind({});
SendInvitation.args = {
  id: "3",
  name: "Alice Johnson",
  email: "alice@example.com",
  photo: null,
  userFound: false,
  onCloseHandler: () => console.log("Close"),
};
