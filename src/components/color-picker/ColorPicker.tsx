import React, { useEffect, useState } from "react";
import { RgbaColor } from "react-colorful";
import { rgbHex } from "../../utils/color";
import { SColorPicker } from "./styles/SColorPicker";
import { SColorPickerInput } from "./styles/SColorPickerInput";
import { SColorPickerInputlabel } from "./styles/SColorPickerInputlabel";
import { SColorPickerInputWrapper } from "./styles/SColorPickerInputWrapper";
import { SColorPickerWrapper } from "./styles/SColorPickerWrapper";

export interface IColorPicker {
  initColor?: RgbaColor;
  onChange?: (color: string) => void;
}

function hexToRgbA(hex): RgbaColor | undefined {
  var c;

  if (/^#([A-Fa-f0-9]{2}){4}$/.test(hex)) {
    c = hex.substring(1).split("");
  } else if (/^([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.split("");
  } else if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
  } else {
    return undefined;
  }

  let alpha = 1;

  if (c.length == 8) {
    alpha = (parseInt(""+c[6]+c[7], 16) / 255)
    c = [c[0], c[1], c[2], c[3], c[4], c[5]];
  }

  if (c.length == 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }

  c = "0x" + c.join("");
  return { r: (c >> 16) & 255, g: (c >> 8) & 255, b: c & 255, a: alpha };
}

const getHexFromColor = (color: RgbaColor) => {
  const { r, g, b, a = 1 } = color;
  const hexColor = a === 1 ? `#${rgbHex(r, g, b)}` : `#${rgbHex(r, g, b, a)}`;
  return hexColor;
};

export const ColorPicker: React.FC<IColorPicker> = ({ initColor, onChange }) => {
  const [color, setColor] = useState<RgbaColor>(initColor || { r: 200, g: 150, b: 35, a: 0.5 });
  const [inputValue, setInputValue] = useState<string>(getHexFromColor(color));

  const onColorChange = (color) => {
    setColor(color);
    onChange?.(getHexFromColor(color));
  };

  const onInputChange = (e) => {
    if (e?.target?.value) {
      setInputValue(e.target.value);
    }
  };

  useEffect(() => {
    const maybeColor = hexToRgbA(inputValue);
    if (maybeColor) {
      setColor(maybeColor);
      onChange?.(getHexFromColor(maybeColor));
    }
  }, [inputValue])

  return (
    <SColorPickerWrapper>
      <SColorPicker color={color} onChange={onColorChange} />
      <SColorPickerInputWrapper>
        <SColorPickerInputlabel>HEX</SColorPickerInputlabel>
        <SColorPickerInput value={inputValue} onChange={onInputChange} />
      </SColorPickerInputWrapper>
    </SColorPickerWrapper>
  );
};
