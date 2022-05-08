import React, { ReactNode } from "react";
import { IconDragable } from "../../icons";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { SSidebarCard } from "./styles/SSidebarCard";
import { SSidebarcardIconWrapper } from "./styles/SSidebarCardIconWrapper";
import { SSidebarCardSubtitle } from "./styles/SSidebarCardSubtitle";
import { SSidebarcardTextWrapper } from "./styles/SSidebarCardTextWrapper";
import { SSidebarCardTitle } from "./styles/SSidebarCardTitle";

export interface ISidebarCardProps {
  hover?: boolean;
  drag?: boolean;
  title?: string | ReactNode;
  description?: string | ReactNode;
  icon: React.ReactNode;
}

export const SidebarCard: React.FC<ISidebarCardProps> = ({ ...props }) => {
  return (
    <SSidebarCard {...props}>
      <SFlex>
        {props.icon}
        <SSidebarcardTextWrapper {...props}>
          <SSidebarCardTitle> {props.title}</SSidebarCardTitle>
          <SSidebarCardSubtitle> {props.description}</SSidebarCardSubtitle>
        </SSidebarcardTextWrapper>
      </SFlex>
      <SSidebarcardIconWrapper {...props}>
        {props.children}
        <IconDragable />
      </SSidebarcardIconWrapper>
    </SSidebarCard>
  );
};
