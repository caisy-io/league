import React from "react";
import { Img } from "../../base-components/img";
import { SOrganizationSelectMenuItem } from "./styles/SOrganizationSelectMenuItem";

interface IOrganizationSelectMenuItem {
  logoAssetUrl?: string;
  name?: string;
}

/* GET PLACEHOLDER LETTERS */
const getPlaceholderLettersByName = (name: string) => {
  const singleWords = name.split(" ");
  if (singleWords.length == 1) {
    return singleWords[0].charAt(0).toUpperCase();
  }
  return singleWords[0].charAt(0).toUpperCase() + singleWords[1].charAt(0).toUpperCase();
};

export const OrganizationSelectMenuItem: React.FC<{
  menuItem?: IOrganizationSelectMenuItem;
  typeOrganization?: boolean;
}> = ({ ...props }) => {
  const isSVG = `${props.menuItem?.logoAssetUrl}`.toLowerCase().endsWith(".svg") ?? false;
  const size = props.typeOrganization ? 20 : 26;
  return props.menuItem ? (
    props.menuItem.logoAssetUrl ? (
      <SOrganizationSelectMenuItem typeOrganization={props.typeOrganization}>
        <Img style={{ width: size, height: size }} resolution={isSVG ? 0 : 1440} src={props.menuItem.logoAssetUrl} />
      </SOrganizationSelectMenuItem>
    ) : typeof props.menuItem.name === "string" ? (
      <SOrganizationSelectMenuItem typeOrganization={props.typeOrganization}>
        {getPlaceholderLettersByName(props.menuItem.name)}
      </SOrganizationSelectMenuItem>
    ) : null
  ) : null;
};
