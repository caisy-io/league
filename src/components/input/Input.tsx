import React, { InputHTMLAttributes, ReactElement } from "react";
import { SInput } from "./styles/SInput";
import { SInputIcon } from "./styles/SInputIcon";
import { SInputCloseButton } from "./styles/SInputCloseButton";
import { IconClose } from "../../icons";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  // type?: "number" | "password" | "email" | "text";
  icon?: () => ReactElement;
  hasCloseButton?: boolean;
  onClose?: () => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  wrapperStyle?: React.CSSProperties;
}

export const Input: React.FC<IInput> = ({ hasCloseButton, onClose, icon, type = "text", wrapperStyle, ...props }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const onIconClick = () => {
    ref?.current?.focus();
  };

  return (
    <SInput style={wrapperStyle}>
      {icon && <SInputIcon onClick={onIconClick}>{icon()}</SInputIcon>}
      <input ref={ref} {...props} type={type} onKeyUp={(e) => props.onKeyUp?.(e)} />
      {hasCloseButton && <SInputCloseButton onClick={onClose}>{IconClose()}</SInputCloseButton>}
    </SInput>
  );
};
