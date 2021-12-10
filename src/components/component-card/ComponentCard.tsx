import React from 'react';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { IconTags } from '../../icons';
import { SComponentCard } from './styles/SComponentCard';
import { SComponentCardDescription } from './styles/SComponentCardDescription';
import { SComponentCardTitle } from './styles/SComponentCardTitle';
import { STagText } from './styles/STagText';

interface IComponentCard {
  title?: string | undefined;
  description?: string | undefined;
}

export const ComponentCard: React.FC<IComponentCard> = ({ title, description, children }) => {

  return (
    <SComponentCard>
      <div>
        <SComponentCardTitle>{title}</SComponentCardTitle>
        <SComponentCardDescription>{description}</SComponentCardDescription>
      </div>
      <SFlex>
        <IconTags></IconTags>
        <STagText>Tag A, Tag B, Tag C</STagText>
      </SFlex>
      {children}
    </SComponentCard>

  )
}
