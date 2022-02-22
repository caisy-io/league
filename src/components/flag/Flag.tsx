import React, { FC } from "react";
import { SFlags } from "./styles/SFlags";
import { IFlag } from "./types";

export const Flag: FC<IFlag> = ({ countryCode, size }) => {
  const CountryFlag = countryCode && (<img src={require(`./flags/round/${countryCode}.svg`).default}/>)

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
