import React, { FC } from "react";
import * as Flags from "./flags"
import { SPreviewFlagRound } from "./styles/SPreviewFlagRound";
import { IFlag } from "./IFlag";

const PreviewFlagRound: FC<IFlag> = ({ countryCode, size }) => {
  const CountryFlag = countryCode && Flags[countryCode];
   
  return (
    <>
      {CountryFlag && 
        <SPreviewFlagRound size={size}>
          <CountryFlag/>
        </SPreviewFlagRound>
      }
    </>
  )
};

export default PreviewFlagRound;
