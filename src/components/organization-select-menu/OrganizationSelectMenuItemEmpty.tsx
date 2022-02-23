import React from "react";
import { SOrganizationSelectMenuItemEmpty } from "./styles/SOrganizationSelectMenuItemEmpty";

export const OrganizationSelectMenuItemEmpty: React.FC<{
  children,
  typeOrganization?: boolean
}> = ({ ...props }) => {
  return <SOrganizationSelectMenuItemEmpty typeOrganization={props.typeOrganization}>
    {props.children}
  </SOrganizationSelectMenuItemEmpty>
};
