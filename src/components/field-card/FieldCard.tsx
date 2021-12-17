import React from 'react';
import { SFieldCard } from './styles/SFieldCard';
import { SFieldCardInnerRectangle } from './styles/SFieldCardInnerRectangle';

interface IFieldCard {
  cardText?: string,
}

export const FieldCard: React.FC<IFieldCard> = ({ cardText }) => {

  return (
    <SFieldCard>
      <SFieldCardInnerRectangle></SFieldCardInnerRectangle>
      {cardText}
    </SFieldCard>
  )
}
