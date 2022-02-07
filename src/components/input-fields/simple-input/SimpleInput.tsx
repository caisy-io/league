import React, { InputHTMLAttributes } from "react";
import { SErrorMessage } from "../styles/SErrorMessage";
import { SLabel } from "../styles/SLabel";
import { SSimpleInput } from "./styles/SSimpleInput";
import { SSimpleInputRequiredIndicator } from "./styles/SSimpleInputRequiredIndicator";
import { SSimpleInputRequiredIndicatorContainer } from "./styles/SSimpleInputRequiredIndicatorContainer";
import { SSimpleInputTextWidth } from "./styles/SSimpleInputTextWidth";
import { SSimpleInputWrapper } from "./styles/SSimpleInputWrapper";

type TSimpleInputState = "success" | "error";

interface ISimpleInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string[];
  state?: TSimpleInputState;
  translationBadge?: JSX.Element;
  required?: boolean;
  onChange: any;
  value: any;
}

export const SimpleInput: React.FC<ISimpleInput> = ({ state, required, value, onChange, ...props }) => {
  const [active, setActive] = React.useState(false);
  const [inputLength, setInputLength] = React.useState(value?.toString().length);

  const inputRef = React.useRef<any>();
  const spanRef = React.useRef<any>();

  const handleClick = React.useCallback(() => {
    inputRef.current.focus();
  }, [inputRef.current?.focus]);

  const resizeInput = React.useCallback(() => {
    if (!inputRef.current.value && props.placeholder) {
      spanRef.current.innerText = props.placeholder;
    } else {
      spanRef.current.innerText = inputRef.current.value;
    }
    let width = spanRef.current.scrollWidth;
    if (inputRef.current.value[inputRef.current.value.toString().length - 1] === " ") {
      width += 3;
    }
    setInputLength(width + 1);
  }, [setInputLength]);

  React.useEffect(() => {
    resizeInput();
  }, [value, props.placeholder]);

  const handleFocus = React.useCallback(
    (e) => {
      setActive(true);
      props.onFocus?.(e);
    },
    [setActive, props.onFocus],
  );

  const handleBlur = React.useCallback(
    (e) => {
      setActive(false);
      props.onBlur?.(e);
    },
    [setActive, props.onBlur],
  );

  return (
    <SSimpleInputWrapper active={active} state={state} onClick={handleClick}>
      <SSimpleInputTextWidth ref={spanRef} />
      {props.label && (
        <SSimpleInputRequiredIndicatorContainer>
          {required && <SSimpleInputRequiredIndicator />}
          <SLabel>{props.label}</SLabel>
        </SSimpleInputRequiredIndicatorContainer>
      )}

      {props.errors && props.errors.map((error) => <SErrorMessage>{error}</SErrorMessage>)}

      {props.translationBadge && props.translationBadge}

      <SSimpleInputRequiredIndicatorContainer>
        {required && !props.label && <SSimpleInputRequiredIndicator />}
        <SSimpleInput
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
          {...props}
        />
      </SSimpleInputRequiredIndicatorContainer>
    </SSimpleInputWrapper>
  );
};
