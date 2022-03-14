import React from "react";
import { IconStarOutlined } from "../../icons";
import { LanguageFormatInputDropdown } from "./LanguageFormatInputDropdown";

const Template = ({ error, required, label, placeholder, disabled, initialValueKey }) => (
  <LanguageFormatInputDropdown
    error={error}
    required={required}
    dataSource={dataSource}
    placeholder={placeholder}
    label={label}
    initialValueKey={initialValueKey}
    disabled={disabled}
  />
);

export default {
  title: "Components/Forms/LanguageFormatInputDropdown",
  component: LanguageFormatInputDropdown,
  argTypes: {
    label: {
      description: "Label/ title for the dropdown",
    },
    required: {
      description: "Changes the input to required",
      control: { type: "boolean" },
    },
    error: {
      description: "Changes the status to error",
      control: { type: "boolean" },
    },
  },
};

const dataSource = [
  {
    key: "title_label",
    title: "Germany",
    solidLabelText: "en-US",
  },
  {
    key: "icon_title",
    title: "France",
    solidLabelText: "en-US",
  },
  {
    key: "icon_title_label",
    title: "England",
    solidLabelText: "en-UK",
    flag: <IconStarOutlined size={20} />,
  },
  {
    key: "title_label1",
    title: "Egypt",
    solidLabelText: "en-US",
  },
  {
    key: "icon_title1",
    title: "Italy",
    solidLabelText: "en-US",
  },
  {
    key: "icon_title_label1",
    title: "Portugal",
    solidLabelText: "en-UK",
    flag: <IconStarOutlined size={20} />,
  },
];

export const Default = Template.bind({});
Default.args = {
  error: false,
  required: false,
  label: <span>Language format (ID)</span>,
  initialValueKey: "",
  placeholder: "Select language",
  disabled: false,
};
