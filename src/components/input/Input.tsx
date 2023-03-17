import React, { FC, forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { SInput } from "./styles/SInput";
import { SInputIcon } from "./styles/SInputIcon";
import { SInputCloseButton } from "./styles/SInputCloseButton";
import { IconClose } from "../../icons";
import { IIconSize } from "../../utils/types";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: "number" | "password" | "email" | "text";
  icon?: ReactNode | (() => ReactNode) | FC<IIconSize>;
  hasCloseButton?: boolean;
  onClose?: () => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  wrapperStyle?: React.CSSProperties;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ hasCloseButton, onClose, icon, type = "text", wrapperStyle, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onIconClick = () => {
      (ref as any)?.current?.focus();
      inputRef?.current?.focus();
    };

    return (
      <SInput style={wrapperStyle}>
        {icon && <SInputIcon onClick={onIconClick}>{icon}</SInputIcon>}
        <input ref={ref ? ref : inputRef} {...props} type={type} onKeyUp={(e) => props.onKeyUp?.(e)} />
        {hasCloseButton && (
          <SInputCloseButton onClick={onClose}>
            <IconClose />
          </SInputCloseButton>
        )}
      </SInput>
    );
  },
);
