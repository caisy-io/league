import React, { FC } from "react";
import { IconDragable } from "../../icons";
import { SLanguageFlagToggleListItem } from "./styles/SLanguageFlagToggleListItem";
import { Toggle } from "../toggle";
import { SLanguageFlagToggleListItemDragIcon } from "./styles/SLanguageFlagToggleListItemDragIcon";
import { SLanguageFlagToggleListItemToggleButton } from "./styles/SLanguageFlagToggleListItemToggleButton";
import { TranslationBadge } from "../input-fields";

export interface ILanguageToggleListItemLocale {
  id: string;
  apiName: string;
}

interface ILanguageToggleListItem {
  locale: ILanguageToggleListItemLocale;
  active: boolean;
  onToggle: (newValue: boolean) => void;
  onDrag?: (event: DragEvent) => void;
  onDragStart?: (event: DragEvent) => void;
  onDragEnd?: (event: DragEvent) => void;
}

export const LanguageToggleListItem: FC<ILanguageToggleListItem> = ({
  locale,
  active,
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
      {locale?.apiName?.toUpperCase()}
      <SLanguageFlagToggleListItemToggleButton>
        <Toggle onChange={() => onToggle(!active)} activated={active} />
      </SLanguageFlagToggleListItemToggleButton>
    </SLanguageFlagToggleListItem>
  );
};
