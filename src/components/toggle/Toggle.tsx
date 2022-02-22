import React from "react";
import { SToggle } from "./styles/SToggle";
import { SToggleCircle } from "./styles/SToggleCircle";

interface IToggle {
  activated: boolean;
  onChange: (newValue: boolean) => void;
  size?: "small";
}

export const Toggle: React.FC<IToggle> = ({ activated, onChange, size }) => {
  return (
    <SToggle size={size} activated={activated} onClick={() => onChange?.(!activated)}>
      <SToggleCircle size={size} activated={activated} />
    </SToggle>
  );
};