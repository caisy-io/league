import React, { useState } from 'react';
import { IconCheckmark } from '../../icons';
import { SCheckbox } from './styles/SCheckbox';
import { SCustomCheckbox } from './styles/SCustomCheckbox';

interface ICheckboxProps {
  loading?: boolean,
  checked?: boolean,
  onChange?: (e: Event) => void,
}

export const Checkbox: React.FC<ICheckboxProps> = ({ loading, checked, onChange }) => {
  return (
    <SCheckbox >
      <SCustomCheckbox onChange={onChange} checked={checked} isLoading={loading}>
        <input
          type="checkbox"
        />
        <IconCheckmark size={12}></IconCheckmark>
      </SCustomCheckbox>
    </SCheckbox>
  )
}
