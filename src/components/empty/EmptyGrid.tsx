import React, { FC, ReactNode } from "react";
import { IEmptyType } from "./Empty";
import { SEmptyGridItem } from "./styles/SEmptyGridItem";
import { SEmptyGradient } from "./styles/SEmptyGradient";
import { SEmptyGridItemHeader } from "./styles/SEmptyGridItemHeader";
import { SEmptyGridItemTitle } from "./styles/SEmptyGridItemTitle";
import { SEmptyGridItemSubtitle } from "./styles/SEmptyGridItemSubtitle";
import { SEmptyGridItemContent } from "./styles/SEmptyGridItemContent";
import EmptyGridImage from "./EmptyGridImage";
import { SEmptyImageWrapper } from "./styles/SEmptyImageWrapper";
import { SEmptyImageTitle } from "./styles/SEmptyImageTitle";
import { SEmptyImageDescription } from "./styles/SEmptyImageDescription";
import { SEmptyImageContainer } from "./styles/SEmptyImageContainer";

const GridLayout = () => {
  const gridItems = [1, 2, 3];
  return (
    <>
      {gridItems.map((item) => (
        <SEmptyGridItem key={item}>
          <SEmptyGridItemHeader>
            <SEmptyGridItemTitle />
            <SEmptyGridItemSubtitle />
          </SEmptyGridItemHeader>
          <SEmptyGridItemContent />
        </SEmptyGridItem>
      ))}
    </>
  );
};

const EmptyImageComponent = ({ title, description, children }) => {
  return (
    <SEmptyImageWrapper>
      <SEmptyImageContainer>
        {children}
        <SEmptyImageTitle>{title}</SEmptyImageTitle>
        <SEmptyImageDescription>{description}</SEmptyImageDescription>
      </SEmptyImageContainer>
    </SEmptyImageWrapper>
  );
};

interface IEmptyGrid {
  type: IEmptyType;
  title: string | ReactNode;
  description: string | ReactNode;
}

export const EmptyGrid: FC<IEmptyGrid> = ({ type, title, description }) => {
  return (
    <>
      <GridLayout />
      <EmptyImageComponent title={title} description={description}>
        <EmptyGridImage />
      </EmptyImageComponent>
      <SEmptyGradient type={type} />
    </>
  );
};
