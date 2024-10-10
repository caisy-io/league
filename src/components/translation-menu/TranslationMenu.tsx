import React, { FC, ReactNode } from "react";
import { Collapsible } from "../collapsible";
import { MenuDnd } from "../menu-dnd";
import { IconChevronRight } from "../../icons";
import { STranslationMenu } from "./styles/STranslationMenu";
import { STranslationMenuHeader } from "./styles/STranslationMenuHeader";
import { ILanguageToggleListItemLocale, LanguageToggleListItem } from "../language-toggle-list-item";
import { STranslationMenuHeaderIconWrapper } from "./styles/STranslationMenuHeaderIconWrapper";

export interface ITranslationMenu {
  opened: boolean | true;
  locales: ILanguageToggleListItemLocale[];
  onToggleOpened: (newOpened: boolean) => void;
  onLocalesChange: (newLocales: ILanguageToggleListItemLocale[]) => void;
  translationsText?: string | ReactNode;
  autoTranslateButton?: ReactNode;
}

export const TranslationMenu: FC<ITranslationMenu> = ({
  locales,
  opened,
  onToggleOpened,
  onLocalesChange,
  translationsText,
  autoTranslateButton,
}) => {
  const onDrop = (fromIndex: number, toIndex: number) => {
    const newLocales = locales.slice();
    newLocales.splice(toIndex, 0, newLocales.splice(fromIndex, 1)[0]);
    onLocalesChange(newLocales);
  };

  const onToggle = (localeId: string) => {
    const isCurrentlyActive = !!(locales as ILanguageToggleListItemLocale[]).find((locale) => locale.id === localeId)
      ?.active;
    const newLocales = locales.map((locale: ILanguageToggleListItemLocale) =>
      locale.id === localeId ? { ...locale, active: !isCurrentlyActive } : locale,
    );
    onLocalesChange(newLocales);
  };

  return (
    <STranslationMenu hasAutoTranslateButton={!!autoTranslateButton}>
      <STranslationMenuHeader onClick={() => onToggleOpened(!opened)} opened={opened}>
        <STranslationMenuHeaderIconWrapper opened={opened}>
          <IconChevronRight size={20} />
        </STranslationMenuHeaderIconWrapper>
        {translationsText || "Translations"}
      </STranslationMenuHeader>
      <Collapsible expanded={opened}>
        <MenuDnd onDrop={onDrop}>
          {locales?.map((locale) => {
            return <LanguageToggleListItem key={locale.id} onToggle={() => onToggle(locale.id)} locale={locale} />;
          })}
        </MenuDnd>
        {autoTranslateButton && autoTranslateButton}
      </Collapsible>
    </STranslationMenu>
  );
};
