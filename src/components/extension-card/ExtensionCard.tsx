import React, { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
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
  onAdd: () => any;
  onRemove: () => any;
}

export const STitleFlex = styled(SFlex)`
  gap: 10px;
  max-width: 80%;
  svg {
    width: 19px;
    flex-shrink: 0;
  }
`;

export const STitleButtonFlex = styled(SFlex)`
  margin-bottom: 0.5rem;
`;

const ButtonOverwrite = css`
  width: 74px;
  padding: 0 9.5px;
  span{
    line-height: 11px;
  }
`;

export const ExtensionCard: React.FC<IExtensionCard> = ({ titleIcon, title, description, flatButtonIcon, flatButtonText, onAdd, onRemove }) => {
  const [primaryButtonText, setprimaryButtonText] = useState("ADD");
  const [buttonType, setbuttonType] = useState<IButtonType>("primary");
  const buttonOnClickHandler = () => {
    if (primaryButtonText == "ADD") {
      setprimaryButtonText("REMOVE")
      setbuttonType("tertiary")
      onAdd()
    } else {
      setprimaryButtonText("ADD")
      setbuttonType("primary")
      onRemove()
    }
  };

  return (
    <SExtensionCard>
      <STitleButtonFlex justify="space-between">
        <STitleFlex>
          {titleIcon}
          <SExtensionCardTitle>{title}</SExtensionCardTitle>
        </STitleFlex>
        <Button onClick={() => buttonOnClickHandler()} type={buttonType} size="small" styleOverwrite={ButtonOverwrite}>{primaryButtonText}  </Button>
      </STitleButtonFlex>
      <SExtensionCardDescription>{description}</SExtensionCardDescription>
      <FlatActionButton type="grey">  {flatButtonIcon} {flatButtonText}  </FlatActionButton>
    </SExtensionCard>
  )
}