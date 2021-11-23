import React, { FC } from "react";
import * as Flags from "./flags"
import { SFlags } from "./styles/SFlags";
import { IFlag } from "./IFlag";

const Flag: FC<IFlag> = ({ countryCode, size }) => {
  const CountryFlag = countryCode && Flags[countryCode];
   
  return (
    <>
      {CountryFlag && 
        <SFlags size={size}>
          <CountryFlag/>
        </SFlags>
      }
    </>
  )
};

export default Flag;
