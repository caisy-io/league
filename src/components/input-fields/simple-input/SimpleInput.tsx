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
import { SSimpleInput, SSimpleInputMultiline } from "./styles/SSimpleInput";
import { SSimpleInputIconWrapper } from "./styles/SSimpleInputIconWrapper";
import { SSimpleInputInsideContainer } from "./styles/SSimpleInputInsideContainer";
import { SSimpleInputOutsideContainer } from "./styles/SSimpleInputOutsideContainer";
import { SSimpleInputRenderBadgeWrapper } from "./styles/SSimpleInputRenderBadgeWrapper";
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
  renderBadge?: string | ReactNode;
  renderButton?: string | ReactNode;
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
  renderBadge,
  renderButton,
}) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const [, rerender] = useState(false);

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

  const resizeInput = useCallback(() => {
    let width: number | undefined = undefined;

    if (!inputRef?.current?.value && placeholder) {
      (spanRef.current as HTMLSpanElement).innerText = placeholder;
      width = (spanRef.current?.scrollWidth as number) + 2;
    } else if (inputRef?.current?.value) {
      (spanRef.current as HTMLSpanElement).innerText = inputRef.current.value;
    } else {
      (spanRef.current as HTMLSpanElement).innerText = "";
    }

    (inputRef.current as HTMLInputElement).style.width = width ? `${width}px` : "100%";
    (requiredIndicatorRef.current as HTMLInputElement).style.width = width ? `${width}px` : "100%";

    if (multiline) {
      (inputRef.current as HTMLInputElement).style.height = "20px";
      (inputRef.current as HTMLInputElement).style.height = `${inputRef.current?.scrollHeight}px`;
    }
    rerender((prev) => !prev);
  }, [placeholder, inputRef?.current?.value]);

  useEffect(() => {
    resizeInput();
  }, [value, placeholder]);

  const InputComponent = multiline ? SSimpleInputMultiline : SSimpleInput;

  const requiredIndicatorRef = useRef<HTMLDivElement>(null);

  const testRef = useRef<HTMLDivElement>(null);

  return (
    <SSimpleInputWrapper
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
          <SSimpleInputRequiredIndicatorContainer
            style={{ display: "flex", alignItems: "center", gap: 8 }}
            ref={requiredIndicatorRef}
          >
            {required && !inputRef?.current?.value && !label && (!errors || errors.length === 0) && (
              <SSimpleInputRequiredIndicator />
            )}
            <InputComponent
              error={state === "error"}
              locked={state === "locked"}
              onChange={(e) => {
                onChange?.(e);
              }}
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={value || ""}
              placeholder={placeholder}
              disabled={disabled}
              onKeyUp={onKeyUp}
              type={type}
            ></InputComponent>
            {renderBadge && (
              <SSimpleInputRenderBadgeWrapper left={spanRef.current?.scrollWidth} ref={testRef}>
                {renderBadge}
              </SSimpleInputRenderBadgeWrapper>
            )}
          </SSimpleInputRequiredIndicatorContainer>
        </SSimpleInputInsideContainer>
        {renderButton}
        <SSimpleInputRightWrapper>
          <SSimpleInputIconWrapper>{rightIcon}</SSimpleInputIconWrapper>
        </SSimpleInputRightWrapper>
      </SSimpleInputOutsideContainer>
    </SSimpleInputWrapper>
  );
};
