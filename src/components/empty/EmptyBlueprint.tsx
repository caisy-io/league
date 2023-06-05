import React, { FC, ReactNode } from "react";
import { IEmptyType } from "./Empty";
import { SEmptyGradientBlueprint } from "./styles/SEmptyGradientBlueprint";
import { SEmptySchemaItem } from "./styles/SEmptySchemaItem";
import { SEmptyGridItemSquare } from "./styles/SEmptySchemaItemSquare";
import { SEmptySchemaItemHeader } from "./styles/SEmptySchemaItemHeader";
import { SEmptySchemaItemTitle } from "./styles/SEmptySchemaItemTitle";
import { SEmptyImageWrapper } from "./styles/SEmptyImageWrapper";
import EmptySchemaImage from "./EmptySchemaImage";
import { SEmptyImageTitle } from "./styles/SEmptyImageTitle";
import { SEmptyImageDescription } from "./styles/SEmptyImageDescription";
import { SEmptyImageContainer } from "./styles/SEmptyImageContainer";

const SchemaLayout = () => {
  const schemaItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {schemaItems.map((item) => (
        <SEmptySchemaItem key={item}>
          <SEmptySchemaItemHeader>
            <SEmptyGridItemSquare size={16} />
            <SEmptyGridItemSquare size={16} />
            <SEmptySchemaItemTitle />
            <SEmptySchemaItemTitle style={{ marginLeft: "auto" }} />
          </SEmptySchemaItemHeader>
          <SEmptyGridItemSquare style={{ marginLeft: "auto" }} size={32} />
        </SEmptySchemaItem>
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

interface IEmptyBlueprint {
  title: string | ReactNode;
  description: string | ReactNode;
}

export const EmptyBlueprint: FC<IEmptyBlueprint> = ({ title, description }) => {
  return (
    <>
      <SchemaLayout />
      <EmptyImageComponent title={title} description={description}>
        <EmptySchemaImage />
      </EmptyImageComponent>
      <SEmptyGradientBlueprint />
    </>
  );
};
