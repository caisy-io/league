import { FC, useState } from "react";
import { SActiveUserAvatar } from "./styles/SActiveUserAvatar";
import { SActiveUserAvatarBadge } from "./styles/SActiveUserAvatarBadge";
import { SActiveUserAvatarImageContainer } from "./styles/SActiveUserAvatarImageContainer";

interface IActiveUserAvatar {
  children: React.ReactNode;
  color: string;
  activated?: boolean;
  onClick?: (e: PointerEvent) => void;
}

export const ActiveUserAvatar: FC<IActiveUserAvatar> = ({ children, color, activated, onClick }) => {
  return (
    <SActiveUserAvatar onClick={onClick} color={color} activated={activated}>
      <SActiveUserAvatarImageContainer>{children}</SActiveUserAvatarImageContainer>
      <SActiveUserAvatarBadge color={color} />
    </SActiveUserAvatar>
  );
};
