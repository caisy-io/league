import React from 'react';
import { IconCross } from '../../icons/IconCross';
import { SCloseButton } from './styles/SCloseButton';
import { SCloseButtonWrapper } from './styles/SCloseButtonWrapper';
export type ICloseButtonType = "default" | "hover" | "active";
export type ICloseButtonVisible = "true" | "false";

export interface ICloseButtonProps {
  type?: ICloseButtonType;
  invisible?: ICloseButtonVisible;
  defaultVisible?: boolean
}

export const CloseButton: React.FC<ICloseButtonProps> = ({ defaultVisible=true,...props }) => {
  console.log(`CloseButton props: `, props);
  return (
    <SCloseButtonWrapper {...props}>
      {props.children}
      <SCloseButton defaultVisible={defaultVisible} {...props}>
        <IconCross variant="close" />
      </SCloseButton>
    </SCloseButtonWrapper>
  )
}
