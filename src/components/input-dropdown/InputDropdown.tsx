import React, { ReactNode } from 'react';
import { IconChevronDown } from '../..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { SInputDropdown } from './styles/SInputDropdown';
import { SInputDropdownLabel } from './styles/SInputDropdownLabel';
import { SInputDropdownTextIconWrapper } from './styles/SInputDropdownTextIconWrapper';
import { SInputDropdownTextWrapper } from './styles/SInputDropdownTextWrapper';
import { SInputDropdownTitle } from './styles/SInputDropdownTitle';

type TSimpleInputDropdownState = "success" | "error";

type TSimpleInputDropdownInput = "multiple" | "system";

export interface IInputDropdownProps {
  label?: string;
  title?: string;
  errors?: string[];
  state?: TSimpleInputDropdownState;
  translationBadge?: JSX.Element;
  required?: boolean;
  leftIcon?: ReactNode;
  onChange?: () => void;
}

export const InputDropdown: React.FC<IInputDropdownProps> = ({ children, leftIcon, label, title, required }) => {
  return (
    <SInputDropdown>
      {children}
      <SInputDropdownTextIconWrapper>
        {leftIcon}
        <SInputDropdownTextWrapper>
          {label && <SInputDropdownLabel required={required}>{label}</SInputDropdownLabel>}
          <SInputDropdownTitle label={label} required={required}>{title}</SInputDropdownTitle>
        </SInputDropdownTextWrapper>
      </SInputDropdownTextIconWrapper>
      <IconChevronDown size={24}></IconChevronDown>
    </SInputDropdown>
  )
}
