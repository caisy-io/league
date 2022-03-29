import React, { Fragment, ReactNode } from "react";
import { ISizesWithDefault } from "../../interfaces";
import { SButton } from "./styles/SButton";

export type IButtonType = "primary" | "secondary" | "tertiary" | "danger" | "neutral";
export type IButtonState = "default" | "hover" | "focus" | "disabled";

const toTypeString = (child: { type: symbol | string }) =>
  (typeof child.type === "symbol" ? child.type.toString() : child.type) || "";
export interface IButtonProps {
  type?: IButtonType;
  size?: ISizesWithDefault;
  dashed?: boolean;
  disabled?: boolean;
  onClick?: (e: Event) => void;
  style?: any;
  ref?: any;
  as?: string;
  children?: any;
  htmlType?: string;
  activated?: boolean;
  sticked?: boolean;
  styleOverwrite?: string;
}

const childFragmentMap = (child: any) => {
  if (!child) {
    return null;
  }
  if (typeof child === "string" && child.trim() !== "") {
    return <span>{child}</span>;
  }
  if (toTypeString(child.type).includes("currentColor") && toTypeString(child.type).includes("svg")) {
    return <div className="icon">{child}</div>;
  }
  if (child.type === Fragment) {
    return <>{React.Children.map(child.props.children, childFragmentMap)}</>;
  }
  return child;
};
export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({ children, onClick, ...props }, ref) => (
  <SButton
    {...props}
    onClick={!props.disabled && onClick ? onClick : undefined}
    type={props.htmlType}
    styleType={props.type}
    ref={ref}
    styleOverwrite={props.styleOverwrite}
  >
    {React.Children.map(children, childFragmentMap)}
  </SButton>
));
