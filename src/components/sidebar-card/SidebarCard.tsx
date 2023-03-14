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
  children?: React.ReactNode;
}

export const SidebarCard: React.FC<ISidebarCardProps> = ({ ...props }) => {
  return (
    <SSidebarCard drag={props.drag} hover={props.hover}>
      <SFlex>
        {props.icon}
        <SSidebarcardTextWrapper icon={props.icon}>
          <SSidebarCardTitle> {props.title}</SSidebarCardTitle>
          <SSidebarCardSubtitle> {props.description}</SSidebarCardSubtitle>
        </SSidebarcardTextWrapper>
      </SFlex>
      <SSidebarcardIconWrapper drag={props.drag} hover={props.hover}>
        {props.children}
        <IconDragable />
      </SSidebarcardIconWrapper>
    </SSidebarCard>
  );
};
