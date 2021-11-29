import React from "react";
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
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    props.onClose?.();
  };

  const handleClickFilter = () => {
    props.onClickFilter?.();
  };

  return (
    <SSearchInputWrapper active={active} onClick={handleClick}>
      <SearchIcon />
      <SSearchInput ref={inputRef} onBlur={handleBlur} onFocus={handleFocus} {...props} />
      <SSearchIconContainer>
        <SSearchIconWrapper onClick={handleClickFilter}>{props.withFilter && <SearchFilterIcon />}</SSearchIconWrapper>
        <SSearchIconWrapper onClick={handleClose}>
          {((inputRef.current?.value && inputRef.current?.value.length > 0) || active) && <SearchCloseIcon />}
        </SSearchIconWrapper>
      </SSearchIconContainer>
    </SSearchInputWrapper>
  );
};
