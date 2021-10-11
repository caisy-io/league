import React from "react";
import { GSBase } from "../../constants/styles/global-style";

export const Theme: React.FC = ({ ...props }) => {
  return (
    <>
      <GSBase />
      {props.children}
    </>
  );
};
