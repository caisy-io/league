import { SToggle } from "./styles/SToggle";
import React from "react";
import { SToggleInput } from "./styles/SToggleInput";
import { SToggleSlider } from "./styles/SToggleSlider";

interface IToggle {
  onChange: (value: boolean) => void;
  value: boolean;
}

export const Toggle: React.FC<IToggle> = ({ onChange, value }) => {
  return (
    <SToggle>
      <SToggleInput onChange={() => onChange(!value)} type="checkbox" checked={!!value} />
      <SToggleSlider />
    </SToggle>
  );
};
