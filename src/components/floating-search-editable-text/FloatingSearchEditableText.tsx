import React, { forwardRef, MouseEventHandler, useEffect, useRef, useState } from "react";
import { SFloatingSearchEditableText } from "./styles/SFloatingSearchEditableText";
import { SFloatingSearchEditableTextSpan } from "./styles/SFloatingSearchEditableTextSpan";
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
      spanRef.current.innerHTML;
      spanRef.current.innerHTML = e.target.value.replace(/\s/g, "&nbsp;");
      (inputRef as any).current.style.width = `${spanRef.current.offsetWidth}px`;
      onChange?.(e);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        onPressEnter?.(value);
      }
    };

    return (
      <SFloatingSearchEditableTextWrapper active={active} onClick={handleClick}>
        <SFloatingSearchEditableText
          ref={inputRef}
          onFocus={handleFocus}
          onChange={handleChange}
          value={value}
          onKeyDown={handleKeyDown}
        />
        <SFloatingSearchEditableTextSpan ref={spanRef} />
      </SFloatingSearchEditableTextWrapper>
    );
  },
);
