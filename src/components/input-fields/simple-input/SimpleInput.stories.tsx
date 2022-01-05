import React from "react";
import { SimpleInput } from "./SimpleInput";
import { STranslationBadge } from "../styles/STranslationBadge";
import { IconStarOutlined } from "../../../icons";
import Flag from "../../flag/Flag";

function SimpleInputDemo({ ...args }) {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const TranslationBadge = () => {
    return (
      <STranslationBadge>
        <Flag countryCode="de" size={16} />
        DE
      </STranslationBadge>
    );
  };

  return (
    <SimpleInput
      translationBadge={args.withTranslationBadge && <TranslationBadge />}
      required
      onChange={onChange}
      value={value}
      disabled={args.state === "locked"}
      leftIcon={args.withLeftIcon && <IconStarOutlined size={20} />}
      rightIcon={args.withRightIcon && <IconStarOutlined size={20} />}
      errors={args.state === "error" && ["Error message"]}
      placeholder="Placeholder"
      {...args}
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
      description: "Marks the input with a required inidicator",
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
  state: "error",
  required: true,
  withLeftIcon: false,
  withRightIcon: false,
};

export const WithTranslationBadge = Template.bind({});
WithTranslationBadge.args = {
  label: "This is a label",
  withTranslationBadge: true,
};
