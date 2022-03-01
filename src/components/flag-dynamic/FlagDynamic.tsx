import React, { FC } from "react";
import { SFlagDynamic } from "./styles/SFlagDynamic";
import { IFlagDynamic } from "./types";

export const FlagDynamic: FC<IFlagDynamic> = ({ size, children }) => {
  return (
    <SFlagDynamic size={size}>
      {children}
    </SFlagDynamic>
  );
};
