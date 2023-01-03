import React from "react";
import { SIconRotator } from "./styles/SIconRotator";

export interface IIconRotator {
  rotationDegrees?: number;
  styleOverwrite?: string;
  children?: React.ReactNode;
}

export const IconRotator: React.FC<IIconRotator> = ({ children, rotationDegrees, styleOverwrite }) => {
  return (
    <SIconRotator rotationDegrees={rotationDegrees} styleOverwrite={styleOverwrite}>
      {children}
    </SIconRotator>
  );
};
