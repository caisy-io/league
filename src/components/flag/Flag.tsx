import React, { FC } from "react";
import { SFlags } from "./styles/SFlags";
import { IFlag } from "./types";

export const Flag: FC<IFlag> = ({ countryCode, size }) => {
  return (
    <SFlags size={size}>
      {countryCode && require(`./flags/round/${countryCode}.svg`)}
    </SFlags>
  );
};
