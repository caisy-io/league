import React from "react";
import { SFormItem } from "./styles/SFormItem";
interface IFormItem {
  validateStatus?: string;
  children?: React.ReactNode;
}

export const FormItem: React.FC<IFormItem> = ({ validateStatus, ...props }) => {
  return <SFormItem validateStatus={validateStatus}>{props.children}</SFormItem>;
};
