import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { IconCog, IconSwitchArrows } from "../../icons";
import { Badge, EBadgePosition } from "../badge";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { FlatActionButton } from "../flat-action-button";
import { Preview } from "../preview";
import { IPreview } from "../preview";
import { SFlexBadgeWrapper } from "./styles/SFlexBadgeWrapper";
import { SOrganizationSelectListItem } from "./styles/SOrganizationSelectListItem";
import { SOrganizationSelectListItemBadgeAndButtons } from "./styles/SOrganizationSelectListItemBadgeAndButtons";
import { SOrganizationSelectListItemBadgeAndButtonsDivider } from "./styles/SOrganizationSelectListItemBadgeAndButtonsDivider";
import { SOrganizationSelectListItemBadgeAndSettings } from "./styles/SOrganizationSelectListItemBadgeAndSettings";
import { SOrganizationSelectListItemLabel } from "./styles/SOrganizationSelectListItemLabel";
import { SOrganizationSelectListItemSettingsButton } from "./styles/SOrganizationSelectListItemSettingsButton";
import { SOrganizationSelectListItemTextWrapper } from "./styles/SOrganizationSelectListItemTextWrapper";
import { SOrganizationSelectListItemTitle } from "./styles/SOrganizationSelectListItemTitle";

export type IListItemSize = "large" | "medium";

export interface IOrganizationSelectListItemProps {
  title?: string | undefined;
  label?: string | undefined;
  imageUrl?: string | undefined;
  badgeText?: string | undefined;
  itemSize?: IListItemSize;
  previewProps?: IPreview;
  onClick?: any;
  onClickSettingButton?: () => void;
  onClickSwitchButton?: () => void;
  disabledSwitchButton?: boolean;
  active?: boolean;
}

interface ISFlex {
  badgeWitdh: number;
}

const SFlexListItem = styled(SFlex)<ISFlex>`
  gap: 0.75rem;
  height: 100%;
  width: ${(props) => `calc(100% - ${props.width}px - 0.5rem)`};
`;

export const OrganizationSelectListItem: FC<IOrganizationSelectListItemProps> = ({
  title,
  label,
  itemSize,
  previewProps,
  badgeText,
  onClick,
  onClickSettingButton,
  onClickSwitchButton,
  disabledSwitchButton,
  active,
}) => {
  const badgeRef = useRef<HTMLElement>(null);

  const [width, setWidth] = React.useState(0);

  // calculate width of the badge
  useEffect(() => {
    const badgeWidth = badgeRef.current ? badgeRef.current.offsetWidth : 0;
    setWidth(badgeWidth);
  }, [badgeText, badgeRef.current]);

  return (
    <SOrganizationSelectListItem onClick={onClick} active={active}>
      <SFlexListItem badgeText={badgeText} width={width}>
        <Preview size={itemSize === "large" ? 48 : 36} {...previewProps} />
        <SOrganizationSelectListItemTextWrapper>
          <SOrganizationSelectListItemTitle>{title}</SOrganizationSelectListItemTitle>
          <SOrganizationSelectListItemLabel itemSize={itemSize}>{label}</SOrganizationSelectListItemLabel>
        </SOrganizationSelectListItemTextWrapper>
      </SFlexListItem>
      <SOrganizationSelectListItemBadgeAndButtons>
        <SOrganizationSelectListItemBadgeAndSettings>
          {badgeText && (
            <SFlexBadgeWrapper>
              <Badge ref={badgeRef} value={badgeText} type="regular" size="medium" position={EBadgePosition.Center} />
            </SFlexBadgeWrapper>
          )}
          {onClickSettingButton && (
            <SOrganizationSelectListItemSettingsButton
              onClick={(e) => {
                e.stopPropagation();
                onClickSettingButton?.();
              }}
            >
              <IconCog size={16} />
            </SOrganizationSelectListItemSettingsButton>
          )}
        </SOrganizationSelectListItemBadgeAndSettings>
        {onClickSwitchButton && (
          <>
            <SOrganizationSelectListItemBadgeAndButtonsDivider />
            <FlatActionButton
              type="default"
              disabled={disabledSwitchButton}
              onClick={() => {
                onClickSwitchButton?.();
              }}
            >
              <IconSwitchArrows size={16} />
              Switch
            </FlatActionButton>
          </>
        )}
      </SOrganizationSelectListItemBadgeAndButtons>
    </SOrganizationSelectListItem>
  );
};
