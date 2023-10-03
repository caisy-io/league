import {FC, useCallback, useState} from "react";
import {Tooltip} from "../tooltip";
import {IconQuestionCircle, IconChevronDown} from "../../icons";
import {ErrorsDropdown} from "./ErrorsDropdown";
import {SFieldInputOutsideWrapper} from "./styles/SFieldInputOutsideWrapper";
import {SFieldInputWrapper} from "./styles/SFieldInputWrapper";
import {SFieldItem} from "./styles/SFieldItem";
import {SFieldHeader} from "./styles/SFieldHeader";
import {IconButton} from "../icon-button";
import {SFieldTitle} from "./styles/SFieldTitle";
import {SFieldDisplayButton} from "./styles/SFieldDisplayButton";
import {SFieldDescription} from "./styles/SFieldDescription";
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
      <SFieldItem onClick={onClick} id={id} error={!!errors} outsideWrapper={outsideWrapper}>
        <SFieldHeader isOpen={isOpen} onClick={toggleOpen} error={!!errors} outsideWrapper={outsideWrapper}>
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
          <ErrorsDropdown errorsText={errorsText} errorText={errorText} errors={errors}/>
          {usersListComponent}
          <SFieldDisplayButton data-display-button isOpen={isOpen}>
            <IconButton size='small' type="secondary" onClick={toggleOpen} activated={isOpen}>
              <IconChevronDown size={20}/>
            </IconButton>
          </SFieldDisplayButton>
        </SFieldHeader>
        
        {outsideWrapper ? (
          <SFieldInputOutsideWrapper isOpen={isOpen}>
            {children}
          </SFieldInputOutsideWrapper>
        ) : (
          <SFieldInputWrapper wrapperBgColor={wrapperBgColor} isOpen={isOpen}>{children}</SFieldInputWrapper>
        )}
      </SFieldItem>
    </ClickOutside>
  );
};
