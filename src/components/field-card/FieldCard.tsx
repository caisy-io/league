import React from 'react';
import { SFieldCard } from './styles/SFieldCard';
import { SFieldCardInnerRectangle } from './styles/SFieldCardInnerRectangle';
import { SFieldCardText } from './styles/SFieldCardText';

interface IFieldCard {
  cardText?: string,
}

export const FieldCard: React.FC<IFieldCard> = ({ cardText }) => {
  return (
    <SFieldCard>
      <SFieldCardInnerRectangle />
      <SFieldCardText>  {cardText}</SFieldCardText>
    </SFieldCard>
  )
}
