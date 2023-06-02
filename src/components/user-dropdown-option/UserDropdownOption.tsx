import React from "react";
import { SUserDropdownOption } from "./styles/SUserDropdownOption";
import { Avatar } from "../avatar";
import { SUserDropdownOptionNameEmailWrapper } from "./styles/SUserDropdownOptionNameEmailWrapper";
import { SUserDropdownOptionName } from "./styles/SUserDropdownOptionName";
import { SUserDropdownOptionEmail } from "./styles/SUserDropdownOptionEmail";

export interface IUserDropdownOption {
  cardData: {
    photo: string | null;
    name: string;
    email: string;
  };
  onClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

export const UserDropdownOption: React.FC<IUserDropdownOption> = ({ cardData, onClickHandler }) => {
  return (
    cardData && (
      <SUserDropdownOption onClick={onClickHandler}>
        {cardData.photo ? (
          <Avatar size={32} imageUrl={cardData.photo} />
        ) : (
          <Avatar size={32}>{cardData.name[0].trim().toUpperCase()}</Avatar>
        )}
        <SUserDropdownOptionNameEmailWrapper>
          {cardData.name && <SUserDropdownOptionName>{cardData.name}</SUserDropdownOptionName>}
          {cardData.email && <SUserDropdownOptionEmail>{cardData.email}</SUserDropdownOptionEmail>}
        </SUserDropdownOptionNameEmailWrapper>
      </SUserDropdownOption>
    )
  );
};
