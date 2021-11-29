import React, { useState, useRef, FC } from "react";
import SearchCloseIcon from "./SearchCloseIcon";
import SearchFilterIcon from "./SearchFilterIcon";
import SearchIcon from "./SearchIcon";
import { SSearchIconContainer } from "./styles/SSearchIconContainer";
import { SSearchIconWrapper } from "./styles/SSearchIconWrapper";
import { SSearchInput } from "./styles/SSearchInput";
import { SSearchInputWrapper } from "./styles/SSearchInputWrapper";

interface ISearchInput {
  placeholder?: string;
  onClose?: () => void;
  onChange?: (e) => void;
  withFilter?: boolean;
  onClickFilter?: () => void;
}

export const SearchInput: FC<ISearchInput> = ({ placeholder, onClose, onChange, withFilter, onClickFilter }) => {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };

  const handleClose = () => {
    setActive(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onClose?.();
  };

  const handleClickFilter = () => {
    onClickFilter?.();
  };

  return (
    <SSearchInputWrapper active={active} onClick={handleClick}>
      <SearchIcon />
      <SSearchInput
        ref={inputRef}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={onChange}
        placeholder={placeholder}
      />
      <SSearchIconContainer>
        <SSearchIconWrapper onClick={handleClickFilter}>{withFilter && <SearchFilterIcon />}</SSearchIconWrapper>
        <SSearchIconWrapper onClick={handleClose}>
          {((inputRef.current?.value && inputRef.current?.value.length > 0) || active) && <SearchCloseIcon />}
        </SSearchIconWrapper>
      </SSearchIconContainer>
    </SSearchInputWrapper>
  );
};
