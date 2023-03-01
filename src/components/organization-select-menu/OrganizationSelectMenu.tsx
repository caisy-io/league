import React, { ReactNode } from "react";
import { IconBriefcase, IconItemsGroup, IconProjectsFolder } from "../../icons";
import { Tooltip } from "../tooltip";
import { OrganizationSelectMenuItem } from "./OrganizationSelectMenuItem";
import { OrganizationSelectMenuItemEmpty } from "./OrganizationSelectMenuItemEmpty";
import { SOrganizationSelectMenu } from "./styles/SOrganizationSelectMenu";
import { SOrganizationSelectMenuEnviroment } from "./styles/SOrganizationSelectMenuEnviroment";
import { SOrganizationSelectMenuItemOrganization } from "./styles/SOrganizationSelectMenuItemOrganization";

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
  organizationTooltip?: ReactNode | string;
  groupTooltip?: ReactNode | string;
  projectTooltip?: ReactNode | string;
  disableTooltips?: boolean;
}

export const OrganizationSelectMenu: React.FC<IOrganizationSelectMenu> = ({
  organization,
  group,
  project,
  enviroment,
  organizationTooltip,
  groupTooltip,
  projectTooltip,
  disableTooltips,
}) => {
  const EnviromentIcon = () => {
    return enviroment && typeof enviroment.name === "string" ? (
      <SOrganizationSelectMenuEnviroment>{enviroment.name.slice(0, 2).toUpperCase()}</SOrganizationSelectMenuEnviroment>
    ) : null;
  };

  return (
    <SOrganizationSelectMenu>
      <SOrganizationSelectMenuItemOrganization>
        <Tooltip
          disabled={disableTooltips}
          disableTriangle
          color="black"
          content={organizationTooltip || "switch organization"}
          placement="right"
          delay={300}
        >
          {organization?.name ? (
            <OrganizationSelectMenuItem menuItem={organization} typeOrganization />
          ) : (
            <OrganizationSelectMenuItemEmpty typeOrganization>
              <IconBriefcase size={12} />
            </OrganizationSelectMenuItemEmpty>
          )}
        </Tooltip>
      </SOrganizationSelectMenuItemOrganization>
      <Tooltip
        disabled={disableTooltips}
        disableTriangle
        color="black"
        content={groupTooltip || "switch group"}
        placement="right"
        delay={300}
      >
        {group?.name ? (
          <OrganizationSelectMenuItem menuItem={group} />
        ) : (
          <OrganizationSelectMenuItemEmpty>
            <IconItemsGroup size={16} />
          </OrganizationSelectMenuItemEmpty>
        )}
      </Tooltip>
      <Tooltip
        disabled={disableTooltips}
        disableTriangle
        color="black"
        content={projectTooltip || "switch project"}
        placement="right"
        delay={300}
      >
        {project?.name ? (
          <OrganizationSelectMenuItem menuItem={project} />
        ) : (
          <OrganizationSelectMenuItemEmpty>
            <IconProjectsFolder size={16} />
          </OrganizationSelectMenuItemEmpty>
        )}
      </Tooltip>
      <EnviromentIcon />
    </SOrganizationSelectMenu>
  );
};
