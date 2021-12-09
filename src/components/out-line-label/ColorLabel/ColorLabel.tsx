import React, { FC } from 'react'
import { SColorLabel } from './SColorLabel';

interface IColorLabel {
  color: string;
}

const ColorLabel: FC<IColorLabel> = ({ color }) => (
  <SColorLabel color={color}/>
);

export default ColorLabel;
