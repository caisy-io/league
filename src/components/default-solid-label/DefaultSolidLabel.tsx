import React, { ReactNode } from 'react';
import { IconCross } from '../..';
import { SDefaultSolidLabel } from './styles/SDefaultSolidLabel';
import { SLeftImage } from './styles/SLeftImage';

interface IDefaultSolidLabel {
  labelText?: string,
  onClick?: () => void,
  leftImage?: ReactNode
}

export const DefaultSolidLabel: React.FC<IDefaultSolidLabel> = ({ leftImage, labelText, onClick }) => {
  return (
    <SDefaultSolidLabel onClick={onClick}>
      {leftImage && <SLeftImage>{leftImage}</SLeftImage>}
      {labelText}
      <IconCross size={20} />
    </SDefaultSolidLabel>
  )
}
