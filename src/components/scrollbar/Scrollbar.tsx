import React from 'react';
import { SScrollbar } from './styles/SScrollbar';

export const Scrollbar: React.FC = ({ ...props }) => {
  const scrollbarRef = React.createRef();
  return (
    <SScrollbar ref={scrollbarRef}>
      {props.children}
    </SScrollbar>
  )
}
