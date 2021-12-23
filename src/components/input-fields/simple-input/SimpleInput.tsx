import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { SErrorMessage } from "../styles/SErrorMessage";
import { SLabel } from "../styles/SLabel";
import { SSimpleInput } from "./styles/SSimpleInput";
import { SSimpleInputRequiredIndicator } from "./styles/SSimpleInputRequiredIndicator";
import { SSimpleInputRequiredIndicatorContainer } from "./styles/SSimpleInputRequiredIndicatorContainer";
import { SSimpleInputTextWidth } from "./styles/SSimpleInputTextWidth";
import { SSimpleInputWrapper } from "./styles/SSimpleInputWrapper";

type TSimpleInputState = "success" | "error" | "default";

interface ISimpleInput {
  label?: string;
  errors?: string[];
  state?: TSimpleInputState;
  translationBadge?: JSX.Element;
  required?: boolean;
  onChange: any;
  value: any;
  placeholder?: string;
  onFocus?: (e: InputEvent) => void;
  onBlur?: (e: InputEvent) => void;
  icon?: JSX.Element;
}

export const SimpleInput: FC<ISimpleInput> = ({
  state,
  required,
  value,
  onChange,
  placeholder,
  onFocus,
  onBlur,
  label,
  errors,
  translationBadge,
}) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [inputLength, setInputLength] = useState(value?.toString().length);

  const inputRef = useRef<HTMLInputElement>();
  const spanRef = useRef<HTMLSpanElement>();

  const handleClick = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef.current?.focus]);

  const resizeInput = useCallback(() => {
    if (!inputRef.current?.value && placeholder) {
      (spanRef.current as HTMLSpanElement).innerText = placeholder;
    } else {
      (spanRef.current as HTMLSpanElement).innerText = inputRef.current?.value as string;
    }
    let width: number = spanRef.current?.scrollWidth as number;
    if (inputRef.current?.value[inputRef.current.value.toString().length - 1] === " ") {
      width += 3;
    }
    setInputLength(width + 1);
  }, [setInputLength, placeholder]);

  useEffect(() => {
    resizeInput();
  }, [value, placeholder]);

  const handleFocus = useCallback(
    (e) => {
      setActive(true);
      onFocus?.(e);
      console.log(active);
    },
    [setActive, onFocus],
  );

  const handleBlur = useCallback(
    (e) => {
      setActive(false);
      onBlur?.(e);
    },
    [setActive, onBlur],
  );

  return (
    <SSimpleInputWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      active={active}
      state={state}
      onClick={handleClick}
    >
      <SSimpleInputTextWidth ref={spanRef} />
      {label && (
        <SSimpleInputRequiredIndicatorContainer>
          {required && <SSimpleInputRequiredIndicator />}
          <SLabel active={active} hover={hover}>
            {label}
          </SLabel>
        </SSimpleInputRequiredIndicatorContainer>
      )}

      {errors &&
        errors.map((error, index) => (
          <SErrorMessage>
            {required && !label && index + 1 === errors.length && <SSimpleInputRequiredIndicator />}
            {error}
          </SErrorMessage>
        ))}

      {translationBadge}

      <SSimpleInputRequiredIndicatorContainer>
        {required && !label && (!errors || errors.length === 0) && <SSimpleInputRequiredIndicator />}
        <SSimpleInput
          error={state === "error" && errors?.length === 0}
          onChange={(e) => {
            resizeInput();
            onChange(e);
          }}
          width={inputLength}
          required={required}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value || ""}
          placeholder={placeholder}
        />
      </SSimpleInputRequiredIndicatorContainer>
    </SSimpleInputWrapper>
  );
};
