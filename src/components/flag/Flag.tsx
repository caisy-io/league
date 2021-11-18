import React, { FC } from "react";
import * as Flags from "./flags"
import { SFlags } from "./styles/SFlags";
import { IFlag } from "./IFlag";

const Flag: FC<IFlag> = ({ countryCode, size }) => {
  const Flag = countryCode && Flags[countryCode];
  return (
    <SFlags size={size}>
      <Flag/>
    </SFlags>
  )
};

export default Flag;
