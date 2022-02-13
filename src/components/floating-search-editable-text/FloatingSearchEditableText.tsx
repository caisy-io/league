import React, { forwardRef, MouseEventHandler, useEffect, useState } from "react";
import { SFloatingSearchEditableText } from "./styles/SFloatingSearchEditableText";
import { SFloatingSearchEditableTextWrapper } from "./styles/SFloatingSearchEditableTextWrapper";

interface IFloatingSearchEditableText {
  placeholder?: string;
  value?: string;
  onChange?: (e) => void;
  onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
}

export const FloatingSearchEditableText = forwardRef<HTMLInputElement, IFloatingSearchEditableText>(
  ({ value, onClick, onChange }, inputRef) => {
    const [active, setActive] = useState(false);

    // const [value, setValue] = useState(undefined);

    const handleClick = (e) => {
      if (inputRef && (inputRef as any).current) {
        (inputRef as any).current.focus();
      }
      if (onClick) {
        onClick(e);
      }
    };

    useEffect(() => {
      const el = (inputRef as any)?.current;
      if (el) {
        const updateValue = (e) => {
          if (e.inputType === "insertText" && e.data == null) {
            // console.log(`ignore`, e);
            e.preventDefault();
            e.stopPropagation();
            if(onChange){
              onChange(`${e.target.innerText || ""}`.replace(/\n/g, ''));
            }
            (inputRef as any).current.blur();
          } else {
            // console.log(`truty`, e);
          }
        };
        el.addEventListener("input", updateValue);
      }
    }, [inputRef && (inputRef as any)?.current]);

    const handleFocus = () => {
      setActive(true);
    };

    const onBlur = (e) => {
      if (onChange) {
        console.log(` onChange`, );
        onChange(e.currentTarget.textContent.replace(/\n/g, ''));
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
          wrap={"off"}
        >
          {value}
        </SFloatingSearchEditableText>
      </SFloatingSearchEditableTextWrapper>
    );
  },
);
