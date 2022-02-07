import React, { ReactNode } from "react";
import { SLineSelectItem } from "./styles/SLineSelectItem";

export interface IDataSourceItem {
  title: string;
  label?: string;
  key: string;
  data?: any;
  icon?: ReactNode;
}

interface ILineSelectItem {
  children?,
  renderItem?: (data: any) => React.ReactNode;
  onSelectValue?: (e: string) => void;
  value?: number;
  opened?: boolean;
  onClose?: () => void;
}

export const LineSelectItem: React.FC<ILineSelectItem> = ({ children, opened }) => {
  return (
    <SLineSelectItem opened={opened}>
      {children}
    </SLineSelectItem>
  );
};
