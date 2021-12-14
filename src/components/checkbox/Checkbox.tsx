import React, { useState } from 'react';
import { SCheckbox } from './styles/SCheckbox';
import { SCustomCheckbox } from './styles/SCustomCheckbox';

interface ICheckboxProps {
  loading?: boolean,
  checked?: boolean,
  onChange: (e: Event) => void,
}

export const Checkbox: React.FC<ICheckboxProps> = ({ loading, checked, onChange }) => {

  return (
    <SCheckbox >
      <SCustomCheckbox onChange={onChange} checked={checked} loading={loading}>
        <input
          type="checkbox"
        />
        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.62793 3.22613L2.0732 4.6714L2.06386 4.66206L5.32455 1.40137" stroke="white" strokeWidth="1.2" strokeDasharray="200" strokeDashoffset="200" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </SCustomCheckbox>
    </SCheckbox>
  )
}
