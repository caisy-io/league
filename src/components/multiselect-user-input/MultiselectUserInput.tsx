import React, { ChangeEventHandler, FC, ReactNode, useRef, useState } from "react";
import { SMultiselectUserInput } from "./styles/SMultiselectUserInput";
import { SMultiselectUserInputDropdown } from "./styles/SMultiselectUserInputDropdown";
import { Popover } from "../popover";
import { ClickOutside } from "../../utils";
import { SMultiselectUserInputSelectedUsersWrapper } from "./styles/SMultiselectUserInputSelectedUsersWrapper";
import { SMultiselectUserInputInput } from "./styles/SMultiselectUserInputInput";
import { SMultiselectUserInputLabel } from "./styles/SMultiselectUserInputLabel";
import { SMultiselectUserInputLabelText } from "./styles/SMultiselectUserInputLabelText";

export interface IMultiselectUserInput {
  label: string | null;
  placeholder: string | null;
  isRequired: boolean;
  children: ReactNode | null;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  selectedUsers: ReactNode | null;
}

export const MultiselectUserInput: FC<IMultiselectUserInput> = ({
  label,
  placeholder,
  isRequired,
  children,
  onChangeHandler,
  selectedUsers,
}) => {
  const inputRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <SMultiselectUserInput>
      <ClickOutside onClickOutside={() => setShowDropdown(false)}>
        <div>
          <SMultiselectUserInputLabel onClick={() => setShowDropdown(true)}>
            {label && <SMultiselectUserInputLabelText isRequired={isRequired}>{label}</SMultiselectUserInputLabelText>}
            <SMultiselectUserInputSelectedUsersWrapper>
              {selectedUsers}
              <SMultiselectUserInputInput
                ref={inputRef}
                value={value}
                placeholder={placeholder}
                onChange={(e) => {
                  setValue(e.target.value);
                  onChangeHandler(e);
                }}
              />
            </SMultiselectUserInputSelectedUsersWrapper>
          </SMultiselectUserInputLabel>
          <Popover display={showDropdown} placement="bottomRight" reference={inputRef} disableTriangle>
            <SMultiselectUserInputDropdown
              onClick={() => {
                setValue("");
                setShowDropdown(false);
              }}
            >
              {children}
            </SMultiselectUserInputDropdown>
          </Popover>
        </div>
      </ClickOutside>
    </SMultiselectUserInput>
  );
};
