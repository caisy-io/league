import React, { Fragment, useEffect, useState } from "react";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { MenuDnd } from "../menu-dnd/MenuDnd";
import { SCardBody } from "../card/styles/SCardBody";
import { SCardHeader } from "../card/styles/SCardHeader";
import { SCardHeaderTitle } from "../card/styles/SCardHeaderTitle";
import { IconDragable } from "../../icons/IconDragable";
import { IconEyeHidden } from "../../icons/IconEyeHidden";
import { IconEye } from "../../icons/IconEye";
import { IconTranslate } from "../../icons/IconTranslate";
import { Collapsible } from "../collapsible";
import { STranslationMenu } from "./styles/STranslationMenu";
import { IconAngleCollapse } from "../../icons/IconAngleCollapse";
import { IconAngleExpand } from "../../icons/IconAngleExpand";
import { STranslationMenuRow } from "./styles/STranslationMenuRow";
import { STranslationMenuRowRight } from "./styles/STranslationMenuRowRight";
import { ITranslationMenuLegacy, ITranslationMenuLegacyState, ITranslationMenuLegacyLocale } from "./types";

export const TranslationMenuLegacy: React.FC<ITranslationMenuLegacy> = ({ initialState, onChange }) => {
  const [expanded, setExpanded] = useState<boolean>(initialState?.expanded || false);
  const [locales, setLocales] = useState<ITranslationMenuLegacyLocale[]>(initialState?.locales || []);

  useEffect(() => {
    if (locales != initialState?.locales) {
      setLocales(initialState?.locales);
    }
  }, [initialState]);

  const onLocaleToggle = (id) => {
    const isCurrentlyActive = !!(locales as ITranslationMenuLegacyLocale[]).find((locale) => locale.id === id)?.active;
    const newLocales = initialState?.locales?.map((locale: ITranslationMenuLegacyLocale) =>
      locale.id === id ? { ...locale, active: !isCurrentlyActive } : locale,
    );
    onChange({ locales: newLocales, expanded });
    setLocales(newLocales);
  };

  const onExpandToggle = () => {
    onChange({ locales: initialState?.locales, expanded: !expanded });
    setExpanded(!expanded);
  };

  const onDrop = (fromIndex: number, toIndex: number) => {
    const newLocales = locales.slice();
    newLocales.splice(toIndex, 0, newLocales.splice(fromIndex, 1)[0]);
    setLocales(newLocales);
    onChange({ locales: newLocales, expanded });
  };

  return (
    <STranslationMenu>
      <Card>
        <SCardHeader>
          <SCardHeaderTitle style={{ display: "flex" }}>
            <IconTranslate /> Translations
          </SCardHeaderTitle>
          <Button onClick={onExpandToggle} size={"small"}>
            {expanded ? <IconAngleCollapse /> : <IconAngleExpand />}
          </Button>
        </SCardHeader>
        <Collapsible expanded={expanded}>
          <SCardBody>
            <MenuDnd onDrop={onDrop}>
              {locales?.map((locale) => {
                return (
                  <Fragment key={locale.id}>
                    <STranslationMenuRow>
                      <h4 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <IconDragable /> {locale.name || ""}
                      </h4>
                      <STranslationMenuRowRight>
                        {locale.default && <p>Default</p>}
                        <Button
                          disabled={locale.default}
                          onClick={() => !locale.default && onLocaleToggle(locale.id)}
                          type={"tertiary"}
                          size={"small"}
                        >
                          {locale.active ? <IconEye /> : <IconEyeHidden />}
                        </Button>
                      </STranslationMenuRowRight>
                    </STranslationMenuRow>
                  </Fragment>
                );
              })}
            </MenuDnd>
          </SCardBody>
        </Collapsible>
      </Card>
    </STranslationMenu>
  );
};
