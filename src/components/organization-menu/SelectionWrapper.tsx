import React, { FC } from 'react';
import { SSelectionWrapper } from './styles/SSelectionWrapper';

interface ISelectionWrapperProps {
  children?
}

export const SelectionWrapper: FC<ISelectionWrapperProps> = ({ children }) => {
  return (
    <SSelectionWrapper>
      {children}
    </SSelectionWrapper>
  )
}
