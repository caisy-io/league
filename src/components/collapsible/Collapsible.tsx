import { SCollapsible } from "./styles/SCollapsible";
import React from "react";
import { CollapseWrapper } from "./CollapseWrapper";
interface ICollapsible {
  expanded?: boolean;
}

export const Collapsible: React.FC<ICollapsible> = ({ children, ...props }) => {
  const CW = CollapseWrapper as any;
  return (
    <SCollapsible {...props}>
      {/* @ts-ignore */}
      <CW isOpen={!!props.expanded}>{children}</CW>
    </SCollapsible>
  );
};
