import React from "react";
import { OrganizationSelectMenuItem } from "./OrganizationSelectMenuItem";
import { SOrganizationSelectMenu } from "./styles/SOrganizationSelectMenu";
import { SOrganizationSelectMenuEnviroment } from "./styles/SOrganizationSelectMenuEnviroment";

interface IOrganizationSelectMenuItem {
  logoAssetUrl?: string;
  name: string;
}

interface IOrganizationSelectMenuEnviroment {
  name: string;
}

interface IOrganizationSelectMenu {
  organization: IOrganizationSelectMenuItem;
  group: IOrganizationSelectMenuItem;
  project: IOrganizationSelectMenuItem;
  enviroment?: IOrganizationSelectMenuEnviroment;
}

export const OrganizationSelectMenu: React.FC<IOrganizationSelectMenu> = ({ ...props }) => {
  const EnviromentIcon = () => {
    return (props.enviroment && typeof props.enviroment.name === "string" ) ? (
      <SOrganizationSelectMenuEnviroment>
        {props.enviroment.name.slice(0, 2).toUpperCase()}
      </SOrganizationSelectMenuEnviroment>
    ) : null;
  };

  return (
    <SOrganizationSelectMenu>
      <OrganizationSelectMenuItem menuItem={props.organization} />
      <OrganizationSelectMenuItem menuItem={props.group} />
      <OrganizationSelectMenuItem menuItem={props.project} />
      <EnviromentIcon />
    </SOrganizationSelectMenu>
  );
};
