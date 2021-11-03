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

  return (
    <SSimpleInputWrapper
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      active={active}
      state={state}
      onClick={onClick}
    >
      <span ref={spanRef} style={{ width: "fit-content", visibility: "hidden", position: "absolute", fontSize: 14 }} />
      {label ? (
        <>
          <div style={{ position: "relative", width: "fit-content" }}>
            {required && <SSimpleInputRequiredIndicator />}
            <SSimpleInputLabel state={state} active={active} hovering={hovering}>
              {label}
            </SSimpleInputLabel>
          </div>
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
        </>
      ) : (
        <div style={{ position: "relative", width: "fit-content" }}>
          {required && <SSimpleInputRequiredIndicator />}
          <SSimpleInputLabel state={state} active={active} hovering={hovering}>
            {label}
          </SSimpleInputLabel>
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
      )}
    </SSimpleInputWrapper>
  );
};
