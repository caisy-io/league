import React from 'react';
import {SSetImageCard } from './styles/SSetImageCard';

interface ISetImageCard{
  onChange: (url: string) => void,
  processImage: (file: File) => Promise<string>
  initalValue?: string,
}

export const SetImageCard: React.FC<ISetImageCard> = ({children}) => {
  return (
    <SSetImageCard>
      {children}
    </SSetImageCard>
  )
}
