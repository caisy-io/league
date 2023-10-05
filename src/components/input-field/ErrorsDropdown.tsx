import {FC, ReactNode, useRef, useState} from "react";
import {IconChevronDown} from "../../icons";
import {ClickOutside} from "../../utils";
import {IconRotator} from "../icon-rotator";
import {Popover} from "../popover";
import {SFieldErrorsDropdown} from "./styles/SFieldErrorsDropdown";
import {SFieldErrorsDropdownBadge} from "./styles/SFieldErrorsDropdownBadge";
import {SFieldErrorsDropdownError} from "./styles/SFieldErrorsDropdownError";
import {SFieldErrorsDropdownErrorsWrapper} from "./styles/SFieldErrorsDropdownErrorsWrapper";
import {SFieldErrorsDropdownPopover} from "./styles/SFieldErrorsDropdownPopover";
import {IErrorsDropdown} from "./types";


export const ErrorsDropdown: FC<IErrorsDropdown> = ({
                                                      errors,
                                                      errorsText = "Errors",
                                                      errorText = "Error",
  
                                                    }) => {
  const [errorDropdownOpened, setErrorDropdownOpened] = useState(false);
  const ref = useRef(null);
  
  
  return !!errors?.length ? (
    <ClickOutside onClickOutside={() => {
      setErrorDropdownOpened(false);
    }}>
      <div>
        <SFieldErrorsDropdown ref={ref} onClick={(e) => {
          e.stopPropagation();
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
            <SFieldErrorsDropdownPopover onClick={(e) => {
              e.stopPropagation();
            }}>
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
  ) : null;
};
