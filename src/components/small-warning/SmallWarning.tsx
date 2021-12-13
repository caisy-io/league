import React from 'react';
import { IconWarningHex } from '../..';
import { SSmallWarning } from './styles/SSmallWarning';
import { SSmallWarningText } from './styles/SSmallWarningText';

interface ISmallWarning {
  children?
}

export const SmallWarning: React.FC<ISmallWarning> = ({ children }) => {
  return (
    <SSmallWarning>
      <IconWarningHex></IconWarningHex>
      <SSmallWarningText> {children}</SSmallWarningText>
    </SSmallWarning>
  )
}
