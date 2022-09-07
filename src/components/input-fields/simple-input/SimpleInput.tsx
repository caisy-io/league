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
import { useDimensions } from "../../../utils";
import { SErrorMessage } from "../styles";
import { SLabel } from "../styles";
import { SSimpleInput, SSimpleInputMultiline } from "./styles/SSimpleInput";
import { SSimpleInputIconWrapper } from "./styles/SSimpleInputIconWrapper";
import { SSimpleInputInsideContainer } from "./styles/SSimpleInputInsideContainer";
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
  const requiredIndicatorRef = useRef<HTMLDivElement>();
  const { width: spanWidth } = useDimensions(spanRef);
  const { width: inputContainerWidth } = useDimensions(requiredIndicatorRef);

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
    (inputRef.current as HTMLInputElement).style.height = "20px";
    (inputRef.current as HTMLInputElement).style.height = `${inputRef.current?.scrollHeight}px`;
  }, [inputRef?.current?.value]);

  useEffect(() => {
    if (multiline) {
      resizeInput();
    }
  }, [inputRef?.current?.value]);

  const InputComponent = multiline ? SSimpleInputMultiline : SSimpleInput;

  const [showPlaceholderIndicator, setShowPlaceholderIndicator] = React.useState(false);
  React.useEffect(() => {
    if (required && !inputRef?.current?.value && !label && (!errors || errors.length === 0)) {
      setShowPlaceholderIndicator(true);
    } else {
      setShowPlaceholderIndicator(false);
    }
  }, [inputRef?.current?.value, errors]);

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
          <SSimpleInputTextWidth ref={spanRef}>{placeholder ? placeholder : ""}</SSimpleInputTextWidth>
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

          <SSimpleInputRequiredIndicatorContainer ref={requiredIndicatorRef}>
            {showPlaceholderIndicator && (
              <SSimpleInputRequiredIndicator
                style={{
                  left: spanWidth < inputContainerWidth ? `${spanWidth + 2}px` : "100%",
                }}
              />
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
              value={value === null || value === undefined ? "" : value}
              placeholder={placeholder}
              disabled={disabled}
              onKeyUp={onKeyUp}
              type={type}
            />
          </SSimpleInputRequiredIndicatorContainer>
        </SSimpleInputInsideContainer>
        <SSimpleInputRightWrapper>
          <SSimpleInputIconWrapper>{rightIcon}</SSimpleInputIconWrapper>
        </SSimpleInputRightWrapper>
      </SSimpleInputOutsideContainer>
    </SSimpleInputWrapper>
  );
};
