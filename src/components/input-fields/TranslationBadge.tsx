import { FC } from "react";
import { STranslationBadge } from "./styles/STranslationBadge";

export const TranslationBadge: FC<{ countryCode: string }> = ({ countryCode }) => (
  <STranslationBadge>
    {countryCode?.toUpperCase()}
  </STranslationBadge>
);
