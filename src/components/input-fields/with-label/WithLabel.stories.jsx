import React from "react";
import { SimpleInput } from "../simple-input/SimpleInput";
import { withLabel } from "..";

const WithLabel = withLabel(SimpleInput);

function WithLabelDemo({ ...args }) {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return <WithLabel placeholder="This input has a label" onChange={onChange} value={value} label={args.content} />;
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
