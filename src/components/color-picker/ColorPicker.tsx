import React, { useMemo, useState } from "react";
import { RgbaColor } from "react-colorful";
import rgbHex from "rgb-hex";

import { SColorPicker } from "./styles/SColorPicker";
import { SColorPickerInput } from "./styles/SColorPickerInput";
import { SColorPickerInputlabel } from "./styles/SColorPickerInputlabel";
import { SColorPickerInputWrapper } from "./styles/SColorPickerInputWrapper";
import { SColorPickerWrapper } from "./styles/SColorPickerWrapper";

export interface IColorPicker {
  initColor?: RgbaColor;
  onChange?: (color: string) => void;
}

export const ColorPicker: React.FC<IColorPicker> = ({ initColor, onChange }) => {
  const [color, setColor] = useState<RgbaColor>(initColor || { r: 200, g: 150, b: 35, a: 0.5 });

  const { r, g, b, a = 1 } = color;

  const hexColor = useMemo(() => (a === 1 ? `#${rgbHex(r, g, b)}` : `#${rgbHex(r, g, b, a)}`), [r, g, b, a]);

  const onColorChange = (color) => {
    onChange?.(hexColor);
    setColor(color);
  };

  return (
    <SColorPickerWrapper>
      <SColorPicker color={color} onChange={onColorChange} />
      <SColorPickerInputWrapper>
        <SColorPickerInputlabel>HEX</SColorPickerInputlabel>
        <SColorPickerInput disabled value={hexColor} />
      </SColorPickerInputWrapper>
    </SColorPickerWrapper>
  );
};
