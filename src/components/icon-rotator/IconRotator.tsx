import React from 'react';
import { SIconRotator } from './styles/SIconRotator';

export interface IIconRotator {
  rotationDegrees?: number,
}

export const IconRotator: React.FC<IIconRotator> = ({ children, rotationDegrees }) => {
  return (
    <SIconRotator rotationDegrees={rotationDegrees}>
      {children}
    </SIconRotator>
  )
}
