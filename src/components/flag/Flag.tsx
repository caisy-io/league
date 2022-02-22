import React, { FC } from "react";
import { SFlags } from "./styles/SFlags";
import { IFlag } from "./types";

export const Flag: FC<IFlag> = ({ size, children }) => {
  return (
    <SFlags size={size}>
      {children}
    </SFlags>
  );
};
