import React from "react";
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
  return <FieldCard cardText={cardText}>
  </FieldCard>
}

const Template = (args) => < FieldCardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardText: "Default",
};
