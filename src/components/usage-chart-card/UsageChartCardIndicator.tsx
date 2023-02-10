import { FC } from "react";
import { averageNumber } from "./helper";
import { SUsageChartCardIndicator } from "./styles/SUsageChartCardIndicator";
import { SUsageChartCardIndicatorSection } from "./styles/SUsageChartCardIndicatorSection";
import { SUsageChartCardIndicatorTitle } from "./styles/SUsageChartCardIndicatorTitle";
import { SUsageChartCardIndicatorTitleSquare } from "./styles/SUsageChartCardIndicatorTitleSquare";
import { SUsageChartCardIndicatorValue } from "./styles/SUsageChartCardIndicatorValue";
import { IUsageChartCardI18n } from "./types";

interface IUsageChartCardIndicator {
  i18n: IUsageChartCardI18n;
  used: number;
  totalAvailable: number;
  identifier: string;
}

export const UsageChartCardIndicator: FC<IUsageChartCardIndicator> = ({ i18n, used, totalAvailable, identifier }) => {
  return (
    <SUsageChartCardIndicator>
      <SUsageChartCardIndicatorSection>
        <SUsageChartCardIndicatorTitle>
          <SUsageChartCardIndicatorTitleSquare /> {i18n.used}
        </SUsageChartCardIndicatorTitle>
        <SUsageChartCardIndicatorValue>
          {averageNumber(used)} {identifier}
        </SUsageChartCardIndicatorValue>
      </SUsageChartCardIndicatorSection>
      <SUsageChartCardIndicatorSection>
        <SUsageChartCardIndicatorTitle>{i18n.totalAvailable}</SUsageChartCardIndicatorTitle>
        <SUsageChartCardIndicatorValue>
          {averageNumber(totalAvailable)} {identifier}
        </SUsageChartCardIndicatorValue>
      </SUsageChartCardIndicatorSection>
    </SUsageChartCardIndicator>
  );
};
