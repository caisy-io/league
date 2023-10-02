import React, {FC, ReactNode, useCallback, useRef, useState} from "react";
import {IconRotator} from "../icon-rotator";
import {Popover} from "../popover";
import {Tooltip} from "../tooltip";
import {IconQuestionCircle, IconChevronDown} from "../../icons";
import {SFieldErrorsDropdownBadge} from "./styles/SFieldErrorsDropdownBadge";
import {SFieldErrorsDropdownError} from "./styles/SFieldErrorsDropdownError";
import {SFieldErrorsDropdownErrorsWrapper} from "./styles/SFieldErrorsDropdownErrorsWrapper";
import {SFieldErrorsDropdownPopover} from "./styles/SFieldErrorsDropdownPopover";
import {SFieldInputOutsideWrapper} from "./styles/SFieldInputOutsideWrapper";
import {SFieldInputOutsideWrapperSvg} from "./styles/SFieldInputOutsideWrapperSvg";
import {SFieldInputWrapper} from "./styles/SFieldInputWrapper";
import {SFieldItem} from "./styles/SFieldItem";
import {SFieldHeader} from "./styles/SFieldHeader";
import {IconButton} from "../icon-button";
import {SFieldTitle} from "./styles/SFieldTitle";
import {SFieldDisplayButton} from "./styles/SFieldDisplayButton";
import {SFieldDescription} from "./styles/SFieldDescription";
import {SFieldErrorsDropdown} from "./styles/SFieldErrorsDropdown";
import {IInputFieldProps} from "./types";
import {ClickOutside} from "../../utils";
import {IconPrimaryKeyStar} from "../../icons/IconPrimaryKeyStar";

export const InputField: FC<IInputFieldProps> = ({
                                                   title,
                                                   description,
                                                   icon,
                                                   required,
                                                   tooltip,
                                                   errors,
                                                   errorsText = "Errors",
                                                   errorText = "Error",
                                                   outsideWrapper,
                                                   wrapperBgColor,
                                                   children,
                                                   onExpand,
                                                   onCollapse,
                                                   id,
                                                   usersListComponent,
                                                   onClick,
                                                   onClickOutside = () => {
                                                   },
                                                   primary,
                                                 }) => {
  const [isOpen, setOpen] = useState(true);
  const [errorDropdownOpened, setErrorDropdownOpened] = useState(false);
  const ref = useRef(null);
  console.log("outsideWrapper", outsideWrapper)
  const toggleOpen = useCallback(() => {
    if (isOpen) {
      onCollapse?.();
    } else {
      onExpand?.();
    }
    setOpen(!isOpen);
  }, [isOpen, setOpen]);
  
  return (
    <ClickOutside onClickOutside={onClickOutside}>
      <div>
        <SFieldItem onClick={onClick} id={id} error={!!errors}>
          <SFieldHeader isOpen={isOpen}>
            {icon}
            <div style={{flex: "1 1 auto"}}>
              <SFieldTitle required={required}>
                <h3>{title}</h3>
                {tooltip && (
                  <div data-tooltip-icon>
                    <Tooltip content={tooltip} placement="right" color="black">
                      <IconQuestionCircle size={16}/>
                    </Tooltip>
                  </div>
                )}
                {primary && <IconPrimaryKeyStar/>}
              </SFieldTitle>
              {description && <SFieldDescription>{description}</SFieldDescription>}
            </div>
            {!!errors?.length && (
              <ClickOutside onClickOutside={() => {
                setErrorDropdownOpened(false);
              }}>
                <div>
                  <SFieldErrorsDropdown ref={ref} onClick={() => {
                    setErrorDropdownOpened(prevState => !prevState)
                  }}>
                    <SFieldErrorsDropdownBadge>
                      {errors.length}
                    </SFieldErrorsDropdownBadge>
                    {errors?.length === 1 ? errorText : errorsText}
                    <IconRotator rotationDegrees={errorDropdownOpened ? -180 : 0}>
                      <IconChevronDown size={16}/>
                    </IconRotator>
                  </SFieldErrorsDropdown>
                  <Popover display={errorDropdownOpened} disableTriangle placement="bottomLeft" reference={ref}>
                    {() => (
                      <SFieldErrorsDropdownPopover>
                        <SFieldErrorsDropdownErrorsWrapper>
                          {errors.map((error: ReactNode) => (
                            <SFieldErrorsDropdownError key={`error-${error}`}>{error}</SFieldErrorsDropdownError>
                          ))}
                        </SFieldErrorsDropdownErrorsWrapper>
                      </SFieldErrorsDropdownPopover>
                    )}
                  </Popover>
                </div>
              </ClickOutside>
            )}
            {usersListComponent}
            <SFieldDisplayButton data-display-button isOpen={isOpen}>
              <IconButton size='small' type="secondary" onClick={toggleOpen} activated={isOpen}>
                <IconChevronDown size={20}/>
              </IconButton>
            </SFieldDisplayButton>
          </SFieldHeader>
          {!outsideWrapper && (
            <SFieldInputWrapper wrapperBgColor={wrapperBgColor} isOpen={isOpen}>{children}</SFieldInputWrapper>
          )}
        </SFieldItem>
        {outsideWrapper && (
          <SFieldInputOutsideWrapper wrapperBgColor={wrapperBgColor} isOpen={isOpen}>
            <SFieldInputOutsideWrapperSvg>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="52" viewBox="0 0 13 52" fill="none">
                <path d="M1 0V43C1 47.4183 4.58172 51 9 51H13" stroke="#008CFF"/>
              </svg>
            </SFieldInputOutsideWrapperSvg>
           
            {children}
          </SFieldInputOutsideWrapper>
        )}
      </div>
    </ClickOutside>
  );
};
