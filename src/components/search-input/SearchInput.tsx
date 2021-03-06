import React, { useState, useRef, FC, useEffect, CSSProperties } from "react";
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
  onKeyPress?: (e, onClose) => void;
  withFilter?: boolean;
  onClickFilter?: () => void;
  autoFocus?: boolean;
  styleOverwrite?: CSSProperties;
}

export const SearchInput: FC<ISearchInput> = ({
  placeholder,
  onClose,
  onChange,
  onKeyPress,
  withFilter,
  onClickFilter,
  autoFocus,
  styleOverwrite,
}) => {
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

  const handleClickFilter = () => {
    onClickFilter?.();
  };

  const handleMouseDownFilter = () => {
    setClickingFilter(true);
  };
  const handleMouseUpFilter = () => {
    setClickingFilter(false);
  };

  const handleKeyPress = (e) => {
    onKeyPress?.(e, handleClose);
  };

  return (
    <SSearchInputWrapper active={active} onClick={handleClick} styleOverwrite={styleOverwrite}>
      <SearchIcon />
      <SSearchInput
        ref={inputRef}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        autoFocus={autoFocus}
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
        {inputRef.current?.value && inputRef.current?.value.length > 0 && (
          <SSearchIconWrapper onClick={handleClose}>
            <SearchCloseIcon />
          </SSearchIconWrapper>
        )}
      </SSearchIconContainer>
    </SSearchInputWrapper>
  );
};
