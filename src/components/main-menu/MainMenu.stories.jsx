import React from "react";
import { MainMenu } from "./MainMenu";
import sampleOrgLogo from "../organization-select-menu/sampleGroup.png";
import { OrganizationSelectMenu } from "../organization-select-menu/OrganizationSelectMenu";
import { MainMenuItem } from "../main-menu-items/MainMenuItem";
import { UploadMenuItem } from "../upload-menu-item/UploadMenuItem";
import { IconLink, IconBoolean, IconAttachmentSquare, IconCode } from "../../icons";

const logoSquareAssetUrl =
  "https://assets.caisy.io/asset/9aff2246-1dd1-44a7-ad8d-47feaaa1cce9/bbf6fabc3fd88c4c854aa6877fd9366f/CAISY_ICON.svg?w=800";

const OrganizationSelectMenuContainer = () => {
  const defaultGroup = {
    name: "Leicht",
    logoAssetUrl: sampleOrgLogo,
  };

  const defaultProject = {
    name: "TProject",
  };

  const defaultEnviroment = {
    name: "TEnviroment",
  };

  return <OrganizationSelectMenu group={defaultGroup} project={defaultProject} enviroment={defaultEnviroment} />;
};

const MainNavigationContainer = () => {
  const menuItems = [{ icon: <IconLink /> }, { icon: <IconBoolean /> }];

  return (
    <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      {menuItems.map((item) => (
        <MainMenuItem>{item.icon}</MainMenuItem>
      ))}
    </div>
  );
};

const FooterNavigationContainer = () => {
  const menuItems = [{ icon: <IconCode /> }, { icon: <IconAttachmentSquare /> }];

  return (
    <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      {menuItems.map((item) => (
        <MainMenuItem>{item.icon}</MainMenuItem>
      ))}
    </div>
  );
};

const UploadContainer = () => {
  return <UploadMenuItem state="loading" percentageLoaded={57} > 57% </UploadMenuItem>;
};

// Default MainMenu Demo
export default {
  title: "Components/Navigation/MainMenu",
  component: MainMenuDemo,
  argTypes: {},
};

function MainMenuDemo({ content, ...args }) {
  return <MainMenu {...args} />;
}

const Template = (args) => <MainMenuDemo {...args} />;

export const Default = Template.bind({});
export const WithoutOrgLogo = Template.bind({});
export const WithoutMainNavigation = Template.bind({});
export const WithoutFooterNavigation = Template.bind({});
export const WithoutUploadContainer = Template.bind({});

Default.args = {
  logoSquareAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  mainNavigationContainer: <MainNavigationContainer />,
  footerNavigationContainer: <FooterNavigationContainer />,
  uploadContainer: <UploadContainer />,
};

WithoutOrgLogo.args = {
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  mainNavigationContainer: <MainNavigationContainer />,
  footerNavigationContainer: <FooterNavigationContainer />,
  uploadContainer: <UploadContainer />,
};

WithoutMainNavigation.args = {
  logoSquareAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  footerNavigationContainer: <FooterNavigationContainer />,
  uploadContainer: <UploadContainer />,
};

WithoutFooterNavigation.args = {
  logoSquareAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  mainNavigationContainer: <MainNavigationContainer />,
  uploadContainer: <UploadContainer />,
};

WithoutUploadContainer.args = {
  logoSquareAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  mainNavigationContainer: <MainNavigationContainer />,
  footerNavigationContainer: <FooterNavigationContainer />,
};
