import React, { useState } from 'react';
import { IconCheckmark } from '../..';
import { SCheckbox } from './styles/SCheckbox';
import { SCustomCheckbox } from './styles/SCustomCheckbox';

interface ICheckbox {
  loading?: boolean,
  checked?: boolean
}

export const Checkbox: React.FC<ICheckbox> = ({ loading }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SCheckbox>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <SCustomCheckbox
          checked={isChecked}
        >
          <IconCheckmark></IconCheckmark>
        </SCustomCheckbox>

      </label>
    </SCheckbox>
  )
}
