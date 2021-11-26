import React from "react";
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

const EmptyImageComponent = ({ title, description, ...props }) => {
  return (
    <SEmptyImageWrapper>
      <SEmptyImageContainer>
        {props.children}
        <SEmptyImageTitle>{title}</SEmptyImageTitle>
        <SEmptyImageDescription>{description}</SEmptyImageDescription>
      </SEmptyImageContainer>
    </SEmptyImageWrapper>
  );
};

interface IEmpty {
  type: "grid" | "schema";
  title: string;
  description: string;
}

export const Empty: React.FC<IEmpty> = ({ ...props }) => {
  return (
    <SEmpty type={props.type}>
      {props.type === "schema" ? <SchemaLayout /> : <GridLayout />}
      {props.type === "schema" ? (
        <EmptyImageComponent title={props.title} description={props.description}>
          <EmptySchemaImage />
        </EmptyImageComponent>
      ) : (
        <EmptyImageComponent title={props.title} description={props.description}>
          <EmptyGridImage />
        </EmptyImageComponent>
      )}
      <SEmptyGradient type={props.type} />
    </SEmpty>
  );
};
