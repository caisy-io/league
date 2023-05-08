import React, { ReactNode } from "react";
import { IconBriefcase, IconItemsGroup, IconProjectsFolder } from "../../icons";
import { Tooltip } from "../tooltip";
import { OrganizationSelectMenuItem } from "./OrganizationSelectMenuItem";
import { OrganizationSelectMenuItemEmpty } from "./OrganizationSelectMenuItemEmpty";
import { SOrganizationSelectMenu } from "./styles/SOrganizationSelectMenu";
import { SOrganizationSelectMenuEnviroment } from "./styles/SOrganizationSelectMenuEnviroment";
import { SOrganizationSelectMenuItemOrganization } from "./styles/SOrganizationSelectMenuItemOrganization";
import { SOrganizationSelectMenuItemLabel } from "./styles/SOrganizationSelectMenuItemLabel";
import { SOrganizationSelectMenuItemLabelHolder } from "./styles/SOrganizationSelectMenuItemLabelHolder";
import { Divider } from "../divider";

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
  expanded?: boolean;
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
  expanded,
}) => {
  const EnviromentIcon: any = () => {
    return enviroment && typeof enviroment.name === "string" ? (
      <SOrganizationSelectMenuEnviroment expanded={expanded}>
        {enviroment.name.slice(0, 2).toUpperCase()}
      </SOrganizationSelectMenuEnviroment>
    ) : null;
  };

  return (
    <>
      <SOrganizationSelectMenu expanded={expanded}>
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
              <>
                <OrganizationSelectMenuItem menuItem={organization} typeOrganization />
              </>
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
            <SOrganizationSelectMenuItemLabelHolder expanded={expanded}>
              <OrganizationSelectMenuItem menuItem={group} />
              {expanded && <SOrganizationSelectMenuItemLabel> {group?.name}</SOrganizationSelectMenuItemLabel>}
            </SOrganizationSelectMenuItemLabelHolder>
          ) : (
            <SOrganizationSelectMenuItemLabelHolder expanded={expanded}>
              <OrganizationSelectMenuItemEmpty>
                <IconItemsGroup size={16} />
              </OrganizationSelectMenuItemEmpty>
              {expanded && <SOrganizationSelectMenuItemLabel>{"Group name"}</SOrganizationSelectMenuItemLabel>}
            </SOrganizationSelectMenuItemLabelHolder>
          )}
        </Tooltip>
        <div style={{ marginLeft: "auto" }}>
          <Divider width={expanded ? 135 : 28} height={1} orientation={"right"} marginBottom={-1} marginTop={1} />
        </div>
        <Tooltip
          disabled={disableTooltips}
          disableTriangle
          color="black"
          content={projectTooltip || "switch project"}
          placement="right"
          delay={300}
        >
          {project?.name ? (
            <SOrganizationSelectMenuItemLabelHolder expanded={expanded}>
              <OrganizationSelectMenuItem menuItem={project} />
              {expanded && <SOrganizationSelectMenuItemLabel> {project?.name}</SOrganizationSelectMenuItemLabel>}
            </SOrganizationSelectMenuItemLabelHolder>
          ) : (
            <SOrganizationSelectMenuItemLabelHolder expanded={expanded}>
              <OrganizationSelectMenuItemEmpty>
                <IconProjectsFolder size={16} />
              </OrganizationSelectMenuItemEmpty>
              {expanded && <SOrganizationSelectMenuItemLabel>{"Project name"}</SOrganizationSelectMenuItemLabel>}
            </SOrganizationSelectMenuItemLabelHolder>
          )}
        </Tooltip>
      </SOrganizationSelectMenu>
      <EnviromentIcon expanded={expanded} />
    </>
  );
};
