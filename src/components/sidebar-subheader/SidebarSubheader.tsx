import React from 'react';
import { css } from 'styled-components';
import { Button } from '../../components/button';
import { IconChevronLeft } from '../../icons/IconChevronLeft';
import { SSidebarSubheader } from './styles/SSidebarSubheader';
import { SSidebarSubheaderText } from './styles/SSidebarSubheaderText';


interface ISidebarSubheader {
  subheaderText?: string,
}

const ButtonOverwrite = css`
  position: absolute;
  left: 1rem;
  top: 0.5rem;
`;

export const SidebarSubheader: React.FC<ISidebarSubheader> = ({ subheaderText }) => {

  return (
    <SSidebarSubheader>
      <Button styleOverwrite={ButtonOverwrite} type="secondary" size="small"> <IconChevronLeft size={16} /> </Button>
      <SSidebarSubheaderText> {subheaderText} </SSidebarSubheaderText>
    </SSidebarSubheader>
  )
}
