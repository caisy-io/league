import React from "react";
import { useState } from "react";
import { StringSingleField } from "./StringSingleField";
import { SimpleInput, TranslationBadge } from "../input-fields";

export default {
  title: "Components/Fields/StringSingleLine",
  component: StringSingleField,
};

const Template = (args) => {
  const [value, setValue] = useState("test");
  return (
    <StringSingleField {...args}>
      <SimpleInput
        translationBadge={<TranslationBadge countryCode="de" />}
        label="This is a label"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />

      <SimpleInput
        translationBadge={<TranslationBadge countryCode="es-ar" />}
        label="This is a label"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </StringSingleField>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Single Line String",
  tooltip: <p>Test react element tooltip</p>,
};

export const Required = Template.bind({});
Required.args = {
  title: "Single Line String",
  required: true,
  tooltip: <p>Test react element tooltip</p>,
  description: "This is a required string input"
};

export const Error = Template.bind({});
Error.args = {
  title: "Single Line String",
  required: true,
  tooltip: <p>Test react element tooltip</p>,
  errors: ['Invalid input value'],
};