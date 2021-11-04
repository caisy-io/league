import React from 'react';
import {SCloseButton } from './styles/SCloseButton';

interface ICloseButton{

}

export const CloseButton: React.FC<ICloseButton> = ({...props}) => {
  console.log(`CloseButton props: `, props);
  return (
    <SCloseButton>
      {props.children}
    </SCloseButton>
  )
}
