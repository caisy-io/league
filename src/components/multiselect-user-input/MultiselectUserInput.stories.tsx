import React, { FC } from "react";
import { IMultiselectUserInput, MultiselectUserInput } from "./MultiselectUserInput";
import { SMultiselectUserInputOption } from "./styles/SMultiselectUserInputOption";
import { Avatar } from "../avatar";
import { SMultiselectUserInputNameEmailWrapper } from "./styles/SMultiselectUserInputNameEmailWrapper";
import { SMultiselectUserInputName } from "./styles/SMultiselectUserInputName";
import { SMultiselectUserInputEmail } from "./styles/SMultiselectUserInputEmail";

export default {
  title: `Components/Forms/MultiselectUserInput`,
  component: MultiselectUserInput,
  design: {
    type: "figma",
    url: "https://www.figma.com/file/XrUkpZwlWi2swxzvpte03J/Screens-%26-Flows?type=design&node-id=20236-521861&t=u7toaTM7XgZTRviu-4",
  },
};

const data = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    photo: "https://source.unsplash.com/random/201x200/?profile",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    photo: "https://source.unsplash.com/random/202x200/?profile",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    photo: null,
  },
  {
    id: "4",
    name: "Robert Williams",
    email: "robert@example.com",
    photo: "https://source.unsplash.com/random/203x200/?profile",
  },
  {
    id: "5",
    name: "Emily Davis",
    email: "emily@example.com",
    photo: "https://source.unsplash.com/random/204x200/?profile",
  },
  {
    id: "6",
    name: "Michael Brown",
    email: "michael@example.com",
    photo: null,
  },
  {
    id: "7",
    name: "Olivia Johnson",
    email: "olivia@example.com",
    photo: null,
  },
  {
    id: "8",
    name: "William Wilson",
    email: "william@example.com",
    photo: "https://source.unsplash.com/random/205x200/?profile",
  },
  {
    id: "9",
    name: "Sophia Martinez",
    email: "sophia@example.com",
    photo: "https://source.unsplash.com/random/206x200/?profile",
  },
  {
    id: "10",
    name: "James Anderson",
    email: "james@example.com",
    photo: null,
  },
  {
    id: "11",
    name: "Charlotte Taylor",
    email: "charlotte@example.com",
    photo: "https://source.unsplash.com/random/207x200/?profile",
  },
  {
    id: "12",
    name: "Daniel Clark",
    email: "daniel@example.com",
    photo: "https://source.unsplash.com/random/208x200/?profile",
  },
];

const MultiselectUserInputDemo: FC<IMultiselectUserInput> = ({ ...props }) => (
  <div style={{ padding: "10px", maxWidth: "744px" }}>
    <MultiselectUserInput {...props}>
      {data.map((item) => {
        return (
          <SMultiselectUserInputOption key={item.id}>
            {item.photo ? (
              <Avatar size={32} imageUrl={item.photo} />
            ) : (
              <Avatar size={32}>{item.name[0].trim().toUpperCase()}</Avatar>
            )}
            <SMultiselectUserInputNameEmailWrapper>
              {item.name && <SMultiselectUserInputName>{item.name}</SMultiselectUserInputName>}
              {item.email && <SMultiselectUserInputEmail>{item.email}</SMultiselectUserInputEmail>}
            </SMultiselectUserInputNameEmailWrapper>
          </SMultiselectUserInputOption>
        );
      })}
    </MultiselectUserInput>
  </div>
);

export const Default: any = MultiselectUserInputDemo.bind({});
Default.args = {
  label: "Users",
  placeholder: "Search a member",
  isRequired: true,
  // onChangeHandler: (e) => console.log(e.target.value),
};
