import React, { FC } from "react";
import Flag from "../flag";
import { IFlag } from "../flag/IFlag";
import { SPreviewFlagRound } from "./styles/SPreviewFlagRound";

const PreviewFlagRound: FC<IFlag> = ({ countryCode, size }) => {
  return (
    <>
        <SPreviewFlagRound size={size}>
          <Flag countryCode={countryCode} />
        </SPreviewFlagRound>
      }
    </>
  )
};

export default PreviewFlagRound;
