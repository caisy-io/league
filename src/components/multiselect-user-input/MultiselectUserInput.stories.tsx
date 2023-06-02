import React, { FC, useState, ChangeEvent } from "react";
import { IMultiselectUserInput, MultiselectUserInput } from "./MultiselectUserInput";
import { UserDropdownOption } from "../user-dropdown-option/UserDropdownOption";
import { SelectedUserBadge } from "../selected-user-badge/SelectedUserBadge";

export default {
  title: `Components/Forms/MultiselectUserInput`,
  component: MultiselectUserInput,
  design: {
    type: "figma",
    url: "https://www.figma.com/file/XrUkpZwlWi2swxzvpte03J/Screens-%26-Flows?type=design&node-id=20236-521861&t=bkpbpXJTVHgnO2id-0",
  },
};

type TData = {
  id: string;
  name: string;
  email: string;
  photo: string | null;
}[];

const data: TData = [
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
];

const MultiselectUserInputDemo: FC<IMultiselectUserInput> = ({ ...props }) => {
  const [selectedUsersData, SetSelectedUsersData] = useState<TData>([]);
  const [searchOptions, setSearchOptions] = useState<TData>(data);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;

    const searchResultByName = [...searchOptions].sort((a, b) => {
      if (
        a.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        !b.name.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return -1;
      } else if (
        !a.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        b.name.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return 1;
      }
      return 0;
    });

    setSearchOptions(searchResultByName);
  };

  const onClickHandler = (item) => {
    SetSelectedUsersData((prev) => [...prev, item]);
  };

  const onDeleteHandler = (id) => {
    SetSelectedUsersData((prev) => prev.filter((item) => item.id !== id));
  };

  const selectedUsers = selectedUsersData.map((item) => (
    <SelectedUserBadge
      key={`item-${item.id}`}
      email={selectedUsersData.length >= 3 ? `${item.email.substring(0, 3)}...` : item.email}
      name={selectedUsersData.length >= 3 ? `${item.name.substring(0, 3)}...` : item.name}
      photo={item.photo}
      onDeleteHandler={() => onDeleteHandler(item.id)}
    />
  ));

  return (
    <div style={{ padding: "10px", maxWidth: "744px" }}>
      <MultiselectUserInput {...props} onChangeHandler={onChangeHandler} selectedUsers={selectedUsers}>
        {searchOptions.map((item) => {
          return <UserDropdownOption {...item} key={item.id} onClickHandler={() => onClickHandler(item)} />;
        })}
      </MultiselectUserInput>
    </div>
  );
};

export const Default: any = MultiselectUserInputDemo.bind({});
Default.args = {
  label: "Users",
  placeholder: "Search a member",
  isRequired: true,
};

const UserNotFound: FC<IMultiselectUserInput> = ({ ...props }) => {
  const [searchOptions] = useState<TData>([{ id: "0", name: "", email: "new_user@example.com", photo: null }]);

  const [selectedUsersData, SetSelectedUsersData] = useState<TData>([]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onClickHandler = (item) => {
    SetSelectedUsersData((prev) => [...prev, item]);
  };

  const onDeleteHandler = (id) => {
    SetSelectedUsersData((prev) => prev.filter((item) => item.id !== id));
  };

  const selectedUsers = selectedUsersData.map((item) => {
    console.log(item);
    return (
      <SelectedUserBadge
        key={`item-${item.id}`}
        userFound={false}
        email={item.email}
        onDeleteHandler={() => onDeleteHandler(item.id)}
      />
    );
  });

  return (
    <div style={{ padding: "10px", maxWidth: "744px" }}>
      <MultiselectUserInput {...props} onChangeHandler={onChangeHandler} selectedUsers={selectedUsers}>
        {searchOptions.map((item) => {
          return (
            <UserDropdownOption
              {...item}
              key={item.id}
              onClickHandler={() => onClickHandler(item)}
              userFound={false}
              notFoundText="Invite as new member"
            />
          );
        })}
      </MultiselectUserInput>
    </div>
  );
};

export const InviteNewUser: any = UserNotFound.bind({});
InviteNewUser.args = {
  label: "Users",
  placeholder: "Search a member",
  isRequired: true,
};
