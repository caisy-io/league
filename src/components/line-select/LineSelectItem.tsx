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
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  onClose?: () => void;
}

export const LineSelectItem: React.FC<ILineSelectItem> = ({ children }) => {
  return (
    <SLineSelectItem>
      {children}
    </SLineSelectItem>
  );
};
