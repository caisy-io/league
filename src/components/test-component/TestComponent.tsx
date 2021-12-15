import React from 'react';
import {STestComponent } from './styles/STestComponent';

interface ITestComponent{
  children?
}

export const TestComponent: React.FC<ITestComponent> = ({children}) => {
  return (
    <STestComponent>
      {children}
    </STestComponent>
  )
}
