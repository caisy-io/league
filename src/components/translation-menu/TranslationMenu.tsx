import React, { FC } from "react";
import { Collapsible } from "../collapsible";
import { MenuDnd } from "../menu-dnd";
import { IconChevron } from "../../icons";
import { STranslationMenu } from "./styles/STranslationMenu";
import { STranslationMenuHeader } from "./styles/STranslationMenuHeader";
import {
  ILanguageFlagToggleListItemLocale,
  LanguageFlagToggleListItem,
} from "../language-flag-toggle-list-item/LanguageFlagToggleListItem";

export interface ITranslationMenu {
  opened: boolean | true;
  locales: ILanguageFlagToggleListItemLocale[];
  onToggleOpened: (newOpened: boolean) => void;
  onLocalesChange: (newLocales: ILanguageFlagToggleListItemLocale[]) => void;
}

export const TranslationMenu: FC<ITranslationMenu> = ({ locales, opened, onToggleOpened, onLocalesChange }) => {
  const onDrop = (fromIndex: number, toIndex: number) => {
    const newLocales = locales.slice();
    newLocales.splice(toIndex, 0, newLocales.splice(fromIndex, 1)[0]);
    onLocalesChange(newLocales);
  };

  const onLocaleToggle = (localeId: string) => {
    const isCurrentlyActive = !!(locales as ILanguageFlagToggleListItemLocale[]).find(
      (locale) => locale.id === localeId,
    )?.active;
    const newLocales = locales.map((locale: ILanguageFlagToggleListItemLocale) =>
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
            return (
              <LanguageFlagToggleListItem
                key={locale.id}
                onLocaleToggle={() => onLocaleToggle(locale.id)}
                locale={locale}
              />
            );
          })}
        </MenuDnd>
      </Collapsible>
    </STranslationMenu>
  );
};
