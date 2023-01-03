import React, { FC, KeyboardEvent, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SErrorMessage } from "../styles";
import { SLabel } from "../styles";
import { SSimpleInputIconWrapper } from "../simple-input/styles/SSimpleInputIconWrapper";
import { SSimpleInputInsideContainer } from "../simple-input/styles/SSimpleInputInsideContainer";
import { SSimpleInputOutsideContainer } from "../simple-input/styles/SSimpleInputOutsideContainer";
import { SSimpleInputRequiredIndicator } from "../simple-input/styles/SSimpleInputRequiredIndicator";
import { SSimpleInputRequiredIndicatorContainer } from "../simple-input/styles/SSimpleInputRequiredIndicatorContainer";
import { SSimpleInputRightWrapper } from "../simple-input/styles/SSimpleInputRightIcon";
import { SSimpleInputWrapper } from "../simple-input/styles/SSimpleInputWrapper";

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
  id?: string;
  children?: React.ReactNode;
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
  children,
  id,
}) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <SSimpleInputWrapper
      id={id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={(e) => {
        setActive(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setActive(false);
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
            {required && !label && (!errors || errors.length === 0) && <SSimpleInputRequiredIndicator />}
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
