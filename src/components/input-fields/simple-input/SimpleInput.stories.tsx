import React from "react";
import { SimpleInput } from "./SimpleInput";
import GermanFlagIcon from "./GermanFlagIcon";
import { STranslationBadge } from "../styles/STranslationBadge";

function SimpleInputDemo({ ...args }) {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const TranslationBadge = () => {
    return (
      <STranslationBadge>
        <GermanFlagIcon />
        DE
      </STranslationBadge>
    );
  };

  return <SimpleInput translationBadge={<TranslationBadge />} required onChange={onChange} value={value} {...args} />;
}

export default {
  title: "Components/InputFields/SimpleInput",
  component: SimpleInputDemo,
  argTypes: {
    state: {
      description: "Changes the state of the input",
      options: ["error", "success"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "success",
        },
      },
    },
  },
};

const Template = ({ ...args }) => <SimpleInputDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "This is a label",
  errors: ["This is an error message", "This is another error message"],
  placeholder: "This is a placeholder",
  state: "error",
  required: true,
};
