import React from "react";
import { ISizesWithDefault } from "../..";
import { STab } from "./styles/STab";

interface ITab {
  size?: ISizesWithDefault;
  activated?: boolean;
  icon?: JSX.Element;
  key: string;
  onClick?: (value: string) => void;
}

export const Tab: React.FC<ITab> = ({ size, activated, icon, onClick, key, ...props }) => {
  const onlyIcon = !!icon && !props.children;

  const handleClick = () => {
    onClick?.(key);
  };

  return (
    <STab activated={activated} onlyIcon={onlyIcon} size={size} onClick={handleClick}>
      {icon && icon}
      {props.children}
    </STab>
  );
};
