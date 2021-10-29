import React from "react";
import { OrganizationSelectMenu } from "./OrganizationSelectMenu";
import sampleGroup from "./sampleGroup.png";

const defaultGroup = {
  name: "TGroup",
  logoAssetUrl: sampleGroup,
};

const defaultOrganization = {
  name: "TOrganization",
  logoAssetUrl:
    "https://assets.caisy.io/asset/9aff2246-1dd1-44a7-ad8d-47feaaa1cce9/bbf6fabc3fd88c4c854aa6877fd9366f/CAISY_ICON.svg?w=800",
};

const defaultProject = {
  name: "TProject",
};

const defaultEnviroment = {
  name: "TEnviroment",
};

// Default OrganizationSelectMenu Demo
export default {
  title: "Components/OrganizationSelectMenu",
  component: OrganizationSelectMenu,
};

function OrganizationSelectMenuDemo({ content, ...args }) {
  return <OrganizationSelectMenu {...args} />;
}

const Template = (args) => <OrganizationSelectMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  organization: defaultOrganization,
  enviroment: defaultEnviroment,
  project: defaultProject,
  group: defaultGroup,
};

export const WithoutEnviroment = Template.bind({});
WithoutEnviroment.args = {
  organization: defaultOrganization,
  project: defaultProject,
  group: defaultGroup,
};

export const WithoutGroup = Template.bind({});
WithoutGroup.args = {
  organization: defaultOrganization,
  project: defaultProject,
  enviroment: defaultEnviroment,
};

export const WithoutGroupOrEnv = Template.bind({});
WithoutGroupOrEnv.args = {
  organization: defaultOrganization,
  project: defaultProject,
};
