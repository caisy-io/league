import React from "react";
import { SimpleInput } from "../simple-input/SimpleInput";
import { WithErrorMessage } from "./WithErrorMessage";
import FieldContext from "../field-context/FieldContextState";

function WithErrorMessageDemo({ ...args }) {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FieldContext>
      <WithErrorMessage active={true} content={args.content} />
      <SimpleInput placeholder="This input has some errors" onChange={onChange} value={value} state="error" />
    </FieldContext>
  );
}

export default {
  title: "Components/InputFields/WithErrorMessage",
  component: WithErrorMessageDemo,
  argTypes: {},
};

const Template = ({ ...args }) => <WithErrorMessageDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: ["This is an error message", "This is another error message"],
};
