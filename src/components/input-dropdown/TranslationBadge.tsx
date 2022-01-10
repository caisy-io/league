import React from 'react';
import { Flag } from '../flag';
import { STranslationBadge } from './styles/STranslationBadge';

export interface ITranslationBadgeProps {
  countryCode: any;
}

export const TranslationBadge: React.FC<ITranslationBadgeProps> = ({countryCode }) => {
  return (
    <STranslationBadge>
      <Flag countryCode={countryCode} size={16} />
      DE
    </STranslationBadge>
  )
};
