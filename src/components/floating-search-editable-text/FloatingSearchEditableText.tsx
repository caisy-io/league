import React, { forwardRef, MouseEventHandler, useEffect, useRef, useState } from "react";
import { SFloatingSearchEditableText } from "./styles/SFloatingSearchEditableText";
import { SFloatingSearchEditableTextWrapper } from "./styles/SFloatingSearchEditableTextWrapper";

interface IFloatingSearchEditableText {
  placeholder?: string;
  value: string;
  onChange?: (e) => void;
  onClick?: (e: MouseEventHandler<HTMLDivElement>) => void;
  onPressEnter?: (value: string) => void;
}

export const FloatingSearchEditableText = forwardRef<HTMLInputElement, IFloatingSearchEditableText>(
  ({ value, onClick, onChange, onPressEnter }, inputRef) => {
    if (!inputRef) {
      throw new Error(`for FloatingSearchEditableText ref is required`);
    }

    const [active, setActive] = useState(false);

    const handleClick = (e) => {
      if (inputRef && (inputRef as any).current) {
        (inputRef as any).current.focus();
      }
      if (onClick) {
        onClick(e);
      }
    };

    // useEffect(() => {
    //   const el = (inputRef as any).current;
    //   if (el) {
    //     const updateValue = (e) => {
    //       // this will handle a enter key press inside the editable content container
    //       if (e.inputType === "insertText" && e.data == null) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         if (onChange) {
    //           onChange(`${e.target.innerText || ""}`.replace(/\n/g, ""));
    //         }
    //         (inputRef as any).current.blur();
    //       }
    //     };
    //     el.addEventListener("input", updateValue);
    //     return () => el && el.removeEventListener("input", updateValue);
    //   }
    // }, [inputRef && (inputRef as any).current]);

    const handleFocus = () => {
      setActive(true);
    };

    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      (spanRef.current as HTMLSpanElement).innerHTML = value;
      (inputRef as any).current.style.width = `${(spanRef.current as HTMLSpanElement).offsetWidth}px`;
    }, [typeof window]);

    const handleChange = (e) => {
      if (!spanRef.current || !(inputRef as any).current) return;
      spanRef.current.innerHTML.replace(/\s/g, "&nbsp;");
      spanRef.current.innerHTML = e.target.value;
      (inputRef as any).current.style.width = `${spanRef.current.offsetWidth}px`;
      onChange?.(e);
    };

    // const onBlur = (e) => {
    //   if (onChange) {
    //     console.log(` onBlur`, );
    //     onChange(e.currentTarget.textContent.replace(/\n/g, ''));
    //   }
    // };

    // const handleKeyPress = (e: KeyboardEvent) => {
    //   console.log(` onBlur`, );
    //   // @ts-ignore
    //   if(onChange && e.key == "Enter" && inputRef?.current?.textContent){
    //     // @ts-ignore
    //     onChange(inputRef.current.textContent.replace(/\n/g, ''));
    //   }
    // };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        onPressEnter(value);
      }
    };

    return (
      <SFloatingSearchEditableTextWrapper active={active} onClick={handleClick}>
        <SFloatingSearchEditableText
          ref={inputRef}
          // role="textbox"
          // onKeyPress={handleKeyPress}
          // contenteditable
          // suppressContentEditableWarning={true}
          // contentEditable
          onFocus={handleFocus}
          // onBlur={onBlur}
          // wrap={"off"}
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
        <span hidden ref={spanRef}></span>
      </SFloatingSearchEditableTextWrapper>
    );
  },
);
