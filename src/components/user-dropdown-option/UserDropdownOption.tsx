import React, { FC, MouseEventHandler } from "react";
import { SUserDropdownOption } from "./styles/SUserDropdownOption";
import { Avatar } from "../avatar";
import { SUserDropdownOptionNameEmailWrapper } from "./styles/SUserDropdownOptionNameEmailWrapper";
import { SUserDropdownOptionName } from "./styles/SUserDropdownOptionName";
import { SUserDropdownOptionEmail } from "./styles/SUserDropdownOptionEmail";

export interface IUserDropdownOption {
  photo: string | null;
    name: string;
    email: string;
  onClickHandler?: MouseEventHandler<HTMLDivElement>;
}

export const UserDropdownOption: FC<IUserDropdownOption> = ({ email,name,photo, onClickHandler }) => {
  return (
      <SUserDropdownOption onClick={onClickHandler}>
        {photo ? (
          <Avatar size={32} imageUrl={photo} />
        ) : (
          <Avatar size={32}>{name[0].trim().toUpperCase()}</Avatar>
        )}
        <SUserDropdownOptionNameEmailWrapper>
          {name && <SUserDropdownOptionName>{name}</SUserDropdownOptionName>}
          {email && <SUserDropdownOptionEmail>{email}</SUserDropdownOptionEmail>}
        </SUserDropdownOptionNameEmailWrapper>
      </SUserDropdownOption>
    
  );
};
