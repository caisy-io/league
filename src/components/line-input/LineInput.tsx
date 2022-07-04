import React, { FC, ReactNode, useRef, useState } from "react";
import { SLineInput } from "./styles/SLineInput";
import { SLineInputLabel } from "./styles/SLineInputLabel";
import { SLineInputRequiredIndicator } from "./styles/SLineInputRequiredIndicator";
import { SLineInputRequiredIndicatorWidth } from "./styles/SLineInputRequiredIndicatorWidth";
import { SLineInputRequiredIndicatorWrapper } from "./styles/SLineInputRequiredIndicatorWrapper";
import { SLineInputWrapper } from "./styles/SLineInputWrapper";

interface ILineInput {
  state: "default" | "success" | "error";
  errorMessage?: string | ReactNode;
  label: string | ReactNode;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: any) => void;
  autoFocus?: boolean;
}

export const LineInput: FC<ILineInput> = ({
  state,
  errorMessage,
  placeholder,
  label,
  required,
  value,
  onChange,
  autoFocus,
}) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  return (
    <SLineInputWrapper onClick={() => inputRef.current?.focus()} state={state} active={active} required={required}>
      <SLineInputLabel>
        {required && <SLineInputRequiredIndicator />}
        {state === "error" && errorMessage ? errorMessage : label}
      </SLineInputLabel>
      <SLineInput
        value={value}
        onChange={onChange}
        ref={inputRef}
        placeholder={placeholder}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        autoFocus={autoFocus}
      />
      <SLineInputRequiredIndicatorWrapper>
        <SLineInputRequiredIndicatorWidth>{value || placeholder}</SLineInputRequiredIndicatorWidth>
      </SLineInputRequiredIndicatorWrapper>
    </SLineInputWrapper>
  );
};
