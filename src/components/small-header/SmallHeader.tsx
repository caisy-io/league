import React, { ReactNode } from 'react';
import { SSmallHeader } from './styles/SSmallHeader';
import { SSmallHeaderText } from './styles/SSmallHeaderText';

interface ISmallHeaderProps {
  leftIcon?: ReactNode,
  headerText?: string,
  rightIcon?: ReactNode,
  styleOverwrite?: string
}

export const SmallHeader: React.FC<ISmallHeaderProps> = ({ leftIcon, rightIcon, headerText, styleOverwrite }) => {
  return (
    <SSmallHeader styleOverwrite={styleOverwrite}>
      {leftIcon}
      <SSmallHeaderText leftIcon={leftIcon} rightIcon={rightIcon}>  {headerText}</SSmallHeaderText>
      {rightIcon}
    </SSmallHeader>
  )
}
