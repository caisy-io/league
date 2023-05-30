import React from "react";
import { SSlider } from "./styles/SSlider";
import { SSliderCont } from "./styles/SSliderCont";
import { SSliderInput } from "./styles/SSliderInput";

export interface ISlider {
  initialValue?: number;
  min?: number;
  max?: number;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  onValueChange?: (value:number) => void;
}

const checkValue = (value, min, max) => {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
};

export const Slider: React.FC<ISlider & React.InputHTMLAttributes<HTMLInputElement>> = ({
  initialValue,
  min = 0,
  max = 10,
  leftIcon,
  rightIcon,
  onValueChange,
  ...props
}) => {
  const [value, setValue] = React.useState<number>();

  const handleValue = (value) => {
    const newValue = Math.floor((value / 100) * (max - min) + min);
    return newValue < min ? min : newValue;
  };

  React.useEffect(() => {
    if (initialValue) {
      setValue(Math.ceil(((checkValue(initialValue, min, max) - min) / (max - min)) * 100));
    }
  }, [initialValue]);

  return (
    <SSliderCont>
      {leftIcon && leftIcon}
      <SSlider value={value}>
        <SSliderInput
          type="range"
          onChange={(e) => {
            setValue(+e.target.value);
            onValueChange?.(handleValue(+e.target.value));
          }}
          min={0}
          max={100}
          {...props}
          value={value || 0}
        />
      </SSlider>
      {rightIcon && rightIcon}
    </SSliderCont>
  );
};
