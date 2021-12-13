import React, { FC, Fragment } from "react";
import { Button, Collapsible, MenuDnd, Toggle } from "..";
import { IconChevron, IconDragable, IconEye, IconEyeHidden } from "../..";
import { STranslationMenuRow } from "./styles/STranslationMenuRow";
import { STranslationMenuRowRight } from "../translation-menu-legacy/styles/STranslationMenuRowRight";
import { STranslationMenu } from "./styles/STranslationMenu";
import { STranslationMenuHeader } from "./styles/STranslationMenuHeader";

export interface ITranslationMenuLocale {
  id: string;
  name: string;
  active: boolean;
  default?: boolean;
}

interface ITranslationMenu {
  opened: boolean | true;
  locales: ITranslationMenuLocale[];
  onToggleOpened: (newOpened: boolean) => void;
  onLocalesChange: (newLocales: ITranslationMenuLocale[]) => void;
}

export const TranslationMenu: FC<ITranslationMenu> = ({ locales, opened, onToggleOpened, onLocalesChange }) => {
  const onDrop = (fromIndex: number, toIndex: number) => {
    const newLocales = locales.slice();
    newLocales.splice(toIndex, 0, newLocales.splice(fromIndex, 1)[0]);
    onLocalesChange(newLocales);
  };

  const onLocaleToggle = (localeId: string) => {
    const isCurrentlyActive = !!(locales as ITranslationMenuLocale[]).find((locale) => locale.id === localeId)?.active;
    const newLocales = locales.map((locale: ITranslationMenuLocale) =>
      locale.id === localeId ? { ...locale, active: !isCurrentlyActive } : locale,
    );
    onLocalesChange(newLocales);
  };

  return (
    <STranslationMenu>
      <STranslationMenuHeader onClick={() => onToggleOpened(!opened)} opened={opened}>
        <IconChevron /> Translations
      </STranslationMenuHeader>
      <Collapsible expanded={opened}>
        <MenuDnd onDrop={onDrop}>
          {locales?.map((locale) => {
            return <div>{locale.name}</div>;
          })}
        </MenuDnd>
      </Collapsible>
    </STranslationMenu>
  );
};
