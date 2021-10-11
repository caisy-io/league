import React from "react";
import { SFormItemGroup } from "./styles/SFormItemGroup";
import { SFormItemLine } from "./styles/SFormItemLine";
interface IFormItem {
  validateStatus?: "error";
}

export const FormItemGroup: React.FC<IFormItem> = ({ validateStatus, ...props }) => {
  return (
    <SFormItemGroup validateStatus={validateStatus}>
      <SFormItemLine />
      {props.children}
    </SFormItemGroup>
  );
};
