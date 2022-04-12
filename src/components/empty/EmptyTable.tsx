import React, { FC, ReactNode } from "react";
import EmptyBannerImage from "./EmptyBannerImage";
import { SEmptyTable } from "./styles/SEmptyTable";
import { SEmptyTableBanner } from "./styles/SEmptyTableBanner";
import { SEmptyTableBannerDescription } from "./styles/SEmptyTableBannerDescription";
import { SEmptyTableBannerTitle } from "./styles/SEmptyTableBannerTitle";
import { SEmptyTableCell } from "./styles/SEmptyTableCell";
import { SEmptyTableCellContent } from "./styles/SEmptyTableCellContent";
import { SEmptyTableRow } from "./styles/SEmptyTableRow";
import { SEmptyTableSkeleton } from "./styles/SEmptyTableSkeleton";

interface IEmptyTable {
  title: string | ReactNode;
  description: string | ReactNode;
}

export const EmptyTable: FC<IEmptyTable> = ({ title, description }) => {
  return (
    <SEmptyTable>
      {[...Array(5)].map((_, index) => (
        <SEmptyTableRow key={`emptyAssets${index}`}>
          <SEmptyTableCell
            styleOverwrite={{
              width: 48,
              flex: "none",
              boxShadow: "4px 0px 8px rgba(0, 0, 0, 0.04)",
              zIndex: 2,
              position: "relative",
            }}
          >
            <SEmptyTableCellContent>
              <SEmptyTableSkeleton />
            </SEmptyTableCellContent>
          </SEmptyTableCell>
          <SEmptyTableCell
            styleOverwrite={{
              width: "84px",
              flex: "none",
            }}
          >
            <SEmptyTableCellContent styleOverwrite={{ paddingLeft: "20px" }}>
              <SEmptyTableSkeleton width="48px" height="48px" />
            </SEmptyTableCellContent>
          </SEmptyTableCell>
          <SEmptyTableCell styleOverwrite={{ flex: "1 1 134px" }}>
            <SEmptyTableCellContent
              styleOverwrite={{
                paddingLeft: "0",
                fontWeight: 600,
              }}
            >
              <SEmptyTableSkeleton width="64px" height="20px" />
            </SEmptyTableCellContent>
          </SEmptyTableCell>
          <SEmptyTableCell styleOverwrite={{ flex: "1 1 114px" }}>
            <SEmptyTableCellContent>
              <SEmptyTableSkeleton width="64px" height="20px" />
            </SEmptyTableCellContent>
          </SEmptyTableCell>
          <SEmptyTableCell styleOverwrite={{ flex: "1 1 153px" }}>
            <SEmptyTableCellContent>
              <SEmptyTableSkeleton width="64px" height="20px" />
            </SEmptyTableCellContent>
          </SEmptyTableCell>
          <SEmptyTableCell styleOverwrite={{ flex: "0 1 110px" }}>
            <SEmptyTableCellContent>
              <SEmptyTableSkeleton width="59px" height="24px" />
            </SEmptyTableCellContent>
          </SEmptyTableCell>
          <SEmptyTableCell styleOverwrite={{ flex: "0 0 134px" }}>
            <SEmptyTableCellContent />
          </SEmptyTableCell>
        </SEmptyTableRow>
      ))}
      <SEmptyTableBanner>
        <EmptyBannerImage />
        <SEmptyTableBannerTitle>{title}</SEmptyTableBannerTitle>
        <SEmptyTableBannerDescription>{description}</SEmptyTableBannerDescription>
      </SEmptyTableBanner>
    </SEmptyTable>
  );
};
