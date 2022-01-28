import React, {  forwardRef, MouseEventHandler,  useState } from "react";
import { SFloatingSearchEditableText } from "./styles/SFloatingSearchEditableText";
import { SFloatingSearchEditableTextWrapper } from "./styles/SFloatingSearchEditableTextWrapper";

interface IFloatingSearchInput {
  placeholder?: string;
  value?: string;
  onChange?: (e) => void;
  onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
}

export const FloatingSearchEditableText = forwardRef<HTMLInputElement, IFloatingSearchInput>(({ value, onClick, onChange }, inputRef) => {
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

  const onBlur = (e) => {
    if(onChange){
      onChange(e.currentTarget.textContent);
    }
  };

  return (
    <SFloatingSearchEditableTextWrapper active={active} onClick={handleClick}>
      <SFloatingSearchEditableText
        ref={inputRef}
        role="textbox" 
        contenteditable
        suppressContentEditableWarning={true}
        contentEditable
        onFocus={handleFocus}
        onBlur={onBlur}
      >
        {value}
      </SFloatingSearchEditableText>
    </SFloatingSearchEditableTextWrapper>
  );
});
