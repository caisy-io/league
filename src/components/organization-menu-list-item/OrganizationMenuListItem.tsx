import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { Badge, EBadgePosition } from "..";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { IconChevron } from "../../icons/IconChevron";
import { Preview } from "../preview";
import { IPreview } from "../preview/Preview";
import { SOrganizationMenuListItem } from "./styles/SOrganizationMenuListItem";
import { SOrganizationMenuListItemIconWrapper } from "./styles/SOrganizationMenuListItemIconWrapper";
import { SOrganizationMenuListItemLabel } from "./styles/SOrganizationMenuListItemLabel";
import { SOrganizationMenuListItemTextWrapper } from "./styles/SOrganizationMenuListItemTextWrapper";
import { SOrganizationMenuListItemTitle } from "./styles/SOrganizationMenuListItemTitle";

export type IListItemSize = "large" | "medium" | "small";

export interface IOrganizationMenuListItemProps {
  title?: string | undefined;
  label?: string | undefined;
  badgeValue?: string | undefined;
  itemSize?: IListItemSize;
  styleOverwrite?: string;
  previewProps?: IPreview;
  children?;
}

const SFlexListItem = styled(SFlex)`
  width: ${(props) => `calc(100% - ${props.width}px - 1.75rem)`};
  gap: 0.75rem;
  height: 100%;
`;

export const OrganizationMenuListItem: FC<IOrganizationMenuListItemProps> = ({
  title,
  label,
  badgeValue,
  itemSize,
  styleOverwrite,
  previewProps,
}) => {
  const badgeRef = useRef<HTMLElement>(null);
  const [width, setWidth] = React.useState(0);
  // calculate width of the badge
  useEffect(() => {
    const badgeWidth = badgeRef.current ? badgeRef.current.offsetWidth : 0;
    setWidth(badgeWidth);
  }, [badgeValue, badgeRef.current]);

  return (
    <SOrganizationMenuListItem itemSize={itemSize} styleOverwrite={styleOverwrite}>
      <SFlexListItem width={width}>
        {itemSize == "large" ? <Preview size={48} {...previewProps} /> : <Preview size={36} {...previewProps} />}
        <SOrganizationMenuListItemTextWrapper>
          <SOrganizationMenuListItemLabel itemSize={itemSize}>{label}</SOrganizationMenuListItemLabel>
          <SOrganizationMenuListItemTitle itemSize={itemSize}>{title}</SOrganizationMenuListItemTitle>
        </SOrganizationMenuListItemTextWrapper>
      </SFlexListItem>
      <SOrganizationMenuListItemIconWrapper>
        {badgeValue != undefined && (
          <Badge
            ref={badgeRef}
            value={badgeValue}
            position={EBadgePosition.Center}
            type={"regular"}
            size="small"
          ></Badge>
        )}
        <IconChevron />
      </SOrganizationMenuListItemIconWrapper>
    </SOrganizationMenuListItem>
  );
};
