import React, { InputHTMLAttributes } from "react";
import { SSimpleInput } from "./styles/SSimpleInput";
import { SSimpleInputLabel } from "./styles/SSimpleInputLabel";
import { SSimpleInputRequiredIndicator } from "./styles/SSimpleInputRequiredIndicator";
import { SSimpleInputWrapper } from "./styles/SSimpleInputWrapper";

type TSimpleInputState = "success" | "error";

interface ISimpleInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  state?: TSimpleInputState;
  required?: boolean;
}

export const SimpleInput: React.FC<ISimpleInput> = ({ label, state, required, ...props }) => {
  const [hovering, setHovering] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [inputLength, setInputLength] = React.useState(props.value?.toString().length);

  const inputRef = React.useRef<any>();
  const spanRef = React.useRef<any>();

  const onClick = () => {
    inputRef.current.focus();
  };

  const resizeInput = () => {
    spanRef.current.innerText = inputRef.current.value;
    const width = spanRef.current.scrollWidth;
    console.log(width);
    setInputLength(width + 1);
  };

  return (
    <SSimpleInputWrapper
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      active={active}
      state={state}
      onClick={onClick}
    >
      <span ref={spanRef} style={{ width: "fit-content", visibility: "hidden", position: "absolute", fontSize: 14 }} />
      <div style={{ position: "relative", width: "fit-content" }}>
        {required && <SSimpleInputRequiredIndicator />}
        {label && (
          <SSimpleInputLabel state={state} active={active} hovering={hovering}>
            {label}
          </SSimpleInputLabel>
        )}
        <SSimpleInput
          onChange={(e) => {
            resizeInput();
            props.onChange?.(e);
          }}
          width={inputLength}
          required={required}
          ref={inputRef}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          {...props}
        />
      </div>
    </SSimpleInputWrapper>
  );
};
