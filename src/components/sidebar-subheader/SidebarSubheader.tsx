import React from 'react';
import { Button } from '../../components/button';
import { IconChevronLeft } from '../../icons/IconChevronLeft';
import { SButtonOverwrite } from './styles/SButtonOverwrite';
import { SSidebarSubheader } from './styles/SSidebarSubheader';
import { SSidebarSubheaderText } from './styles/SSidebarSubheaderText';

interface ISidebarSubheader {
  subheaderText?: string,
  onClick?: () => void,
}

export const SidebarSubheader: React.FC<ISidebarSubheader> = ({ subheaderText, onClick }) => {
  return (
    <SSidebarSubheader>
      <Button onClick={onClick} styleOverwrite={SButtonOverwrite} type="secondary" size="small"> <IconChevronLeft size={20} /> </Button>
      <SSidebarSubheaderText> {subheaderText} </SSidebarSubheaderText>
    </SSidebarSubheader>
  )
}
