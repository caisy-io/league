import React, { FC } from "react";
import { IconChevronUp, IconDragable, IconLock } from "../..";
import { IconSortAsc } from "../../icons/IconSortAsc";
import { STableHeaderButton } from "./styles/STableHeaderButton";
import { STableHeaderButtonIconWrapper } from "./styles/STableHeaderButtonIconWrapper";

interface ITableHeaderButton {
  locked?: boolean;
  sorted?: boolean;
  activated?: boolean;
  onClick?: () => void;
}

export const TableHeaderButton: FC<ITableHeaderButton> = ({ children, locked, sorted, activated, onClick }) => {
  return (
    <STableHeaderButton onClick={onClick} locked={locked}>
      {locked ? (
        <IconLock />
      ) : (
        <STableHeaderButtonIconWrapper>
          <IconDragable size={16} />
        </STableHeaderButtonIconWrapper>
      )}

      {sorted && <IconSortAsc />}
      {children}
      <STableHeaderButtonIconWrapper activated={activated}>
        <IconChevronUp size={16} />
      </STableHeaderButtonIconWrapper>
    </STableHeaderButton>
  );
};
