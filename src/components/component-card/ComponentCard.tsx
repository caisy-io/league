import React, { ReactNode } from 'react';
import { IconTags } from '../../icons';
import { ComponentImage } from '../component-image';
import { SComponentCard } from './styles/SComponentCard';
import { SComponentCardDescription } from './styles/SComponentCardDescription';
import { SComponentCardTitle } from './styles/SComponentCardTitle';
import { STagContainer } from './styles/STagContainer';
import { STagText } from './styles/STagText';

interface IComponentCard {
  title?: string | undefined;
  description?: string | undefined;
  tags?: string | undefined;
  image?: ReactNode;
}

export const ComponentCard: React.FC<IComponentCard> = ({ title, description, tags, image }) => {
  return (
    <SComponentCard>
      <div>
        <SComponentCardTitle>{title}</SComponentCardTitle>
        <SComponentCardDescription>{description}</SComponentCardDescription>
      </div>
      <ComponentImage type="grid" image={image}></ComponentImage>
      <STagContainer>
        <IconTags></IconTags>
        <STagText>{tags}</STagText>
      </STagContainer>
    </SComponentCard>
  )
}
