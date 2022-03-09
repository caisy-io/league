import React, { useEffect, useState } from "react";
import { LanguageToggleListItem } from "./LanguageToggleListItem";

function LanguageToggleListItemDemo({ apiName, id, dragging }) {
  const [locale, setLocale] = useState({
    apiName,
    id,
    active: false,
  });

  useEffect(() => {
    setLocale({
      apiName,
      id,
      active: locale.active,
    });
  }, [apiName, id]);

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

const Template = ({ apiName, id, dragging }) => (
  <LanguageToggleListItemDemo apiName={apiName} id={id} dragging={dragging} />
);

export const Default = Template.bind({});
Default.args = {
  apiName: "de-de",
  localeId: "de-locale-id",
};
