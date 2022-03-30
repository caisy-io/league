import {FC, ReactNode, useCallback, useState} from "react";
import {Tooltip} from "../tooltip";
import {IconQuestionCircle, IconChevronDown} from "../../icons";
import {SFieldInputWrapper} from "./styles/SFieldInputWrapper";
import {SFieldItem} from "./styles/SFieldItem";
import {SFieldHeader} from "./styles/SFieldHeader";
import {IconButton} from "../icon-button";
import {SFieldTitle} from "./styles/SFieldTitle";
import {SFieldDisplayButton} from "./styles/SFieldDisplayButton";
import {SFieldDescription} from "./styles/SFieldDescription";
import {SFieldErrors} from "./styles/SFieldErrors";
import {IInputFieldProps} from "./types";

export const InputField: FC<IInputFieldProps> = ({
                                                   title,
                                                   description,
                                                   icon,
                                                   required,
                                                   tooltip,
                                                   errors,
                                                   children,
                                                   onExpand,
                                                   onCollapse,
  id
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
    <SFieldItem id={id} error={!!errors}>
      <SFieldHeader tabIndex={'-1'} isOpen={isOpen}>
        {icon}
        <div style={{flex: '1 1 auto'}}>
          <SFieldTitle required={required}>
            <h3>{title}</h3>
            {tooltip && (
              <div data-tooltip-icon>
                <Tooltip content={tooltip} placement="right" color="black">
                  <IconQuestionCircle size={16}/>
                </Tooltip>
              </div>
            )}
          </SFieldTitle>
          {description && <SFieldDescription>{description}</SFieldDescription>}
        </div>
        <SFieldDisplayButton data-display-button isOpen={isOpen}>
          <IconButton type="secondary" onClick={toggleOpen}>
            <IconChevronDown/>
          </IconButton>
        </SFieldDisplayButton>
      </SFieldHeader>
      <SFieldInputWrapper isOpen={isOpen}>{children}</SFieldInputWrapper>
      
      {errors && (
        <SFieldErrors>
          {errors.map((error: ReactNode) => (
            <div key={`error-${error}`}>{error}</div>
          ))}
        </SFieldErrors>
      )}
    </SFieldItem>
  );
};
