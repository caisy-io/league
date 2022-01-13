import React from "react";
import { SManagementBlockTitle } from "./styles/SManagementBlockTitle";
import { SManagementCard } from "./styles/SManagementCard";
import { SManagementIconWrapper } from "./styles/SManagementIconWrapper";

interface IManagementCard {
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const ManagementCard: React.FC<IManagementCard> = ({ icon, label, children }) => {
  return (
    <SManagementCard>
      {(icon || label) && (
        <SManagementBlockTitle>
          {icon && <SManagementIconWrapper>{icon}</SManagementIconWrapper>}
          {label}
        </SManagementBlockTitle>
      )}
      {children}
    </SManagementCard>
  );
};
