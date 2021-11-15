import React from "react";
import { SimpleInput } from "../simple-input/SimpleInput";
import { WithLabel } from "./WithLabel";
import { WithErrorMessage } from "../with-error-message/WithErrorMessage";
import { WithTranslationBadge } from "../with-translation-badge/WithTranslationBadge";
import FieldContext from "../field-context/FieldContextState";
import { useForm, FormFieldWrapper, Form } from "../../form/index";
import GermanFlagIcon from "../simple-input/GermanFlagIcon";

function WithLabelDemo({ ...args }) {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FieldContext>
      <WithLabel active={true} content={args.content} />
      <SimpleInput placeholder="This input has a label" value={value} onChange={onChange} />
    </FieldContext>
  );
}

export default {
  title: "Components/InputFields/WithLabel",
  component: WithLabelDemo,
  argTypes: {},
};

const Template = ({ ...args }) => <WithLabelDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is a label",
};
