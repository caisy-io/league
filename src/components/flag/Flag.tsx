import React, { FC } from "react";
import { SFlags } from "./styles/SFlags";
import { IFlag } from "./types";

export const Flag: FC<IFlag> = ({ countryCode, size }) => {
  const CountryFlag = countryCode && <iframe src={require(`./flags/round/${countryCode}.svg`)} />

  return (
    <>
      {CountryFlag && (
        <SFlags size={size}>
          {CountryFlag}
        </SFlags>
      )}
    </>
  );
};
