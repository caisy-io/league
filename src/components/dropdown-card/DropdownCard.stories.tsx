import React from "react";
import { DropdownCard } from './DropdownCard';
import {SDropdownCardHeader}from './styles/SDropdownCardHeader'
import {SDropdownCardBody}from './styles/SDropdownCardBody'
import { IconCross } from '../../icons/IconCross';

const Template = () => {
  return <DropdownCard>
    <SDropdownCardHeader>
    Section settings <IconCross size={24}/>
    </SDropdownCardHeader>
    <SDropdownCardBody>

  </SDropdownCardBody>
    </DropdownCard>
}

export default {
  title: `Components/DropdownCard`,
  component: Template,
};

export const Default = Template.bind({});
Default.args = {};
