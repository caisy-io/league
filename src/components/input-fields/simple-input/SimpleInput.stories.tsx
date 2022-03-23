import React from "react";
import {TranslationBadge} from "../TranslationBadge";
import { SimpleInput } from "./SimpleInput";
import { IconStarOutlined } from "../../../icons";

function SimpleInputDemo({ ...args }) {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <SimpleInput
      translationBadge={args.withTranslationBadge && <TranslationBadge countryCode={'de'}/>}
      required={args.required}
      onChange={onChange}
      value={value}
      disabled={args.state === "locked"}
      leftIcon={args.withLeftIcon && <IconStarOutlined size={20} />}
      rightIcon={args.withRightIcon && <IconStarOutlined size={20} />}
      errors={args.state === "error" ? ["Error message"] : undefined}
      placeholder="Placeholder"
      label={args.label}
      state={args.state}
      type={args.type}
    />
  );
}

export default {
  title: "Components/Forms/SimpleInput",
  component: SimpleInputDemo,
  argTypes: {
    state: {
      description: "Changes the state of the input",
      options: ["error", "success", "default", "locked"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    required: {
      description: "Marks the input with a required indicator",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

const Template = ({ ...args }) => <SimpleInputDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "This is a label",
  type: "text",
  state: "error",
  required: true,
  withLeftIcon: false,
  withRightIcon: false,
};

export const WithTranslationBadge = Template.bind({});
WithTranslationBadge.args = {
  label: "This is a label",
  withTranslationBadge: true,
  required: false,
};
