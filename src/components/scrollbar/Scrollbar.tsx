import React, { FC, forwardRef } from 'react';
import { SScrollbar } from './styles/SScrollbar';

interface IScrollbarProps{
  children?
}

export const Scrollbar: FC<IScrollbarProps> = forwardRef((children, ref) => {
  return (
    <SScrollbar ref={ref}>
      {children}
    </SScrollbar>
  )
});