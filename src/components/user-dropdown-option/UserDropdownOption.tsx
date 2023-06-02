import React, { FC, MouseEventHandler } from "react";
import { SUserDropdownOption } from "./styles/SUserDropdownOption";
import { Avatar } from "../avatar";
import { SUserDropdownOptionNameEmailWrapper } from "./styles/SUserDropdownOptionNameEmailWrapper";
import { SUserDropdownOptionName } from "./styles/SUserDropdownOptionName";
import { SUserDropdownOptionEmail } from "./styles/SUserDropdownOptionEmail";
import { SUserDropdownOptionInviteIcon } from "./styles/SUserDropdownOptionInviteIcon";
import { IconSendInvitation } from "../../icons/IconSendInvitation";

export interface IUserDropdownOption {
  photo: string | null;
  name: string;
  email: string;
  onClickHandler?: MouseEventHandler<HTMLDivElement>;
  userFound?: boolean;
  notFoundText?: string;
}

export const UserDropdownOption: FC<IUserDropdownOption> = ({
  email,
  name,
  photo,
  onClickHandler,
  userFound = true,
  notFoundText,
}) => {
  return (
    <SUserDropdownOption onClick={onClickHandler}>
      {userFound ? (
        <>
          {photo ? <Avatar size={32} imageUrl={photo} /> : <Avatar size={32}>{name?.[0]?.trim().toUpperCase()}</Avatar>}
          <SUserDropdownOptionNameEmailWrapper>
            {name && <SUserDropdownOptionName>{name}</SUserDropdownOptionName>}
            {email && <SUserDropdownOptionEmail>{email}</SUserDropdownOptionEmail>}
          </SUserDropdownOptionNameEmailWrapper>
        </>
      ) : (
        <>
          <SUserDropdownOptionInviteIcon>
            <IconSendInvitation size={20} />
          </SUserDropdownOptionInviteIcon>
          <SUserDropdownOptionNameEmailWrapper>
            {notFoundText && <SUserDropdownOptionName>{notFoundText}</SUserDropdownOptionName>}
            {email && <SUserDropdownOptionEmail>{email}</SUserDropdownOptionEmail>}
          </SUserDropdownOptionNameEmailWrapper>
        </>
      )}
    </SUserDropdownOption>
  );
};
