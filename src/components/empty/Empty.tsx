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

interface IEmpty {
  type: "grid" | "schema";
}

export const Empty: React.FC<IEmpty> = ({ ...props }) => {
  const gridItems = [1, 2, 3];
  const schemaItems = [1, 2, 3, 4, 5, 6, 7, 8];
  const GridLayout = () => {
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

  return (
    <SEmpty type={props.type}>
      {props.type === "schema" ? <SchemaLayout /> : <GridLayout />}
      <SEmptyGradient type={props.type} />
    </SEmpty>
  );
};
