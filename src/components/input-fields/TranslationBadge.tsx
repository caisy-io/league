import { FC } from "react";
import { Flag } from "../flag/Flag";
import { STranslationBadge } from "./styles/STranslationBadge";

export const TranslationBadge: FC<{ countryCode: string }> = ({ countryCode }) => (
  <STranslationBadge>
    <Flag countryCode={countryCode?.toLocaleLowerCase()} size={16} />
    {countryCode?.toUpperCase()}
  </STranslationBadge>
);
