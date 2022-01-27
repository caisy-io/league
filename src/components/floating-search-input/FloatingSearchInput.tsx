import React, { FC, forwardRef, MouseEventHandler, useRef, useState } from "react";
import { SFloatingSearchInput } from "./styles/SFloatingSearchInput";
import { SFloatingSearchInputWrapper } from "./styles/SFLoatingSearchInputWrapper";

interface IFloatingSearchInput {
  placeholder?: string;
  value?: string;
  onChange?: (e) => void;
  onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
}

export const FloatingSearchInput = forwardRef<HTMLInputElement, IFloatingSearchInput>(({ value, onClick, placeholder, onChange }, inputRef) => {
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    if(inputRef && (inputRef as any ).current){
      (inputRef as any ).current.focus();
    }
    if(onClick){
      onClick(e)
    }
  };

  const handleFocus = () => {
    setActive(true);
  };

  return (
    <SFloatingSearchInputWrapper active={active} onClick={handleClick}>
      <SFloatingSearchInput
        ref={inputRef}
        type="text"
        value={value}
        onFocus={handleFocus}
        onChange={onChange}
        placeholder={placeholder}
      />
    </SFloatingSearchInputWrapper>
  );
});
