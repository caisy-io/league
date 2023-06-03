import React, { FC, ReactNode } from "react";
import { SEmptyGradient } from "./styles/SEmptyGradient";
import EmptyBannerImage from "./EmptyBannerImage";
import { SEmptyTableBanner } from "./styles/SEmptyTableBanner";
import { SEmptyTableBannerDescription } from "./styles/SEmptyTableBannerDescription";
import { SEmptyTableBannerTitle } from "./styles/SEmptyTableBannerTitle";

interface IEmptyGrid {
  title: string | ReactNode;
  description: string | ReactNode;
  children?: string | ReactNode;
}

export const EmptyGrid: FC<IEmptyGrid> = ({ title, description, children }) => {
  return (
    <>
      {children}
      <SEmptyTableBanner>
        <EmptyBannerImage />
        <SEmptyTableBannerTitle>{title}</SEmptyTableBannerTitle>
        <SEmptyTableBannerDescription>{description}</SEmptyTableBannerDescription>
      </SEmptyTableBanner>
      <SEmptyGradient />
    </>
  );
};
