import React from "react";
import { GSBase } from "../../constants/styles/global-style";

export const Theme: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return (
    <>
      <GSBase />
      {props.children}
    </>
  );
};
