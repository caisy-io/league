import React from "react";
import { ListPlaceholder } from './ListPlaceholder';
import { SListPlaceholderContainer } from './styles/SListPlaceholderContainer';

export default {
  title: `Components/ListPlaceholder`,
  component: ListPlaceholderDemo,
};

function ListPlaceholderDemo() {
  return <SListPlaceholderContainer>
    <ListPlaceholder />
  </SListPlaceholderContainer>

}

const Template = (args) => < ListPlaceholderDemo {...args} />;

export const Default = Template.bind({});
Default.args = {

};
