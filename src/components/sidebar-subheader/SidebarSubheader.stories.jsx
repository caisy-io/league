import React from "react";
import { SidebarSubheader } from './SidebarSubheader';
import { SSidebarSubheaderWrapper } from './styles/SSidebarSubheaderWrapper';

export default {
  title: `Components/SidebarSubheader`,
  component: SidebarSubheaderDemo,
  argTypes: {
    subheaderText: {
      description: "Changes the state of the component to Activated",
      control: { type: "text" },
    },
  },
};

function SidebarSubheaderDemo({ subheaderText }) {
  return <SSidebarSubheaderWrapper>
    <SidebarSubheader subheaderText={subheaderText}>
    </SidebarSubheader>
  </SSidebarSubheaderWrapper>
}

const Template = (args) => < SidebarSubheaderDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  subheaderText: "Default"
};
