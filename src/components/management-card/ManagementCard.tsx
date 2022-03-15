import React from "react";
import { SManagementBlockTitle } from "./styles/SManagementBlockTitle";
import { SManagementCard } from "./styles/SManagementCard";
import { SManagementIconLabelWrapper } from "./styles/SManagementIconLabelWrapper";
import { SManagementIconWrapper } from "./styles/SManagementIconWrapper";

interface IManagementCard {
  label?: string;
  icon?: React.ReactNode;
  button?: React.ReactNode;
  children?: React.ReactNode;
  styleOverwrite?: React.CSSProperties;
}

export const ManagementCard: React.FC<IManagementCard> = ({ icon, label, button, children, styleOverwrite }) => {
  return (
    <SManagementCard style={styleOverwrite}>
      {(icon || label || button) && (
        <SManagementBlockTitle>
          <SManagementIconLabelWrapper>
            {icon && <SManagementIconWrapper>{icon}</SManagementIconWrapper>}
            {label}
          </SManagementIconLabelWrapper>
          {button}
        </SManagementBlockTitle>
      )}
      {children}
    </SManagementCard>
  );
};
