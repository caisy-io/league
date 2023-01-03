import React, { FC, useState } from "react";
import { IconChevronUp, IconDragable, IconLock } from "../../icons";
import { IconSortAsc } from "../../icons/IconSortAsc";
import { STableHeaderButton } from "./styles/STableHeaderButton";
import { STableHeaderButtonIconWrapper } from "./styles/STableHeaderButtonIconWrapper";

interface ITableHeaderButton {
  locked?: boolean;
  sorted?: boolean;
  activated?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const TableHeaderButton: FC<ITableHeaderButton> = ({ children, locked, sorted, activated, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <STableHeaderButton
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      locked={locked}
    >
      {locked ? (
        <IconLock size={16} solid />
      ) : (
        (hover || activated) && (
          <STableHeaderButtonIconWrapper>
            <IconDragable size={16} />
          </STableHeaderButtonIconWrapper>
        )
      )}

      {sorted && <IconSortAsc />}
      {children}
      <STableHeaderButtonIconWrapper activated={activated}>
        <IconChevronUp size={16} />
      </STableHeaderButtonIconWrapper>
    </STableHeaderButton>
  );
};
