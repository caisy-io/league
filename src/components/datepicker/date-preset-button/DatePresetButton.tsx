import React, { ButtonHTMLAttributes, ReactNode } from "react";
import SDatePresetButton from "./styles/SDatePresetButton";

interface IDatePresetButton {
  children: ReactNode;
}

export const DatePresetButton: React.FC<IDatePresetButton | ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return <SDatePresetButton {...props}>{children}</SDatePresetButton>;
};
