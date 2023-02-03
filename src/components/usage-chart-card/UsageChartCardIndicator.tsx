import { FC } from "react";
import { SUsageChartCardIndicator } from "./styles/SUsageChartCardIndicator";
import { SUsageChartCardIndicatorSection } from "./styles/SUsageChartCardIndicatorSection";
import { SUsageChartCardIndicatorTitle } from "./styles/SUsageChartCardIndicatorTitle";
import { SUsageChartCardIndicatorTitleSquare } from "./styles/SUsageChartCardIndicatorTitleSquare";
import { SUsageChartCardIndicatorValue } from "./styles/SUsageChartCardIndicatorValue";
import { IUsageChartCardI18n } from "./UsageChartCard";

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
          {used} {identifier}
        </SUsageChartCardIndicatorValue>
      </SUsageChartCardIndicatorSection>
      <SUsageChartCardIndicatorSection>
        <SUsageChartCardIndicatorTitle>{i18n.totalAvailable}</SUsageChartCardIndicatorTitle>
        <SUsageChartCardIndicatorValue>
          {totalAvailable} {identifier}
        </SUsageChartCardIndicatorValue>
      </SUsageChartCardIndicatorSection>
    </SUsageChartCardIndicator>
  );
};