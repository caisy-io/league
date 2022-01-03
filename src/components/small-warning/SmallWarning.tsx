import React from 'react';
import { IconWarningHex } from '../../icons';
import { SSmallWarning } from './styles/SSmallWarning';
import { SSmallWarningText } from './styles/SSmallWarningText';

interface ISmallWarningProps {
  styleOverwrite?: string,
  children?
}

export const SmallWarning: React.FC<ISmallWarningProps> = ({ styleOverwrite, children }) => {
  return (
    <SSmallWarning styleOverwrite={styleOverwrite}>
      <IconWarningHex size={16}></IconWarningHex>
      <SSmallWarningText> {children} </SSmallWarningText>
    </SSmallWarning>
  )
}
