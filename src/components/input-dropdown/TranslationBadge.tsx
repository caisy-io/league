import React from "react";
import { STranslationBadge } from "./styles/STranslationBadge";

export const TranslationBadge: React.FC<{ countryCode: string }> = ({ countryCode }) => {
  return <STranslationBadge>{countryCode}</STranslationBadge>;
};
