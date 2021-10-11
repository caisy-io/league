import { SFilterInput } from "./styles/SSearchWithFilter";
import React, { useState, useEffect, useRef } from "react";

const FilterButton = ({ isButtonActive, filterInputRef, inputData, onBtnClick, onInputChange, label }) => {
  const [value, setValue] = useState(inputData);
  const hiddenSpanRef: any = useRef();
  // this method set dynamic width for input if it activated
  useEffect(() => {
    function resizeInput() {
      filterInputRef.current.focus();
      const ele: any = hiddenSpanRef?.current;
      filterInputRef.current.style.width = (ele?.offsetWidth || 54) + "px";
    }
    if (isButtonActive) {
      resizeInput();
    }
  });

  useEffect(() => {
    setValue(inputData);
  }, [inputData]);

  return (
    <>
      <span ref={hiddenSpanRef} style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}>
        {label}
      </span>
      {isButtonActive ? (
        <>
          <SFilterInput
            autoFocus
            ref={filterInputRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              onInputChange(e);
            }}
          />
        </>
      ) : (
        <span onClick={onBtnClick}>{label}</span>
      )}
    </>
  );
};

export default FilterButton;
