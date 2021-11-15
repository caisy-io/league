import React, { FC } from "react";
import * as Flags from "./flags"
import { SFlags } from "./styles/SFlags";

const Flag: FC<any> = ({ countryCode, size }) => {
  const Flag = Flags[countryCode]
  return (
    <SFlags size={size}>
      <Flag/>
    </SFlags>
  )
}

export default Flag;
