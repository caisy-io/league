import { FC } from "react";
import { STranslationBadge } from "./styles/STranslationBadge";

export const TranslationBadge: FC<{ countryCode: string; hasAiTranslationApp?: boolean }> = ({
  countryCode,
  hasAiTranslationApp,
}) => <STranslationBadge hasAiTranslationApp={hasAiTranslationApp}>{countryCode?.toUpperCase()}</STranslationBadge>;
