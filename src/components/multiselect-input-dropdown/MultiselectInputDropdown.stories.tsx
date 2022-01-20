import React from "react";
import styled from "styled-components";

import { MultiselectInputDropdown } from "./MultiselectInputDropdown";

export default {
  title: `Components/Forms/MultiselectInputDropdown`,
  component: MultiselectInputDropdown,
};

const Wrapper = styled.div`
  width: 320px;
`;

const TAGS_MOCK = [
  {
    id: 1,
    label: "Default 1",
    color: "red",
  },
  {
    id: 2,
    label: "Default 2",
    color: "green",
  },
  {
    id: 3,
    label: "Default 3",
    color: "blue",
  },
];

const Template = (args) => (
  <Wrapper>
    <MultiselectInputDropdown {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {
  placeholder: "Select or create tags",
  dataSource: TAGS_MOCK,
  onSearch: (e) => {
    console.log(e.target.value);
  },
};
