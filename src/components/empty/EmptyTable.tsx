import React, { FC, ReactNode } from "react";
import EmptyBannerImage from "./EmptyBannerImage";
import EmptyTableRowsImage from "./EmptyTableRowsImage";
import { SEmptyTableBanner } from "./styles/SEmptyTableBanner";
import { SEmptyTableBannerDescription } from "./styles/SEmptyTableBannerDescription";
import { SEmptyTableBannerTitle } from "./styles/SEmptyTableBannerTitle";
import { SEmptyTableRows } from "./styles/SEmptyTableRows";

interface IEmptyTable {
  title: string | ReactNode;
  description: string | ReactNode;
}

export const EmptyTable: FC<IEmptyTable> = ({ title, description }) => {
  return (
    <>
      <SEmptyTableRows>
        <EmptyTableRowsImage />
        <SEmptyTableBanner>
          <EmptyBannerImage />
          <SEmptyTableBannerTitle>{title}</SEmptyTableBannerTitle>
          <SEmptyTableBannerDescription>{description}</SEmptyTableBannerDescription>
        </SEmptyTableBanner>
      </SEmptyTableRows>
    </>
  );
};
