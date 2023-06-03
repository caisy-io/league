import React, { FC, ReactNode } from "react";
import { EmptyBlueprint } from "./EmptyBlueprint";
import { EmptyGrid } from "./EmptyGrid";
import { EmptyTable } from "./EmptyTable";
import { SEmpty } from "./styles/SEmpty";

export type IEmptyType = "grid" | "blueprint" | "tableSkeleton";

interface IEmpty {
  type: IEmptyType;
  title: string | ReactNode;
  description: string | ReactNode;
  styleOverwrite?: any;
}

export const Empty: FC<IEmpty> = ({ type, title, description, styleOverwrite }) => {
  return (
    <SEmpty type={type} styleOverwrite={styleOverwrite}>
      {type === "blueprint" && <EmptyBlueprint type={type} description={description} title={title} />}
      {type === "tableSkeleton" && <EmptyTable description={description} title={title} />}
    </SEmpty>
  );
};
