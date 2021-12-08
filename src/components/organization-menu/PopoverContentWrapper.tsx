import React, { FC } from 'react';
import { SPopoverContentWrapper } from './styles/SPopoverContentWrapper';

interface IPopoverContentWrapperProps {
  active: boolean,
  children?
}

export const PopoverContentWrapper: FC<IPopoverContentWrapperProps> = ({active, children }) => {
  return (
    <SPopoverContentWrapper active={active}>
      {children}
    </SPopoverContentWrapper>
  )
}
