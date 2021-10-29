import React from "react";
import { Img } from "../..";
import { SOrganizationSelectMenuItem } from "./styles/SOrganizationSelectMenuItem";

interface IOrganizationSelectMenuItem {
  logoAssetUrl?: string;
  name: string;
}

export const OrganizationSelectMenuItem: React.FC<{ menuItem: IOrganizationSelectMenuItem }> = ({ ...props }) => {
  return props.menuItem ? (
    props.menuItem.logoAssetUrl ? (
      <SOrganizationSelectMenuItem>
        <Img resolution={1440} src={props.menuItem.logoAssetUrl} />
      </SOrganizationSelectMenuItem>
    ) : (
      <SOrganizationSelectMenuItem>{props.menuItem.name.slice(0, 2).toUpperCase()}</SOrganizationSelectMenuItem>
    )
  ) : null;
};
