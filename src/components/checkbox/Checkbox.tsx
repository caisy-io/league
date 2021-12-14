import React, { useState } from 'react';
import { SCheckbox } from './styles/SCheckbox';
import { SCustomCheckbox } from './styles/SCustomCheckbox';

interface ICheckbox {
  loading?: boolean,
  checked?: boolean,
  onChange?
}

export const Checkbox: React.FC<ICheckbox> = ({ loading, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SCheckbox >
      <SCustomCheckbox checked={isChecked} loading={loading}>
        <input
          type="checkbox"
          onChange={() => { setIsChecked(!isChecked) }} />


        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.62793 3.22613L2.0732 4.6714L2.06386 4.66206L5.32455 1.40137" stroke="white" strokeWidth="1.2" strokeDasharray="200" strokeDashoffset="200" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      </SCustomCheckbox>
    </SCheckbox>
  )
}
