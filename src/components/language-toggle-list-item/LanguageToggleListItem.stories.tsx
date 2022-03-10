import React, { useEffect, useState } from "react";
import { LanguageToggleListItem } from "./LanguageToggleListItem";

function LanguageToggleListItemDemo({ localeCode, id, dragging }) {
  const [locale, setLocale] = useState({
    localeCode,
    id,
    active: false,
  });

  useEffect(() => {
    setLocale({
      localeCode,
      id,
      active: locale.active,
    });
  }, [localeCode, id]);

  const handleLocaleToggle = (newValue: boolean) => {
    setLocale({
      ...locale,
      active: newValue,
    });
  };

  return (
    <div style={{ width: 320 }}>
      <LanguageToggleListItem onToggle={handleLocaleToggle} locale={locale} active={locale.active} />
    </div>
  );
}

export default {
  title: "Components/Interactional/LanguageToggleListItem",
  component: LanguageToggleListItemDemo,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=2546%3A47706",
    },
  },
  argTypes: {},
};

const Template = ({ localeCode, id, dragging }) => (
  <LanguageToggleListItemDemo localeCode={localeCode} id={id} dragging={dragging} />
);

export const Default = Template.bind({});
Default.args = {
  localeCode: "de-de",
  localeId: "de-locale-id",
};
