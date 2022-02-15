import React from 'react';
import { Button } from '../../components/button';
import { IconChevronLeft } from '../../icons/IconChevronLeft';
import { SButtonOverwrite } from './styles/SButtonOverwrite';
import { SSidebarSubheader } from './styles/SSidebarSubheader';
import { SSidebarSubheaderText } from './styles/SSidebarSubheaderText';

interface ISidebarSubheader {
  subheaderText?: string,
  styleOverwrite?: string,
  onClick?: () => void,
}

export const SidebarSubheader: React.FC<ISidebarSubheader> = ({ styleOverwrite, subheaderText, onClick }) => {
  return (
    <SSidebarSubheader styleOverwrite={styleOverwrite}>
      <Button onClick={onClick} styleOverwrite={SButtonOverwrite} type="secondary" size="small"> <IconChevronLeft size={20} /> </Button>
      <SSidebarSubheaderText>  <span>{subheaderText} </span></SSidebarSubheaderText>
    </SSidebarSubheader>
  )
}
