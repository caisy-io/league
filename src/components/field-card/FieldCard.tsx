import React from 'react';
import { SFieldCard } from './styles/SFieldCard';
import { SFieldCardInnerRectangle } from './styles/SFieldCardInnerRectangle';
import { SFieldCardText } from './styles/SFieldCardText';

interface IFieldCard {
  cardText?: string,
  activated?: boolean,
  onClick?: () => void,
}

export const FieldCard: React.FC<IFieldCard> = ({ cardText, activated, onClick }) => {
  return (
    <SFieldCard activated={activated} onClick={onClick}>
      <SFieldCardInnerRectangle />
      <SFieldCardText>  {cardText}</SFieldCardText>
    </SFieldCard>
  )
}
