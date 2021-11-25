import React from "react";
import { STab } from "./styles/STab";

type ITabSize = "Micro" | "Small" | "Medium" | "Default";

interface ITab {
  size?: ITabSize;
  activated?: boolean;
  icon?: JSX.Element;
}

export const Tab: React.FC<ITab> = ({ ...props }) => {
  const onlyIcon = !!props.icon && !props.children;

  return (
    <STab onlyIcon={onlyIcon} {...props}>
      {props.icon && props.icon}
      {props.children}
    </STab>
  );
};
