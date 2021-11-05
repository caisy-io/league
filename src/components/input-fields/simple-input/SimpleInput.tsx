import React, { InputHTMLAttributes } from "react";
import { SSimpleInput } from "./styles/SSimpleInput";
import { SSimpleInputRequiredIndicator } from "./styles/SSimpleInputRequiredIndicator";
import { SSimpleInputWrapper } from "./styles/SSimpleInputWrapper";

type TSimpleInputState = "success" | "error";

interface ISimpleInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  state?: TSimpleInputState;
  required?: boolean;
}

export const SimpleInput: React.FC<ISimpleInput> = ({ label, state, required, children, ...props }) => {
  const [active, setActive] = React.useState(false);
  const [inputLength, setInputLength] = React.useState(props.value?.toString().length);

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
  }, []);

  const handleFocus = (e) => {
    setActive(true);
    props.onFocus?.(e);
  };

  const handleBlur = (e) => {
    setActive(false);
    props.onBlur?.(e);
  };

  return (
    <SSimpleInputWrapper active={active} state={state} onClick={onClick}>
      <span ref={spanRef} style={{ width: "fit-content", visibility: "hidden", position: "absolute", fontSize: 14 }} />
      {children}

      <div style={{ position: "relative", width: "fit-content" }}>
        {required && <SSimpleInputRequiredIndicator />}
        <SSimpleInput
          onChange={(e) => {
            resizeInput();
            props.onChange?.(e);
          }}
          width={inputLength}
          required={required}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </div>
    </SSimpleInputWrapper>
  );
};
