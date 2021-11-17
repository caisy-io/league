import React from 'react';
import {SScrollbar } from './styles/SScrollbar';

interface IScrollbar{

}

export const Scrollbar: React.FC<IScrollbar> = ({...props}) => {
  console.log(`Scrollbar props: `, props);
  return (
    <SScrollbar>
      {props.children}
    </SScrollbar>
  )
}
