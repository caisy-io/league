import React, { FC } from 'react';
import { SBottomButtonWrapper } from './styles/SBottomButtonWrapper';

interface IBottomButtonWrapperProps {
  children?
}

export const BottomButtonWrapper: FC<IBottomButtonWrapperProps> = ({ children }) => {
  return (
    <SBottomButtonWrapper>
      {children}
    </SBottomButtonWrapper>
  )
}
