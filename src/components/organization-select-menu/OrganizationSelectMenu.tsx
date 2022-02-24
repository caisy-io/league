import React from "react";
import { IconBriefcase, IconItemsGroup, IconProjectsFolder } from "../..";
import { OrganizationSelectMenuItem } from "./OrganizationSelectMenuItem";
import { OrganizationSelectMenuItemEmpty } from "./OrganizationSelectMenuItemEmpty";
import { SOrganizationSelectMenu } from "./styles/SOrganizationSelectMenu";
import { SOrganizationSelectMenuEnviroment } from "./styles/SOrganizationSelectMenuEnviroment";

interface IOrganizationSelectMenuItem {
  logoAssetUrl?: string;
  name?: string;
  type?: string;
}

interface IOrganizationSelectMenuEnviroment {
  name: string;
}

interface IOrganizationSelectMenu {
  organization?: IOrganizationSelectMenuItem;
  group?: IOrganizationSelectMenuItem;
  project?: IOrganizationSelectMenuItem;
  enviroment?: IOrganizationSelectMenuEnviroment;
}

export const OrganizationSelectMenu: React.FC<IOrganizationSelectMenu> = ({ ...props }) => {
  const EnviromentIcon = () => {
    return props.enviroment && typeof props.enviroment.name === "string" ? (
      <SOrganizationSelectMenuEnviroment>
        {props.enviroment.name.slice(0, 2).toUpperCase()}
      </SOrganizationSelectMenuEnviroment>
    ) : null;
  };

  return (
    <SOrganizationSelectMenu>
      {props.organization?.name ? <OrganizationSelectMenuItem menuItem={props.organization} typeOrganization /> : <OrganizationSelectMenuItemEmpty typeOrganization><IconBriefcase size={12}></IconBriefcase></OrganizationSelectMenuItemEmpty>}
      {props.group?.name ? <OrganizationSelectMenuItem menuItem={props.group} /> : <OrganizationSelectMenuItemEmpty><IconItemsGroup size={16}></IconItemsGroup></OrganizationSelectMenuItemEmpty>}
      {props.project?.name ? <OrganizationSelectMenuItem menuItem={props.project} /> : <OrganizationSelectMenuItemEmpty><IconProjectsFolder size={16}></IconProjectsFolder></OrganizationSelectMenuItemEmpty>}
      <EnviromentIcon />
    </SOrganizationSelectMenu>
  );
};
