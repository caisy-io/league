import React, { useState } from "react";
import { FieldCard } from './FieldCard';

export default {
  title: `Components/Cards/FieldCard`,
  component: FieldCardDemo,
  argTypes: {
    cardText: {
      description: "Text of the field card",
      control: { type: "text" },
    },
  },
};

function FieldCardDemo({ cardText }) {
  const [isActivated, setIsActivated] = useState(false);
  return <FieldCard cardText={cardText} onClick={() => { setIsActivated(!isActivated) }} activated={isActivated}>
  </FieldCard>
}

const Template = (args) => < FieldCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardText: "Default",
};
