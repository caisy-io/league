import React from "react";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { IconMoreMenuHorizontal } from "../../icons";
import { useDimensions } from "../../utils";
import { Popover } from "../popover";

import { STagListItem } from "./styles/STagListItem";
import { STagListItemLabel } from "./styles/STagListItemLabel";
import { STagListItemOutlineLabelWrapper } from "./styles/STagListItemOutlineLabelWrapper";

export interface ITagListItem {
  disabled?: boolean;
  activated?: boolean;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  outlineLabel?: React.ReactNode;
  flatActionButton?: React.ReactNode;
  onClick?: () => void;
  popover?: React.ReactNode;
}

export const TagListItem: React.FC<ITagListItem> = ({
  disabled,
  activated,
  label,
  leftIcon,
  rightIcon,
  outlineLabel,
  flatActionButton,
  onClick,
  popover,
}) => {
  const [opened, setOpened] = React.useState(false);

  const ref = React.useRef(null);

  const { width } = useDimensions(ref);

  return (
    <>
      <STagListItem ref={ref} disabled={disabled} activated={activated} onClick={onClick}>
        {label && <STagListItemLabel>{label}</STagListItemLabel>}
        <SFlex>
          {leftIcon}
          {outlineLabel && <STagListItemOutlineLabelWrapper>{outlineLabel}</STagListItemOutlineLabelWrapper>}
        </SFlex>
        {popover && (
          <div
            onClick={(event) => {
              event.stopPropagation();
              setOpened(true);
            }}
          >
            <IconMoreMenuHorizontal size={20} />
          </div>
        )}
        {rightIcon}
        {flatActionButton}
      </STagListItem>
      {opened && popover && (
        <Popover onClickOutside={() => setOpened(false)} disableTriangle placement="right" reference={ref}>
          <div style={{ width }}>{popover}</div>
        </Popover>
      )}
    </>
  );
};
