import React from 'react';
import {SViewSection } from './styles/SViewSection';

interface IViewSection{
  children?
}

export const ViewSection: React.FC<IViewSection> = ({children}) => {
  return (
    <SViewSection>
      {children}
    </SViewSection>
  )
}
