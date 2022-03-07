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
      control: { type: "text" },
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
    title:
      "Default Title Eshkereeeeeeeeee! Wow! I am veeeeeery long indeed! Default Title Eshkereeeeeeeeee! Wow! I am veeeeeery long indeed!",
    solidLabelText: "en-US",
  },
  {
    key: "icon_title",
    title: "Title and Icon - Wow! I am veeeeeery long indeed! Title and Icon - Wow! I am veeeeeery long indeed!",
    solidLabelText: "en-US",
  },
  {
    key: "icon_title_label",
    title: "Label, Title and Icon - Wow! I am veeeeeery long indeed!",
    solidLabelText: "en-UK",
    flag: <IconStarOutlined size={20} />,
  },
  {
    key: "title_label1",
    title: "Default Title Eshkereeeeeeeeee! Wow! I am veeeeeery long indeed!",
    solidLabelText: "en-US",
  },
  {
    key: "icon_title1",
    title: "Title and Icon - Wow! I am veeeeeery long indeed!",
    solidLabelText: "en-US",
  },
  {
    key: "icon_title_label1",
    title: "Label, Title and Icon - Wow! I am veeeeeery long indeed!",
    solidLabelText: "en-UK",
    flag: <IconStarOutlined size={20} />,
  },
];

export const Default = Template.bind({});
Default.args = {
  error: false,
  required: false,
  label: "Language format (ID)",
  initialValueKey: "",
  placeholder: "Select language",
  disabled: false,
};
