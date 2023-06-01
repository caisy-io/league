import React, { useRef, useState } from "react";
import { SMultiselectUserInput } from "./styles/SMultiselectUserInput";
import { SMultiselectUserInputDropdown } from "./styles/SMultiselectUserInputDropdown";
import { SimpleInput } from "../input-fields";
import { Popover } from "../popover";
import { ClickOutside } from "../../utils";

export interface IMultiselectUserInput {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  children: React.ReactNode;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export const MultiselectUserInput: React.FC<IMultiselectUserInput> = ({
  label,
  placeholder,
  isRequired = true,
  children,
  onChangeHandler,
}) => {
  const inputWrapperRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");

  return (
    <SMultiselectUserInput>
      <ClickOutside onClickOutside={() => setShowDropdown(false)}>
        <>
          <div ref={inputWrapperRef} onClick={() => setShowDropdown(true)}>
            <SimpleInput
              label={label}
              value={value}
              placeholder={placeholder}
              required={isRequired}
              onChange={(e) => {
                setValue(e.target.value);
                onChangeHandler(e);
              }}
            />
          </div>
          <Popover display={showDropdown} placement="bottomRight" reference={inputWrapperRef} disableTriangle>
            <SMultiselectUserInputDropdown>{children}</SMultiselectUserInputDropdown>
          </Popover>
        </>
      </ClickOutside>
    </SMultiselectUserInput>
  );
};
