import React from "react";
import { SLineSelectLabel } from "./styles/SLineSelectLabel";

interface ILineSelectLabel {
  children?,
}

export const LineSelectLabel: React.FC<ILineSelectLabel> = ({ children }) => {
  return (
    <SLineSelectLabel>
      {children}
    </SLineSelectLabel>
  );
};
