import React, { FC } from "react";
import { Toggle } from "..";
import { SToggleListItemChildren } from "./styles/SToggleListItemChildren";
import { SToggleListItemDescription } from "./styles/SToggleListItemDescription";
import { SToggleListItemIcon } from "./styles/SToggleListItemIcon";
import { SToggleListItemToggleWrapper } from "./styles/SToggleListItemToggleWrapper";
import { SToggleListItem } from "./styles/STogglesListItem";

interface IToggleListItem {
  size: "medium" | "small";
  active: boolean;
  onChange: (newValue: boolean) => void;
  description?: string;
  icon?: JSX.Element;
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
          value={active}
          onChange={() => {
            onChange(active);
          }}
        />
      </SToggleListItemToggleWrapper>
    </SToggleListItem>
  );
};
