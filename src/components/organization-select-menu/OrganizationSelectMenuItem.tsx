import React from "react";
import { Img } from "../../base-components/img";
import { SOrganizationSelectMenuItem } from "./styles/SOrganizationSelectMenuItem";

interface IOrganizationSelectMenuItem {
  logoAssetUrl?: string;
  name?: string;
  type?: string;
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
  menuItem?: IOrganizationSelectMenuItem
}> = ({ ...props }) => {
  return props.menuItem ? (
    props.menuItem.logoAssetUrl ? (
      <SOrganizationSelectMenuItem typeOrganization={props.menuItem.type}>
        <Img resolution={1440} src={props.menuItem.logoAssetUrl} />
      </SOrganizationSelectMenuItem>
    ) : typeof props.menuItem.name === "string" ? (
      <SOrganizationSelectMenuItem typeOrganization={props.menuItem.type}>
        {getPlaceholderLettersByName(props.menuItem.name)}</SOrganizationSelectMenuItem>
    ) : null
  ) : <div>HI</div>;
};
