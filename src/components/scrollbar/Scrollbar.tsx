import React, { forwardRef } from 'react';
import { SScrollbar } from './styles/SScrollbar';

export const Scrollbar = React.forwardRef((props, ref) => {
  return (
    <SScrollbar ref={ref}>
      {props.children}
    </SScrollbar>
  )
});
