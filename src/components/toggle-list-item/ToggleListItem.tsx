import React, { FC, ReactNode } from "react";
import { Toggle } from "../toggle";
import { SToggleListItemChildren } from "./styles/SToggleListItemChildren";
import { SToggleListItemDescription } from "./styles/SToggleListItemDescription";
import { SToggleListItemIcon } from "./styles/SToggleListItemIcon";
import { SToggleListItemToggleWrapper } from "./styles/SToggleListItemToggleWrapper";
import { SToggleListItem } from "./styles/STogglesListItem";

interface IToggleListItem {
  size: "medium" | "small";
  active: boolean;
  onChange: (newValue: boolean) => void;
  description?: string | ReactNode;
  icon?: JSX.Element;
  children?: React.ReactNode;
}

export const ToggleListItem: FC<IToggleListItem> = ({ children, size, onChange, active, description, icon }) => {
  const withIcon = !!icon;
  const withDescription = !!description;

  return (
    <SToggleListItem
      onClick={() => {
        onChange(!active);
      }}
      size={size}
    >
      {withIcon && <SToggleListItemIcon>{icon}</SToggleListItemIcon>}
      <SToggleListItemChildren withDescription={withDescription}>
        {children}
        {withDescription && <SToggleListItemDescription>{description}</SToggleListItemDescription>}
      </SToggleListItemChildren>
      <SToggleListItemToggleWrapper withDescription={withDescription}>
        <Toggle
          activated={active}
          onChange={() => {
            onChange(active);
          }}
        />
      </SToggleListItemToggleWrapper>
    </SToggleListItem>
  );
};
