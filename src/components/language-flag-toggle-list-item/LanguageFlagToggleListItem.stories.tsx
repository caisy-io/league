import React, { useEffect, useState } from "react";
import { LanguageFlagToggleListItem } from "./LanguageFlagToggleListItem";

function LanguageFlagToggleListItemDemo({ localeName, localeId, dragging }) {
  const [locale, setLocale] = useState({
    name: localeName,
    id: localeId,
    active: false,
  });

  useEffect(() => {
    setLocale({
      name: localeName,
      id: localeId,
      active: locale.active,
    });
  }, [localeName, localeId]);

  const handleLocaleToggle = (newValue: boolean) => {
    setLocale({
      ...locale,
      active: newValue,
    });
  };

  return (
    <div style={{ width: 320 }}>
      <LanguageFlagToggleListItem dragging={dragging} onLocaleToggle={handleLocaleToggle} locale={locale} />
    </div>
  );
}

export default {
  title: "Components/Interactional/LanguageFlagToggleListItem",
  component: LanguageFlagToggleListItemDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=2546%3A47706",
    },
  },
  argTypes: {},
};

const Template = ({ localeName, localeId, dragging }) => (
  <LanguageFlagToggleListItemDemo localeName={localeName} localeId={localeId} dragging={dragging} />
);

export const Default = Template.bind({});
Default.args = {
  localeName: "Default",
  localeId: "de",
  dragging: false,
};
