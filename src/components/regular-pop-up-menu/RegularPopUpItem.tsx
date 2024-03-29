import React, { FC } from "react";
import { MenuListItem } from "../menu-list-item/MenuListItem";
import { SPopUpItem } from "./styles/SPopUpItem";

export const RegularPopUpItem: FC<{ children?: React.ReactNode }> = ({ children }) => (
  <SPopUpItem>
    <MenuListItem>{children}</MenuListItem>
  </SPopUpItem>
);
