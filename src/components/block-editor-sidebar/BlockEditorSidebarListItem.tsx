import React, { FC } from "react";
import { SBlockEditorSidebarListItem } from "./styles/SBlockEditorSidebarListItem";

export const BlockEditorSidebarListItem: FC = ({ children }) => {
  return <SBlockEditorSidebarListItem>{children}</SBlockEditorSidebarListItem>;
};
