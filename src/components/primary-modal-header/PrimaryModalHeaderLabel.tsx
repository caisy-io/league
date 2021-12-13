import React, { FC } from "react";
import { SPrimaryModalHeaderLabel } from "./styles/SPrimaryModalHeaderLabel";

interface IPrimaryModalHeaderLabel {
  onClick?: (value: string | number | undefined) => void;
  value?: string | number;
  active: boolean;
}

export const PrimaryModalHeaderLabel: FC<IPrimaryModalHeaderLabel> = ({ value, onClick, active, children }) => {
  return (
    <SPrimaryModalHeaderLabel active={active} onClick={() => onClick?.(value)}>
      {children}
    </SPrimaryModalHeaderLabel>
  );
};
