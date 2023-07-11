import React from "react";
import { useState } from "react";
import { StringSingleField } from "./StringSingleField";
import { SimpleInput, TranslationBadge } from "../input-fields";
import { ActiveUserAvatar } from "../active-user-avatar/ActiveUserAvatar";
import { Preview } from "../preview";
import {
  // IconBooleanField,
  IconStringField,
  // IconDateTimeField,
  // IconColorField,
  // IconNumberField,
  // IconRichTextField,
  // IconSelectField,
  // IconTagField,
  // IconGeopointField,
} from "../../icons";

export default {
  title: "Components/Fields/StringSingleLine",
  component: StringSingleField,
};

const Template = (args) => {
  const [value1, setValue1] = useState("test");
  const [value2, setValue2] = useState("test");
  return (
    <StringSingleField
      {...args}
      usersList={
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ActiveUserAvatar color="red">
            <Preview
              image={
                <img
                  style={{ objectFit: "cover", height: 28, width: 28 }}
                  src="https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="
                />
              }
              size={28}
            />
          </ActiveUserAvatar>
          <ActiveUserAvatar color="blue">
            <Preview
              image={
                <img
                  style={{ objectFit: "cover", height: 28, width: 28 }}
                  src="https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="
                />
              }
              size={28}
            />
          </ActiveUserAvatar>
          <ActiveUserAvatar color="orange">
            <Preview
              image={
                <img
                  style={{ objectFit: "cover", height: 28, width: 28 }}
                  src="https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik="
                />
              }
              size={28}
            />
          </ActiveUserAvatar>
        </div>
      }
    >
      <SimpleInput
        translationBadge={<TranslationBadge countryCode="de" />}
        label="This is a label"
        value={value1}
        onChange={({ target: { value } }) => setValue1(value)}
      />

      <SimpleInput
        translationBadge={<TranslationBadge countryCode="es-ar" />}
        label="This is a label"
        value={value2}
        onChange={({ target: { value } }) => setValue2(value)}
      />
    </StringSingleField>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Single Line String",
  tooltip: <p>Test react element tooltip</p>,
  icon: <IconStringField />,
};

export const Required = Template.bind({});
Required.args = {
  title: "Single Line String",
  required: true,
  tooltip: <p>Test react element tooltip</p>,
  description: "This is a required string input",
  icon: <IconStringField />,
};

export const Error = Template.bind({});
Error.args = {
  title: "Single Line String",
  required: true,
  tooltip: <p>Test react element tooltip</p>,
  errors: ["Invalid input value"],
  icon: <IconStringField />,
};
