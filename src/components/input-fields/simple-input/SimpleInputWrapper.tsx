import React, { FC, KeyboardEvent, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SErrorMessage } from "../styles";
import { SLabel } from "../styles";
import { SSimpleInputIconWrapper } from "./styles/SSimpleInputIconWrapper";
import { SSimpleInputInsideContainer } from "./styles/SSimpleInputInsideContainer";
import { SSimpleInputOutsideContainer } from "./styles/SSimpleInputOutsideContainer";
import { SSimpleInputRequiredIndicator } from "./styles/SSimpleInputRequiredIndicator";
import { SSimpleInputRequiredIndicatorContainer } from "./styles/SSimpleInputRequiredIndicatorContainer";
import { SSimpleInputRightWrapper } from "./styles/SSimpleInputRightIcon";
import { SSimpleInputWrapper } from "./styles/SSimpleInputWrapper";

type TSimpleInputState = "success" | "error" | "default" | "locked";

export interface ISimpleInput {
  label?: string | ReactNode;
  errors?: string[];
  state?: TSimpleInputState;
  translationBadge?: JSX.Element;
  required?: boolean;
  onFocus?: (e: InputEvent) => void;
  onBlur?: (e: InputEvent) => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
}

export const SimpleInputWrapper: FC<ISimpleInput> = ({
  state,
  required,
  onFocus,
  onBlur,
  label,
  errors,
  translationBadge,
  leftIcon,
  rightIcon,
  children
}) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <SSimpleInputWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={(e) => {
        setActive(true)
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setActive(false)
        onBlur?.(e);
      }}
      active={active}
      state={state}
    >
      <SSimpleInputOutsideContainer>
        <SSimpleInputIconWrapper>{leftIcon}</SSimpleInputIconWrapper>
        <SSimpleInputInsideContainer>
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

          <SSimpleInputRequiredIndicatorContainer>
            {required && !label && (!errors || errors.length === 0) && (
              <SSimpleInputRequiredIndicator />
            )}
            {children}
          </SSimpleInputRequiredIndicatorContainer>
        </SSimpleInputInsideContainer>
        <SSimpleInputRightWrapper>
          <SSimpleInputIconWrapper>{rightIcon}</SSimpleInputIconWrapper>
        </SSimpleInputRightWrapper>
      </SSimpleInputOutsideContainer>
    </SSimpleInputWrapper>
  );
};
