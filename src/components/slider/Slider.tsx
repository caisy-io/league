import React from 'react';
import {SSlider} from './styles/SSlider';
import {SSliderCont} from "./styles/SSliderCont";
import {SSliderInput} from "./styles/SSliderInput";

export interface ISlider {
  initialValue?: number;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  getSliderValue?: (value) => void;
  onValueChange?: () => void;
}

export const Slider: React.FC<ISlider & React.InputHTMLAttributes<HTMLInputElement>> = ({
                                                                                          initialValue = 0,
                                                                                          min = 0,
                                                                                          max = 10,
                                                                                          getSliderValue,
                                                                                          leftIcon,
                                                                                          rightIcon,
                                                                                          onValueChange,
                                                                                          ...props
                                                                                        }) => {
  const [value, setValue] = React.useState(initialValue);
  
  return (
    <SSliderCont>
      {leftIcon && leftIcon}
      <SSlider value={value} min={min} max={max}>
        <SSliderInput type='range' onChange={(e) => {
          setValue(+e.target.value);
          getSliderValue?.(+e.target.value);
          onValueChange?.();
        }} min={min} max={max} {...props} value={value}/>
      </SSlider>
      {rightIcon && rightIcon}
    </SSliderCont>
  )
}
