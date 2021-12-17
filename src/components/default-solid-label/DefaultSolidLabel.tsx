import React, { ReactNode } from 'react';
import { IconCross } from '../../icons/IconCross';
import { SDefaultSolidLabel } from './styles/SDefaultSolidLabel';
import { SLeftImage } from './styles/SLeftImage';

interface IDefaultSolidLabel {
  labelText?: string,
  onRemove?: () => void,
  leftImage?: ReactNode
}

export const DefaultSolidLabel: React.FC<IDefaultSolidLabel> = ({ leftImage, labelText, onRemove }) => {
  return (
    <SDefaultSolidLabel>
      {leftImage && <SLeftImage>{leftImage}</SLeftImage>}
      {labelText}
      <a onClick={onRemove}>      <IconCross size={20} />
      </a>
    </SDefaultSolidLabel>
  )
}
