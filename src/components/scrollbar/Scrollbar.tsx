import React, { FC, forwardRef } from 'react';
import { SScrollbar } from './styles/SScrollbar';

interface IScrollbarProps {
  children?,
  ref?
}

export const Scrollbar: FC<IScrollbarProps> = forwardRef(({ children }: IScrollbarProps, ref: any) => {
  return (
    <SScrollbar ref={ref}>
      {children}
    </SScrollbar>
  )
});