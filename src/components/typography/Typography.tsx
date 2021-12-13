import React from 'react';
import {STypography } from './styles/STypography';

interface ITypography{

}

export const Typography: React.FC<ITypography> = ({...props}) => {
  console.log(`Typography props: `, props);
  return (
    <STypography>
      {props.children}
    </STypography>
  )
}
