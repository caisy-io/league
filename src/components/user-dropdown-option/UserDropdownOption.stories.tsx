import React, { FC } from "react";
import { IUserDropdownOption, UserDropdownOption } from "./UserDropdownOption";
import { SMultiselectUserInputDropdown } from "../multiselect-user-input/styles/SMultiselectUserInputDropdown";

export default {
  title: `Components/Forms/MultiselectUserInput/UserDropdownOption`,
  component: UserDropdownOption,
  design: {
    type: "figma",
    url: "https://www.figma.com/file/XrUkpZwlWi2swxzvpte03J/Screens-%26-Flows?type=design&node-id=20236-521861&t=bkpbpXJTVHgnO2id-0",
  },
};

const UserDropdownOptionDemo: FC<IUserDropdownOption> = ({ ...props }) => (
  <div style={{ padding: "10px", maxWidth: "330px" }}>
    <SMultiselectUserInputDropdown>
      <UserDropdownOption {...props} />
    </SMultiselectUserInputDropdown>
  </div>
);

export const WithProfilePicture: any = UserDropdownOptionDemo.bind({});
WithProfilePicture.args = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  photo: "https://source.unsplash.com/random/201x200/?profile",
  onClickHandler: () => console.log("clicked"),
};

export const NoProfilePicture: any = UserDropdownOptionDemo.bind({});
NoProfilePicture.args = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  photo: null,
  onClickHandler: () => console.log("clicked"),
};
