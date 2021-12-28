import React from "react";
import styled from "styled-components";
import { Card, SCardBody, SCardHeaderTitle } from "../card";

const SDemo = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  gap: 20;
  align-items: center;
`;

const SDemoCardBody = styled.div`
  min-height: 300px;
  min-width: 300px;
`;

function CardDemo() {
    return (
        <SDemo>
          <Card header={<SCardHeaderTitle>Supercard</SCardHeaderTitle>}>
            <SCardBody>
              <SDemoCardBody>Some card body</SDemoCardBody>
            </SCardBody>
          </Card>
        </SDemo>
      );
}

export default {
  title: 'Components/Cards/Card',
  component: CardDemo,
};
const Template = (args) => <CardDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};

