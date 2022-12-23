import React from "react";
import { SFormItemGroup } from "./styles/SFormItemGroup";
import { SFormItemLine } from "./styles/SFormItemLine";
interface IFormItem {
  validateStatus?: "error";
  children?: React.ReactNode;
}

export const FormItemGroup: React.FC<IFormItem> = ({ validateStatus, ...props }) => {
  return (
    <SFormItemGroup validateStatus={validateStatus}>
      <SFormItemLine />
      {props.children}
    </SFormItemGroup>
  );
};
