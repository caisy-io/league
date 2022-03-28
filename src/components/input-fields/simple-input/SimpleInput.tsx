import React, {
  FC,
  HTMLInputTypeAttribute,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { SErrorMessage } from "../styles";
import { SLabel } from "../styles";
import { SSimpleInput } from "./styles/SSimpleInput";
import { SSimpleInputIconWrapper } from "./styles/SSimpleInputIconWrapper";
import { SSimpleInputInsideContainer } from "./styles/SSimpleInputInsideContainer";
import { SSimpleInputMultiline } from "./styles/SSimpleInputMultiline";
import { SSimpleInputOutsideContainer } from "./styles/SSimpleInputOutsideContainer";
import { SSimpleInputRequiredIndicator } from "./styles/SSimpleInputRequiredIndicator";
import { SSimpleInputRequiredIndicatorContainer } from "./styles/SSimpleInputRequiredIndicatorContainer";
import { SSimpleInputRightWrapper } from "./styles/SSimpleInputRightIcon";
import { SSimpleInputTextWidth } from "./styles/SSimpleInputTextWidth";
import { SSimpleInputWrapper } from "./styles/SSimpleInputWrapper";

type TSimpleInputState = "success" | "error" | "default" | "locked";

interface ISimpleInput {
  label?: string | ReactNode;
  errors?: string[];
  state?: TSimpleInputState;
  translationBadge?: JSX.Element;
  required?: boolean;
  onChange?: (e: any) => void;
  value?: string;
  id?: string;
  placeholder?: string;
  onFocus?: (e: InputEvent) => void;
  onBlur?: (e: InputEvent) => void;
  disabled?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
  type?: HTMLInputTypeAttribute;
  multiline?: boolean;
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
  disabled,
  leftIcon,
  rightIcon,
  onKeyUp,
  id,
  type = "text",
  multiline,
}) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const inputRef = useRef<HTMLInputElement>();
  const spanRef = useRef<HTMLSpanElement>();

  const handleClick = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef.current?.focus]);

  const handleFocus = useCallback(
    (e) => {
      setActive(true);
      onFocus?.(e);
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

  const [inputWidth, setInputWidth] = useState<number | undefined>(undefined);

  const resizeInput = useCallback(() => {
    let width: number | undefined = undefined;

    if (!inputRef?.current?.value && placeholder) {
      (spanRef.current as HTMLSpanElement).innerText = placeholder;
      width = (spanRef.current?.scrollWidth as number) + 1;
    }

    setInputWidth(width);

    if (multiline) {
      (inputRef.current as HTMLInputElement).style.cssText = "height: auto";
      setTextAreaHeight(spanRef.current?.scrollHeight || 20);
    }
  }, [setInputWidth, placeholder, inputRef?.current?.value]);

  useEffect(() => {
    resizeInput();
  }, [value, placeholder]);

  const [textareaHeight, setTextAreaHeight] = useState(20);

  return (
    <SSimpleInputWrapper
      tabindex={-1}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      active={active}
      state={state}
      onClick={handleClick}
      id={id}
    >
      <SSimpleInputOutsideContainer>
        <SSimpleInputIconWrapper>{leftIcon}</SSimpleInputIconWrapper>
        <SSimpleInputInsideContainer>
          <SSimpleInputTextWidth ref={spanRef} />
          {label && (
            <SSimpleInputRequiredIndicatorContainer withLabel={true}>
              {required && <SSimpleInputRequiredIndicator />}
              <SLabel locked={state === "locked"} error={state === "error"} active={active} hover={hover}>
                {label}
              </SLabel>
            </SSimpleInputRequiredIndicatorContainer>
          )}

          {errors &&
            errors.map((error, index) => (
              <SErrorMessage key={index}>
                {required && !label && index + 1 === errors.length && <SSimpleInputRequiredIndicator />}
                {error}
              </SErrorMessage>
            ))}

          {translationBadge}

          <SSimpleInputRequiredIndicatorContainer width={inputWidth}>
            {required && !inputRef?.current?.value && !label && (!errors || errors.length === 0) && (
              <SSimpleInputRequiredIndicator />
            )}
            {multiline ? (
              <SSimpleInputMultiline
                width={inputWidth}
                height={textareaHeight}
                error={state === "error"}
                locked={state === "locked"}
                onChange={(e) => {
                  onChange?.(e);
                }}
                required={required}
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value || ""}
                placeholder={placeholder}
                disabled={disabled}
                onKeyUp={onKeyUp}
                type={type}
              ></SSimpleInputMultiline>
            ) : (
              <SSimpleInput
                width={inputWidth}
                error={state === "error"}
                locked={state === "locked"}
                onChange={(e) => {
                  onChange?.(e);
                }}
                required={required}
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={value || ""}
                placeholder={placeholder}
                disabled={disabled}
                onKeyUp={onKeyUp}
                type={type}
              />
            )}
          </SSimpleInputRequiredIndicatorContainer>
        </SSimpleInputInsideContainer>
        <SSimpleInputRightWrapper>
          <SSimpleInputIconWrapper>{rightIcon}</SSimpleInputIconWrapper>
        </SSimpleInputRightWrapper>
      </SSimpleInputOutsideContainer>
    </SSimpleInputWrapper>
  );
};
