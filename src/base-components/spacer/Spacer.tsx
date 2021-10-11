import React from "react";
import SSpacer from "./Styles/SSpacer";

export const Spacer = (props) => {
  return <SSpacer {...props}>{props.children}</SSpacer>;
};
