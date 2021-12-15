import React from "react";
import { SListItem } from "./styles/SListItem";
import { SListItemTitle } from "./styles/SListItemTitle";
import { SListItemDescription } from "./styles/SListItemDescription";
import { SListItemAvatar } from "./styles/SListItemAvatar";
import { SListItemContentWrapper } from "./styles/SListItemContentWrapper";
import { SListItemChildren } from "./styles/SListItemChildren";
import { Divider } from "../divider/Divider";

interface IListItemLegacy {
  title?: React.ReactNode;
  description?: React.ReactNode;
  avatar?: string;
  childrenStyle?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const ListItemLegacy: React.FC<IListItemLegacy> = ({
  title,
  description,
  avatar,
  childrenStyle,
  children,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <SListItem>
        {avatar ? <SListItemAvatar src={avatar} /> : null}
        <SListItemContentWrapper>
          <SListItemTitle>{title}</SListItemTitle>
          <SListItemDescription>{description}</SListItemDescription>
        </SListItemContentWrapper>
        <SListItemChildren style={childrenStyle}>{children}</SListItemChildren>
      </SListItem>
      <Divider marginTop={8} marginBottom={8} />
    </div>
  );
};
