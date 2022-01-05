import React, { FC } from "react";
import { IconDragable } from "../../icons";
import { SLanguageFlagToggleListItem } from "./styles/SLanguageFlagToggleListItem";
import { Flag } from "../flag";
import { Toggle } from "../toggle";
import { ICountryCode } from "../flag/IFlag";
import { SLanguageFlagToggleListItemDragIcon } from "./styles/SLanguageFlagToggleListItemDragIcon";
import { SLanguageFlagToggleListItemToggleButton } from "./styles/SLanguageFlagToggleListItemToggleButton";

export interface ILanguageFlagToggleListItemLocale {
  id: ICountryCode;
  name: string;
  active: boolean;
}

interface ILanguageFlagToggleListItem {
  locale: ILanguageFlagToggleListItemLocale;
  onLocaleToggle: (newValue: boolean) => void;
  onDrag?: (event: DragEvent) => void;
  onDragStart?: (event: DragEvent) => void;
  onDragEnd?: (event: DragEvent) => void;
}

export const LanguageFlagToggleListItem: FC<ILanguageFlagToggleListItem> = ({
  locale,
  onLocaleToggle,
  onDrag,
  onDragStart,
  onDragEnd,
}) => {
  return (
    <SLanguageFlagToggleListItem draggable={true} onDrag={onDrag} onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <SLanguageFlagToggleListItemDragIcon>
        <IconDragable size={16} />
      </SLanguageFlagToggleListItemDragIcon>
      <Flag size={16} countryCode={locale.id} /> {locale.name}
      <SLanguageFlagToggleListItemToggleButton>
        <Toggle onChange={() => onLocaleToggle(!locale.active)} activated={locale.active} />
      </SLanguageFlagToggleListItemToggleButton>
    </SLanguageFlagToggleListItem>
  );
};
