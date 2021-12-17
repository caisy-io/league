import React from 'react';
import {SFieldCard } from './styles/SFieldCard';

interface IFieldCard{

}

export const FieldCard: React.FC<IFieldCard> = ({...props}) => {
  console.log(`FieldCard props: `, props);
  return (
    <SFieldCard>
      {props.children}
    </SFieldCard>
  )
}
