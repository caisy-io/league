import React, { FC, useState } from "react";
import { IconDragable } from "../..";
import { SLanguageFlagToggleListItem } from "./styles/SLanguageFlagToggleListItem";
import { Flag, Toggle } from "..";
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
  dragging: boolean;
  onLocaleToggle: (newValue: boolean) => void;
}

export const LanguageFlagToggleListItem: FC<ILanguageFlagToggleListItem> = ({ locale, onLocaleToggle, dragging }) => {
  return (
    <SLanguageFlagToggleListItem dragging={dragging}>
      <SLanguageFlagToggleListItemDragIcon>
        <IconDragable size={16} />
      </SLanguageFlagToggleListItemDragIcon>
      <Flag size={16} countryCode={locale.id} /> {locale.name}
      <SLanguageFlagToggleListItemToggleButton>
        <Toggle onChange={() => onLocaleToggle(!locale.active)} value={locale.active} />
      </SLanguageFlagToggleListItemToggleButton>
    </SLanguageFlagToggleListItem>
  );
};
