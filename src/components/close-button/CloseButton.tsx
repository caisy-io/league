import React from 'react';
import { IconCross } from '../../icons/IconCross';
import { SCloseButton } from './styles/SCloseButton';
import { SCloseButtonWrapper } from './styles/SCloseButtonWrapper';
export interface ICloseButtonProps {
  defaultVisible?: boolean
}

export const CloseButton: React.FC<ICloseButtonProps> = ({ defaultVisible=true,...props }) => {
  console.log(`CloseButton props: `, props);
  return (
    <SCloseButtonWrapper {...props} defaultVisible={defaultVisible}>
      {props.children}
      <SCloseButton defaultVisible={defaultVisible}>
        <IconCross variant="close" />
      </SCloseButton>
    </SCloseButtonWrapper>
  )
}
