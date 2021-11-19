import React from "react";
import { SimpleInput } from "../simple-input/SimpleInput";
import { withTranslationBadge } from "..";
import GermanFlagIcon from "../simple-input/GermanFlagIcon";

const WithTranslationBadge = withTranslationBadge(SimpleInput);

function WithTranslationBadgeDemo({ ...args }) {
  const [value, setValue] = React.useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <WithTranslationBadge
      placeholder="This input has a translation badge"
      onChange={onChange}
      value={value}
      badge={args.content}
    />
  );
}

export default {
  title: "Components/InputFields/WithTranslationBadge",
  component: WithTranslationBadgeDemo,
  argTypes: {},
};

const Template = ({ ...args }) => <WithTranslationBadgeDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: { flag: GermanFlagIcon, country: "DE" },
};
