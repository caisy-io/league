import { FC, ReactNode, useCallback, useState } from "react";
import { Tooltip } from "../tooltip";
import { IconQuestionCircle, IconChevronDown } from "../../icons";
import { SStringFieldInput } from "./styles/SStringFieldInput";
import { SStringFieldItem } from "./styles/SStringFieldItem";
import { SStringHeader } from "./styles/SStringHeader";
import { IconButton } from "../icon-button";
import { SStringTitle } from "./styles/SStringTitle";
import { SStringDisplayButton } from "./styles/SStringDisplayButton";
import { SStringErrors } from "./styles/SStringErrors";

export interface IStringSingleFieldProps {
  title: string;
  required: boolean;
  tooltip?: ReactNode | (() => ReactNode);
  errors?: string[];
}

export const StringSingleField: FC<IStringSingleFieldProps> = ({ title, required, tooltip, errors, children }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen, setOpen]);

  return (
    <SStringFieldItem error={!!errors}>
      <SStringHeader isOpen={isOpen}>
        <SStringTitle required={required}>
          <h3>{title}</h3>

          {tooltip && (
            <div data-tooltip-icon>
              <Tooltip content={tooltip} placement="right" color="black">
                <IconQuestionCircle size={16} />
              </Tooltip>
            </div>
          )}
        </SStringTitle>

        <SStringDisplayButton data-display-button isOpen={isOpen}>
          <IconButton type="secondary" onClick={toggleOpen}>
            <IconChevronDown />
          </IconButton>
        </SStringDisplayButton>
      </SStringHeader>
      <SStringFieldInput isOpen={isOpen}>{children}</SStringFieldInput>

      {errors && (
        <SStringErrors>
          {errors.map((error: string) => (
            <p key={`error-${error}`}>{error}</p>
          ))}
        </SStringErrors>
      )}
    </SStringFieldItem>
  );
};
