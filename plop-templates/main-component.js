import React from 'react';
import {S{{ properCase name }} } from './styles/S{{ properCase name }}';

interface I{{ properCase name }}{
  children?
}

export const {{ properCase name }}: React.FC<I{{ properCase name }}> = ({children}) => {
  return (
    <S{{properCase name}}>
      {children}
    </S{{properCase name}}>
  )
}
