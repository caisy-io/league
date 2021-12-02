import React, { FC } from "react";
import Flag from "../flag";
import { IFlag } from "../flag/IFlag";

const PreviewFlagRound: FC<IFlag> = ({ countryCode }) => {
  return (
    <>
      <Flag countryCode={countryCode} />
    </>
  )
};

export default PreviewFlagRound;
