import {FC, ReactNode} from "react";
import {SActiveUserAvatar} from "./styles/SActiveUserAvatar";
import {SActiveUserAvatarBadge} from "./styles/SActiveUserAvatarBadge";
import {SActiveUserAvatarImageContainer} from "./styles/SActiveUserAvatarImageContainer";

interface IActiveUserAvatar {
  children: ReactNode;
  color: string;
  activated?: boolean;
  onClick?: (e: PointerEvent) => void;
  size?: "small" | "medium";
}

export const ActiveUserAvatar: FC<IActiveUserAvatar> = ({children, color, activated, onClick, size}) => {
  return (
    <SActiveUserAvatar onClick={onClick} color={color} activated={activated} size={size}>
      <SActiveUserAvatarImageContainer size={size}>{children}</SActiveUserAvatarImageContainer>
      <SActiveUserAvatarBadge color={color}/>
    </SActiveUserAvatar>
  );
};
