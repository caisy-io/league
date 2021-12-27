import React from "react";
import { ISizesWithDefault } from "../../interfaces";
import { STab } from "./styles/STab";

interface ITab {
  size?: ISizesWithDefault;
  activated?: boolean;
  icon?: JSX.Element;
  value: string | number;
  onClick?: (value: string | number) => void;
}

export const Tab: React.FC<ITab> = ({ size, activated, icon, onClick, value, ...props }) => {
  const onlyIcon = !!icon && !props.children;

  const handleClick = () => {
    onClick?.(value);
  };

  return (
    <STab activated={activated} onlyIcon={onlyIcon} size={size} onClick={handleClick}>
      {icon && icon}
      {props.children}
    </STab>
  );
};
