import React from 'react';
import { SIconRotator } from './styles/SIconRotator';

export interface IIconRotator {
  activated?: boolean,
}

export const IconRotator: React.FC<IIconRotator> = ({ children, activated }) => {
  return (
    <SIconRotator activated={activated}>
      {children}
    </SIconRotator>
  )
}
