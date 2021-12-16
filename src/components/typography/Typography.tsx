import React from 'react';
import { STypography } from './styles/STypography';

export type IFontFamilyType = "Inter" | "IBM Plex Mono";
export type IFontWeightType = "400" | "500" | "600" | "700";
export type IFontSizeType = "12" | "16" | "18" | "20" | "24";

interface ITypography {
  fontFamily?: IFontFamilyType,
  fontWeight?: IFontWeightType,
  fontSize?: IFontSizeType,
  lineHeight?: IFontSizeType,
  spacing?: number,
  text: string,
}

export const Typography: React.FC<ITypography> = ({ fontFamily, fontWeight, fontSize, text, spacing, lineHeight }) => {
  return (
    <STypography fontFamily={fontFamily} fontWeight={fontWeight} fontSize={fontSize} spacing={spacing} lineHeight={lineHeight}>
      {text}
    </STypography>
  )
}
