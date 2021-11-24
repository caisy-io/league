import { SToggle } from "./styles/SToggle";
import React from "react";
import { SToggleInput } from "./styles/SToggleInput";
import { SToggleSlider } from "./styles/SToggleSlider";

export interface IToggleProps {
  onChange: (value: boolean) => void;
  value: boolean;
  small?: boolean;
}

export const Toggle: React.FC<IToggleProps> = ({ ...props}) => {
  return (
    <SToggle {...props}>
      <SToggleInput onChange={() => props.onChange(!props.value)} type="checkbox" checked={!!props.value} />
      <SToggleSlider {...props} />
    </SToggle>
  );
};
