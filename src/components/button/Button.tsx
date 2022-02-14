import React from "react";
import { ISizesWithDefault } from "../../interfaces";
import { SButton } from "./styles/SButton";

export type IButtonType = "primary" | "secondary" | "tertiary" | "danger";
export type IButtonState = "default" | "hover" | "focus" | "disabled";

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

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({ children, onClick, ...props }, ref) => (
  <SButton {...props} onClick={!props.disabled && onClick ? onClick : undefined} type={props.htmlType} styleType={props.type} ref={ref} styleOverwrite={props.styleOverwrite}>
    {React.Children.map(children, (child: any) => {
      if (!child) {
        return null;
      }
      if (typeof child === "string" && child.trim() !== "") {
        return <span>{child}</span>;
      }
      if (`${child.type}`.includes("currentColor") && `${child.type}`.includes("svg")) {
        return <div className="icon">{child}</div>;
      }
      return child;
    })}
  </SButton>
));
