import React, { useEffect, useState } from "react";
import { ISizesWithDefault } from "../..";
import { STab } from "./styles/STab";

interface ITab {
  size?: ISizesWithDefault;
  activated?: boolean;
  icon?: JSX.Element;
}

export const Tab: React.FC<ITab> = ({ size, activated, icon, ...props }) => {
  const onlyIcon = !!icon && !props.children;

  const [innerActivated, setInnerActivated] = useState(activated);

  useEffect(() => {
    setInnerActivated(activated);
  }, [activated]);

  return (
    <STab onClick={() => setInnerActivated(true)} activated={innerActivated} onlyIcon={onlyIcon} size={size}>
      {icon && icon}
      {props.children}
    </STab>
  );
};
