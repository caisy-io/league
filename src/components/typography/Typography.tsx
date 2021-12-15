import React from 'react';
import { STypography } from './styles/STypography';

export type IFontWeightType = "400" | "500" | "600" | "700";
export type IFontSizeType = "12" | "16" | "18" | "20" | "24";

interface ITypography {
  fontWeight?: IFontWeightType,
  fontSize?: IFontSizeType,
}

export const Typography: React.FC<ITypography> = ({ fontWeight, fontSize }) => {
  return (
    <STypography fontWeight={fontWeight} fontSize={fontSize}>
    </STypography>
  )
}
