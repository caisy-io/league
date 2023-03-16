import React from "react";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { IconMoreMenuHorizontal } from "../../icons";
import { ClickOutside } from "../../utils";
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
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
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

  return (
    <>
      <STagListItem ref={ref} disabled={disabled} activated={activated} onClick={onClick}>
        {label && <STagListItemLabel>{label}</STagListItemLabel>}
        <SFlex>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {leftIcon}
          </div>
          {outlineLabel && <STagListItemOutlineLabelWrapper>{outlineLabel}</STagListItemOutlineLabelWrapper>}
        </SFlex>
        {popover && (
          <ClickOutside onClickOutside={() => setOpened(false)}>
            <div>
              <div onClick={() => setOpened((prev) => !prev)}>
                <IconMoreMenuHorizontal size={20} />
              </div>
              <Popover display={opened} disableTriangle placement="right" reference={ref}>
                <div>{popover}</div>
              </Popover>
            </div>
          </ClickOutside>
        )}
        {rightIcon}
        {flatActionButton}
      </STagListItem>
    </>
  );
};
