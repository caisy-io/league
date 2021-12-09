import React, { FC } from 'react';
import { SBadgeLabel } from './SBadgeLabel';

export interface IBadgeLabel {
  value: string;
}

const BadgeLabel: FC<IBadgeLabel> = ({ value }) => {
  return (
    <SBadgeLabel>{value}</SBadgeLabel>
  );
};

export default BadgeLabel;