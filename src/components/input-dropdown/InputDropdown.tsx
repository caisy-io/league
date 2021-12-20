import React from 'react';
import { IconChevronDown } from '../..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { SInputDropdown } from './styles/SInputDropdown';
import { SInputDropdownLabel } from './styles/SInputDropdownLabel';
import { SInputDropdownTextWrapper } from './styles/SInputDropdownTextWrapper';
import { SInputDropdownTitle } from './styles/SInputDropdownTitle';

type TSimpleInputDropdownState = "success" | "error";

export interface IInputDropdownProps {
  label?: string;
  title?: string;
  errors?: string[];
  state?: TSimpleInputDropdownState;
  translationBadge?: JSX.Element;
  required?: boolean;
  onChange?: () => void;
}

export const InputDropdown: React.FC<IInputDropdownProps> = ({ children, label, title, required }) => {
  return (
    <SInputDropdown>
      {children}
      <SInputDropdownTextWrapper>
        {label && <SInputDropdownLabel required={required}>{label}</SInputDropdownLabel>}
        <SInputDropdownTitle label={label} required={required}>{title}</SInputDropdownTitle>
      </SInputDropdownTextWrapper>

      <IconChevronDown size={24}></IconChevronDown>
    </SInputDropdown>
  )
}
