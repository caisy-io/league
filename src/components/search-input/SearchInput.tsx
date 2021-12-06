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
  const [clickingFilter, setClickingFilter] = useState(false);
  const inputRef = useRef<HTMLInputElement>();

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    if (!clickingFilter) setActive(false);
  };

  const handleClose = () => {
    setActive(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onClose?.();
  };

  const handleClickFilter = (e) => {
    onClickFilter?.();
  };

  const handleMouseDownFilter = () => {
    setClickingFilter(true);
  };
  const handleMouseUpFilter = () => {
    setClickingFilter(false);
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
        {withFilter && (
          <SSearchIconWrapper
            onMouseDown={handleMouseDownFilter}
            onMouseUp={handleMouseUpFilter}
            onClick={handleClickFilter}
          >
            <SearchFilterIcon />
          </SSearchIconWrapper>
        )}
        {((inputRef.current?.value && inputRef.current?.value.length > 0) || active) && (
          <SSearchIconWrapper onClick={handleClose}>
            <SearchCloseIcon />
          </SSearchIconWrapper>
        )}
      </SSearchIconContainer>
    </SSearchInputWrapper>
  );
};
