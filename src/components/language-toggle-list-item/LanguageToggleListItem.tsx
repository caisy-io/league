import React, { FC } from "react";
import { IconDragable } from "../../icons";
import { SLanguageFlagToggleListItem } from "./styles/SLanguageFlagToggleListItem";
import { Toggle } from "../toggle";
import { SLanguageFlagToggleListItemDragIcon } from "./styles/SLanguageFlagToggleListItemDragIcon";
import { SLanguageFlagToggleListItemToggleButton } from "./styles/SLanguageFlagToggleListItemToggleButton";

export interface ILanguageToggleListItemLocale {
  id: string;
  localeCode: string;
  name: string;
  active: boolean;
}

interface ILanguageToggleListItem {
  locale: ILanguageToggleListItemLocale;
  onToggle: (newValue: boolean) => void;
  onDrag?: (event: DragEvent) => void;
  onDragStart?: (event: DragEvent) => void;
  onDragEnd?: (event: DragEvent) => void;
}

export const LanguageToggleListItem: FC<ILanguageToggleListItem> = ({
  locale,
  onToggle,
  onDrag,
  onDragStart,
  onDragEnd,
}) => {
  return (
    <SLanguageFlagToggleListItem draggable={true} onDrag={onDrag} onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <SLanguageFlagToggleListItemDragIcon>
        <IconDragable size={16} />
      </SLanguageFlagToggleListItemDragIcon>
      {locale?.localeCode?.toUpperCase()}{" "} {locale.name}
      <SLanguageFlagToggleListItemToggleButton>
        <Toggle onChange={() => onToggle(!locale.active)} activated={locale.active} />
      </SLanguageFlagToggleListItemToggleButton>
    </SLanguageFlagToggleListItem>
  );
};
