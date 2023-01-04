import React from "react";
import { SBlueprintEditorSidebar } from "./styles/SBlueprintEditorSidebar";

export const BlueprintEditorSidebar: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return <SBlueprintEditorSidebar>{props.children}</SBlueprintEditorSidebar>;
};
