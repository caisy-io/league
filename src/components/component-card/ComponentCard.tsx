import React from 'react';
import { Card } from '../card';
import { SComponentCard } from './styles/SComponentCard';

interface IComponentCard {

}

export const ComponentCard: React.FC<IComponentCard> = ({ ...props }) => {
  
  return (
    <SComponentCard>
      <Card>
<IconTag
      </Card>
      {props.children}
    </SComponentCard>
  )
}
