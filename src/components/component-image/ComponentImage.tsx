import React from 'react';
import { SComponentImage } from './styles/SComponentImage';
import { SInnerRectangle } from './styles/SInnerRectangle';

export type IComponentImageTypes = "open" | "grid" | "list item";

interface IComponentImage {
  type?: IComponentImageTypes;
}

export const ComponentImage: React.FC<IComponentImage> = ({ type }) => {
  return (
    <SComponentImage type={type}>
      <SInnerRectangle type={type} />
    </SComponentImage>
  )
}
