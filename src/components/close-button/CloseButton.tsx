import React from 'react';
import { IconCross } from '../../icons/IconCross';
import { SCloseButton } from './styles/SCloseButton';
import { SCloseButtonWrapper } from './styles/SCloseButtonWrapper';

export interface ICloseButtonProps {
  defaultVisible?: boolean,
  hover?: boolean,
  pressed?: boolean
}

export const CloseButton: React.FC<ICloseButtonProps> = ({ defaultVisible = true, ...props }) => {
  return (
    <SCloseButtonWrapper {...props} defaultVisible={defaultVisible}>
      {props.children}
      <SCloseButton {...props} defaultVisible={defaultVisible}>
        <IconCross variant="close" />
      </SCloseButton>
    </SCloseButtonWrapper>
  )
}
