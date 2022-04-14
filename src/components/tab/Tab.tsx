import React, { CSSProperties } from "react";
import { ISizesWithDefault } from "../../interfaces";
import { STab } from "./styles/STab";

interface ITab {
  size?: ISizesWithDefault;
  activated?: boolean;
  icon?: JSX.Element;
  value: string | number;
  onClick?: (value: string | number) => void;
  styleOverwrite?: CSSProperties;
}

export const Tab: React.FC<ITab> = ({ size, activated, icon, onClick, value, styleOverwrite, ...props }) => {
  const onlyIcon = !!icon && !props.children;

  const handleClick = () => {
    onClick?.(value);
  };

  return (
    <STab activated={activated} onlyIcon={onlyIcon} size={size} onClick={handleClick} styleOverwrite={styleOverwrite}>
      {icon && icon}
      {props.children}
    </STab>
  );
};
