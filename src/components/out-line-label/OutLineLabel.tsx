import React, { FC, ReactNode } from 'react';
import { SOutLineLabel } from './styles/SOutLineLabel';
import { SIconWrapper } from './styles/SIconWrapper';
import { SColorLabelWrapper } from './styles/SColorLabelWrapper'
import { SImageWrapper } from './styles/SImageWrapper';
import { SBadgeLabelWrapper } from './styles/SBadgeLabelWrapper';

interface IOutLineLabel {
  icon?: ReactNode,
  image?: ReactNode,
  colorLabel?: ReactNode,
  badgeLabel?: ReactNode,
  activated?: boolean,
  size?: 'medium' | 'large',
}

const OutLineLabel: FC<IOutLineLabel> = props => {
  return (
    <SOutLineLabel {...props} >
      {props.colorLabel && <SColorLabelWrapper {...props}>{props.colorLabel}</SColorLabelWrapper>}
      {props.image && <SImageWrapper {...props}>{props.image}</SImageWrapper>}
      {props.children}
      {props.icon && <SIconWrapper {...props}>{props.icon}</SIconWrapper>}
      {props.badgeLabel && <SBadgeLabelWrapper {...props}>{props.badgeLabel}</SBadgeLabelWrapper>}
    </SOutLineLabel>
  )
}

export default OutLineLabel;