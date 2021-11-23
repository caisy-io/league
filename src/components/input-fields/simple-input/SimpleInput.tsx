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

export const SimpleInput: React.FC<ISimpleInput> = ({ state, required, children, value, onChange, ...props }) => {
  const [active, setActive] = React.useState(false);
  const [inputLength, setInputLength] = React.useState(value?.toString().length);

  const inputRef = React.useRef<any>();
  const spanRef = React.useRef<any>();

  const onClick = () => {
    inputRef.current.focus();
  };

  const resizeInput = () => {
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
  };

  React.useEffect(() => {
    resizeInput();
  }, [value]);

  const handleFocus = (e) => {
    setActive(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e) => {
    setActive(false);
    props.onBlur?.(e);
  };

  const TranslationBadge = () => (props.translationBadge ? props.translationBadge : null);

  return (
    <SSimpleInputWrapper active={active} state={state} onClick={onClick}>
      <SSimpleInputTextWidth ref={spanRef} />
      {props.label && (
        <SSimpleInputRequiredIndicatorContainer>
          {required && <SSimpleInputRequiredIndicator />}
          <SLabel>{props.label}</SLabel>
        </SSimpleInputRequiredIndicatorContainer>
      )}

      {props.errors && props.errors.map((error) => <SErrorMessage>{error}</SErrorMessage>)}

      <TranslationBadge />

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
