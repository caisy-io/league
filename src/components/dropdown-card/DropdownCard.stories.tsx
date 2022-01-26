import React from "react";
import { DropdownCard } from "./DropdownCard";
import { Button } from "./../button";
import { LineInput } from "./../line-input";
import { SDropdownCardHeader } from "./styles/SDropdownCardHeader";
import { SDropdownCardBody } from "./styles/SDropdownCardBody";
import { IconCross } from "../../icons/IconCross";
import { Spacer } from "../../base-components/spacer";

const Template = () => {
  return (
    <DropdownCard>
      <SDropdownCardHeader>
        Section settings <IconCross size={24} />
      </SDropdownCardHeader>
      <SDropdownCardBody>
        <LineInput
          errorMessage="Error message"
          label="Label"
          onChange={() => {}}
          placeholder="Default"
          state="default"
          value=""
        />
        <Spacer bronze={20} />
        <Button type="primary">Click me</Button>
      </SDropdownCardBody>
    </DropdownCard>
  );
};

export default {
  title: `Components/DropdownCard`,
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
