import React from "react";
import { ListPlaceholder } from './ListPlaceholder';
import { SListPlaceholderContainer } from './styles/SListPlaceholderContainer';

export default {
  title: `Components/ListPlaceholder`,
  component: ListPlaceholderDemo,
  argTypes: {
    boolean: {
      description: "An example boolean argument type",
      control: { type: "boolean" },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    text: {
      description: "An example text argument type",
      control: { type: "text" },
    },
    select: {
      description: "An example select argument type",
      options: ["option1", "option2", "option2"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "option1",
        },
      },
    },
  },
};

function ListPlaceholderDemo({ boolean, text, select }) {
  return <SListPlaceholderContainer>
    <ListPlaceholder>
    </ListPlaceholder>
  </SListPlaceholderContainer>

}

const Template = (args) => < ListPlaceholderDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
