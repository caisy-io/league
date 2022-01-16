import React from "react";
import styled from "styled-components";

import { MultiselectInputDropdown } from "./MultiselectInputDropdown";

export default {
  title: `Components/Forms/MultiselectInputDropdown`,
  component: MultiselectInputDropdown,
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

const Wrapper = styled.div`
  width: 320px;
`;

const Template = (args) => (
  <Wrapper>
    <MultiselectInputDropdown {...args} />
  </Wrapper>
);

export const Default = Template.bind({});

Default.args = {};
