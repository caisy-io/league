import React from "react";
import { SToggle } from "./styles/SToggle";
import { SToggleCircle } from "./styles/SToggleCircle";

interface IToggle {
  activated: boolean;
  onChange: (newValue: boolean) => void;
}

export const Toggle: React.FC<IToggle> = ({ activated, onChange }) => {
  return (
    <SToggle activated={activated} onClick={() => onChange?.(!activated)}>
      <SToggleCircle activated={activated} />
    </SToggle>
  );
};
