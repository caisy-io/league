import React from "react";
import { Img } from "../../base-components/img";
import { SOrganizationSelectMenuItem } from "./styles/SOrganizationSelectMenuItem";

interface IOrganizationSelectMenuItem {
  logoAssetUrl?: string;
  name: string;
}

export const OrganizationSelectMenuItem: React.FC<{
  menuItem: IOrganizationSelectMenuItem,
  typeOrganization?: boolean;
}> = ({ ...props }) => {
  return props.menuItem ? (
    props.menuItem.logoAssetUrl ? (
      <SOrganizationSelectMenuItem typeOrganization={props.typeOrganization}>
        <Img resolution={1440} src={props.menuItem.logoAssetUrl} />
      </SOrganizationSelectMenuItem>
    ) : typeof props.menuItem.name === "string" ? (
      <SOrganizationSelectMenuItem typeOrganization={props.typeOrganization}>{props.menuItem.name.slice(0, 2).toUpperCase()}</SOrganizationSelectMenuItem>
    ) : null
  ) : null;
};
