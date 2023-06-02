import React from "react";
import { SSelectedUserBadge } from "./styles/SSelectedUserBadge";
import { Avatar } from "../avatar";
import { SSelectedUserBadgeName } from "./styles/SSelectedUserBadgeName";
import { SSelectedUserBadgeIcon } from "./styles/SSelectedUserBadgeIcon";
import { IconClose } from "../../icons";
import { IconSendInvitation } from "../../icons/IconSendInvitation";

export interface ISelectedUserBadge {
  photo: string | null;
  name: string;
  email: string;
  onDeleteHandler?: React.MouseEventHandler<HTMLDivElement>;
  userFound?: boolean;
}

export const SelectedUserBadge: React.FC<ISelectedUserBadge> = ({
  email,
  name,
  photo,
  onDeleteHandler,
  userFound = true,
}) => {
  return (
    <SSelectedUserBadge>
      {userFound ? (
        <>
          {photo ? <Avatar size={20} imageUrl={photo} /> : <Avatar size={20}>{name[0].trim().toUpperCase()}</Avatar>}
          {name && <SSelectedUserBadgeName>{name}</SSelectedUserBadgeName>}
        </>
      ) : (
        email && (
          <>
            <SSelectedUserBadgeIcon>
              <IconSendInvitation size={20} />
            </SSelectedUserBadgeIcon>
            <SSelectedUserBadgeName>{email}</SSelectedUserBadgeName>
          </>
        )
      )}
      <SSelectedUserBadgeIcon onClick={onDeleteHandler}>
        <IconClose size={20} />
      </SSelectedUserBadgeIcon>
    </SSelectedUserBadge>
  );
};
