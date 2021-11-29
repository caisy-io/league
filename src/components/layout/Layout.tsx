import React from "react";
import { SLayout } from "./styles/SLayout";
interface ILayout {
  style?: any;
  className?: any;
}

export const Layout: React.FC<ILayout> = ({children, ...props }) => {
  return <SLayout { ...props }>{children}</SLayout>;
};
