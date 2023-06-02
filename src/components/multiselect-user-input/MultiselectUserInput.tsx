import React, { ChangeEventHandler, FC, ReactNode, useEffect, useRef, useState } from "react";
import { SMultiselectUserInput } from "./styles/SMultiselectUserInput";
import { SMultiselectUserInputDropdown } from "./styles/SMultiselectUserInputDropdown";
import { SimpleInput } from "../input-fields";
import { Popover } from "../popover";
import { ClickOutside } from "../../utils";
import { SMultiselectUserInputWrapper } from "./styles/SMultiselectUserInputWrapper";
import { SMultiselectUserInputSelectedUsersWrapper } from "./styles/SMultiselectUserInputSelectedUsersWrapper";

export interface IMultiselectUserInput {
  label: string;
  placeholder: string;
  isRequired?: boolean;
  children: ReactNode;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  selectedUsers: ReactNode;
}

export const MultiselectUserInput: FC<IMultiselectUserInput> = ({
  label,
  placeholder,
  isRequired = true,
  children,
  onChangeHandler,
  selectedUsers,
}) => {
  const inputWrapperRef = useRef(null);
  const selectedUsersRef = useRef<HTMLDivElement>(null);

  const [showDropdown, setShowDropdown] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const [selectedUsersDimensions, setSelectedUsersDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (selectedUsersRef.current) {
      const selectedUsersWidth = selectedUsersRef.current.getBoundingClientRect().width;
      const selectedUsersHeight = selectedUsersRef.current.getBoundingClientRect().height;
      setSelectedUsersDimensions({ width: selectedUsersWidth, height: selectedUsersHeight });
    }
  }, [selectedUsers]);

  return (
    <SMultiselectUserInput>
      <ClickOutside onClickOutside={() => setShowDropdown(false)}>
        <div>
          <SMultiselectUserInputWrapper
            ref={inputWrapperRef}
            onClick={() => setShowDropdown(true)}
            inputPadding={selectedUsersDimensions.width}
          >
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
            <SMultiselectUserInputSelectedUsersWrapper ref={selectedUsersRef}>
              {selectedUsers}
            </SMultiselectUserInputSelectedUsersWrapper>
          </SMultiselectUserInputWrapper>
          <Popover display={showDropdown} placement="bottomRight" reference={inputWrapperRef} disableTriangle>
            <SMultiselectUserInputDropdown onClick={() => setValue("")}>{children}</SMultiselectUserInputDropdown>
          </Popover>
        </div>
      </ClickOutside>
    </SMultiselectUserInput>
  );
};
