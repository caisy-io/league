import React from "react";
import { SButton } from "./styles/SButton";
export type IButtonType = "primary" | "secondary" | "danger" | "neutral" | "light" | "link";
export type IButtonSize = "default" | "medium" | "small";
export type IButtonState = "default" | "hover" | "focus" | "disabled";
export interface IButtonProps {
  type?: IButtonType;
  size?: IButtonSize;
  dashed?: boolean;
  round?: boolean;
  disabled?: boolean;
  onClick?: (e: Event) => void;
  style?: any;
  ref?: any;
  as?: string;
  children?: any;
  htmlType?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({ children, onClick, ...props }, ref) => (
  <SButton htmlType={props.htmlType} onClick={!props.disabled && onClick ? onClick : undefined} {...props} ref={ref}>
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
