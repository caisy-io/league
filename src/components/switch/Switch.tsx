import { SSwitch } from "./styles/SSwitch";
import React from "react";
import { SSwitchInput } from "./styles/SSwitchInput";
import { SSwitchSlider } from "./styles/SSwitchSlider";

interface ISwitch {
  onChange: (value: boolean) => void;
  value: boolean;
}

export const Switch: React.FC<ISwitch> = ({ onChange, value }) => {
  return (
    <SSwitch>
      <SSwitchInput onChange={() => onChange(!value)} type="checkbox" checked={!!value} />
      <SSwitchSlider />
    </SSwitch>
  );
};
