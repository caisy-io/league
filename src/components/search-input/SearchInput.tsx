import React from "react";
import SearchCloseIcon from "./SearchCloseIcon";
import SearchFilterIcon from "./SearchFilterIcon";
import SearchIcon from "./SearchIcon";
import { SSearchIconWrapper } from "./styles/SSearchIconWrapper";
import { SSearchInput } from "./styles/SSearchInput";
import { SSearchInputWrapper } from "./styles/SSearchInputWrapper";

interface ISearchInput {
  placeholder?: string;
  onClose?: () => void;
  onChange?: (e) => void;
  withFilter?: boolean;
}

export const SearchInput: React.FC<ISearchInput> = ({ ...props }) => {
  const [active, setActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>();

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
    props.onClose?.();
  };

  return (
    <SSearchInputWrapper active={active} onClick={handleClick}>
      <SearchIcon />
      <SSearchInput ref={inputRef} onBlur={handleBlur} onFocus={handleFocus} {...props} />
      {props.withFilter && (
        <SSearchIconWrapper>
          <SearchFilterIcon />
        </SSearchIconWrapper>
      )}
      {active && (
        <SSearchIconWrapper onClick={handleClose}>
          <SearchCloseIcon />
        </SSearchIconWrapper>
      )}
    </SSearchInputWrapper>
  );
};
