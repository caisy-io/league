import React, { FC, useRef, useState } from "react";
import { SFloatingSearchInput } from "./styles/SFloatingSearchInput";
import { SFloatingSearchInputWrapper } from "./styles/SFLoatingSearchInputWrapper";

interface IFloatingSearchInput {
  placeholder?: string;
  onClose?: () => void;
  onChange?: (e) => void;
  withFilter?: boolean;
  onClickFilter?: () => void;
}

export const FloatingSearchInput: FC<IFloatingSearchInput> = ({ placeholder, onChange }) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setActive(true);
  };

  return (
    <SFloatingSearchInputWrapper active={active} onClick={handleClick}>
      <SFloatingSearchInput
        ref={inputRef}
        onFocus={handleFocus}
        onChange={onChange}
        placeholder={placeholder}
      />
    </SFloatingSearchInputWrapper>
  );
};
