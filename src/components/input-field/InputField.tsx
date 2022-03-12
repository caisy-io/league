import { FC, ReactNode, useCallback, useState } from "react";
import { Tooltip } from "../tooltip";
import { IconQuestionCircle, IconChevronDown } from "../../icons";
import { SFieldInputWrapper } from "./styles/SFieldInputWrapper";
import { SFieldItem } from "./styles/SFieldItem";
import { SFieldHeader } from "./styles/SFieldHeader";
import { IconButton } from "../icon-button";
import { SFieldTitle } from "./styles/SFieldTitle";
import { SFieldDisplayButton } from "./styles/SFieldDisplayButton";
import { SFieldDescription } from "./styles/SFieldDescription";
import { SFieldErrors } from "./styles/SFieldErrors";
import { IInputFieldProps } from "./types";

export const InputField: FC<IInputFieldProps> = ({ title, description, required, tooltip, errors, children }) => {
  const [isOpen, setOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen, setOpen]);

  return (
    <SFieldItem error={!!errors}>
      <SFieldHeader isOpen={isOpen}>
        <div>
          <SFieldTitle required={required}>
            <h3>{title}</h3>
            {tooltip && (
              <div data-tooltip-icon>
                <Tooltip content={tooltip} placement="right" color="black">
                  <IconQuestionCircle size={16} />
                </Tooltip>
              </div>
            )}
          </SFieldTitle>
          {description && <SFieldDescription>{description}</SFieldDescription>}
        </div>
        <SFieldDisplayButton data-display-button isOpen={isOpen}>
          <IconButton type="secondary" onClick={toggleOpen}>
            <IconChevronDown />
          </IconButton>
        </SFieldDisplayButton>
      </SFieldHeader>
      {isOpen && <SFieldInputWrapper>{children}</SFieldInputWrapper>}

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
