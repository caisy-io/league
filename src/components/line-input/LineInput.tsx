import React, { FC, useRef, useState } from "react";
import { SLineInput } from "./styles/SLineInput";
import { SLineInputLabel } from "./styles/SLineInputLabel";
import { SLineInputRequiredIndicator } from "./styles/SLineInputRequiredIndicator";
import { SLineInputRequiredIndicatorWidth } from "./styles/SLineInputRequiredIndicatorWidth";
import { SLineInputRequiredIndicatorWrapper } from "./styles/SLineInputRequiredIndicatorWrapper";
import { SLineInputWrapper } from "./styles/SLineInputWrapper";

interface ILineInput {
  state: "default" | "success" | "error";
  errorMessage?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: any) => void;
}

export const LineInput: FC<ILineInput> = ({ state, errorMessage, placeholder, label, required, value, onChange }) => {
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
      />
      <SLineInputRequiredIndicatorWrapper>
        <SLineInputRequiredIndicatorWidth>{value || placeholder}</SLineInputRequiredIndicatorWidth>
        <SLineInputRequiredIndicator />
      </SLineInputRequiredIndicatorWrapper>
    </SLineInputWrapper>
  );
};
