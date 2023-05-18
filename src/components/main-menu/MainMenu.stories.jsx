import React from "react";
import { MainMenu } from "./MainMenu";
import sampleOrgLogo from "../organization-select-menu/sampleGroup.png";
import { OrganizationSelectMenu } from "../organization-select-menu/OrganizationSelectMenu";
import { MainMenuItem } from "../main-menu-items/MainMenuItem";
import { UploadMenuItem } from "../upload-menu-item/UploadMenuItem";
import { IconLink, IconBoolean, IconAttachmentSquare, IconCode } from "../../icons";

const logoSquareAssetUrl =
  "https://assets.caisy.io/asset/9aff2246-1dd1-44a7-ad8d-47feaaa1cce9/bbf6fabc3fd88c4c854aa6877fd9366f/CAISY_ICON.svg";
const fullLogoAssetUrl =
  "https://assets.caisy.io/asset/1bcdc513-e692-4fe8-abaa-21ca6335036c/e5cb239884df56d2897e9bb37d16625d/CAISY_FULL.svg";

const OrganizationSelectMenuContainer = ({ ...props }) => {
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

  return (
    <OrganizationSelectMenu group={defaultGroup} project={defaultProject} enviroment={defaultEnviroment} {...props} />
  );
};

const MainNavigationContainer = ({ ...props }) => {
  const menuItems = [
    { icon: <IconLink />, itemText: "label1" },
    { icon: <IconBoolean />, itemText: "label2" },
  ];

  return (
    <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      {menuItems.map((item, index) => (
        <MainMenuItem key={index} itemText={item.itemText} {...props}>
          {item.icon}
        </MainMenuItem>
      ))}
    </div>
  );
};

const FooterNavigationContainer = ({ ...props }) => {
  const menuItems = [
    { icon: <IconCode />, itemText: "label3" },
    { icon: <IconAttachmentSquare />, itemText: "label4" },
  ];

  return (
    <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      {menuItems.map((item, index) => (
        <MainMenuItem key={index} itemText={item.itemText} {...props}>
          {item.icon}
        </MainMenuItem>
      ))}
    </div>
  );
};

const UploadContainer = () => {
  return (
    <UploadMenuItem state="loading" percentageLoaded={57}>
      {" "}
      57%{" "}
    </UploadMenuItem>
  );
};

// Default MainMenu Demo
export default {
  title: "Components/Navigation/MainMenu",
  component: MainMenuDemo,
  argTypes: {},
};

function MainMenuDemo({ ...args }) {
  return <MainMenu {...args} />;
}

const Template = (args) => <MainMenuDemo {...args} />;

export const Default = Template.bind({});
export const WithoutOrgLogo = Template.bind({});
export const WithoutMainNavigation = Template.bind({});
export const WithoutFooterNavigation = Template.bind({});
export const WithoutUploadContainer = Template.bind({});
export const FullExpandedItems = Template.bind({});

Default.args = {
  logoSquareAssetUrl,
  fullLogoAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  mainNavigationContainer: <MainNavigationContainer />,
  footerNavigationContainer: <FooterNavigationContainer />,
  uploadContainer: <UploadContainer />,
  expanded: false,
};

WithoutOrgLogo.args = {
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  mainNavigationContainer: <MainNavigationContainer />,
  footerNavigationContainer: <FooterNavigationContainer />,
  uploadContainer: <UploadContainer />,
  expanded: false,
};

WithoutMainNavigation.args = {
  logoSquareAssetUrl,
  fullLogoAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  footerNavigationContainer: <FooterNavigationContainer />,
  uploadContainer: <UploadContainer />,
  expanded: false,
};

WithoutFooterNavigation.args = {
  logoSquareAssetUrl,
  fullLogoAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  mainNavigationContainer: <MainNavigationContainer />,
  uploadContainer: <UploadContainer />,
  expanded: false,
};

WithoutUploadContainer.args = {
  logoSquareAssetUrl,
  fullLogoAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer />,
  mainNavigationContainer: <MainNavigationContainer />,
  footerNavigationContainer: <FooterNavigationContainer />,
  expanded: false,
};

FullExpandedItems.args = {
  logoSquareAssetUrl,
  fullLogoAssetUrl,
  organizationSelectMenuContainer: <OrganizationSelectMenuContainer expanded={true} />,
  mainNavigationContainer: <MainNavigationContainer expanded={true} />,
  footerNavigationContainer: <FooterNavigationContainer expanded={true} />,
  expanded: true,
};
