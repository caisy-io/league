import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Button } from '..';
import { SFlex } from '../../base-components/flex/styles/SFlex';
import { IButtonType } from '../button/Button';
import { FlatActionButton } from '../flat-action-button/FlatActionButton';
import { SExtensionCard } from './styles/SExtensionCard';
import { SExtensionCardDescription } from './styles/SExtensionCardDescription';
import { SExtensionCardTitle } from './styles/SExtensionCardTitle';

interface IExtensionCard {
  titleIcon?: ReactNode;
  title?: string | undefined;
  description?: string | undefined;
  flatButtonIcon?: ReactNode;
  flatButtonText?: string | undefined;
}

export const STitleFlex = styled(SFlex)`
  gap: 10px;
  max-width: 80%;
`;

export const STitleButtonFlex = styled(SFlex)`
  margin-bottom: 0.5rem;
`;

export const ExtensionCard: React.FC<IExtensionCard> = ({ titleIcon, title, description, flatButtonIcon, flatButtonText }) => {

  const [primaryButtonText, setprimaryButtonText] = useState("ADD");
  const [buttonType, setbuttonType] = useState<IButtonType>("primary");
  const buttonOnClickHandler = () => {
    if (primaryButtonText == "ADD") {
      setprimaryButtonText("REMOVE")
      setbuttonType("tertiary")
    } else {
      setprimaryButtonText("ADD")
      setbuttonType("primary")
    }
  };

  return (
    <SExtensionCard>
      <STitleButtonFlex justify="space-between">
        <STitleFlex>
          {titleIcon}
          <SExtensionCardTitle>{title}</SExtensionCardTitle>
        </STitleFlex>
        <Button onClick={() => buttonOnClickHandler()} type={buttonType} size="small">{primaryButtonText}</Button>
      </STitleButtonFlex>
      <SExtensionCardDescription>{description}</SExtensionCardDescription>
      <FlatActionButton type="grey">  {flatButtonIcon} {flatButtonText}  </FlatActionButton>
    </SExtensionCard>
  )
}
