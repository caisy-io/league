import React, { FC } from "react";
import { SEmpty } from "./styles/SEmpty";
import { SEmptyGridItem } from "./styles/SEmptyGridItem";
import { SEmptyGradient } from "./styles/SEmptyGradient";
import { SEmptyGridItemHeader } from "./styles/SEmptyGridItemHeader";
import { SEmptyGridItemTitle } from "./styles/SEmptyGridItemTitle";
import { SEmptyGridItemSubtitle } from "./styles/SEmptyGridItemSubtitle";
import { SEmptyGridItemContent } from "./styles/SEmptyGridItemContent";
import { SEmptySchemaItem } from "./styles/SEmptySchemaItem";
import { SEmptyGridItemSquare } from "./styles/SEmptySchemaItemSquare";
import { SEmptySchemaItemHeader } from "./styles/SEmptySchemaItemHeader";
import { SEmptySchemaItemTitle } from "./styles/SEmptySchemaItemTitle";
import EmptyGridImage from "./EmptyGridImage";
import { SEmptyImageWrapper } from "./styles/SEmptyImageWrapper";
import EmptySchemaImage from "./EmptySchemaImage";
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

export type IEmptyType = "grid" | "blueprint";

interface IEmpty {
  type: IEmptyType;
  title: string;
  description: string;
}

export const Empty: FC<IEmpty> = ({ type, title, description }) => {
  return (
    <SEmpty type={type}>
      {type === "blueprint" ? <SchemaLayout /> : <GridLayout />}
      {type === "blueprint" ? (
        <EmptyImageComponent title={title} description={description}>
          <EmptySchemaImage />
        </EmptyImageComponent>
      ) : (
        <EmptyImageComponent title={title} description={description}>
          <EmptyGridImage />
        </EmptyImageComponent>
      )}
      <SEmptyGradient type={type} />
    </SEmpty>
  );
};
