import { FC, useMemo } from "react";
import { SUsageChartCard } from "./styles/SUsageChartCard";
import { SUsageChartCardLeft } from "./styles/SUsageChartCardLeft";
import { IUsageChartCardChartData, UsageChartCardChart } from "./UsageChartCardChart";
import { UsageChartCardContent } from "./UsageChartCardContent";
import { UsageChartCardIndicator } from "./UsageChartCardIndicator";
import numbro from "numbro";

export interface IUsageChartCardI18n {
  used: React.ReactNode;
  totalAvailable: React.ReactNode;
}

interface IUsageChartCard {
  used: number;
  max: number;
  title: React.ReactNode;
  usage: React.ReactNode;
  children?: React.ReactNode;
  i18n: IUsageChartCardI18n;
  identifier: string;
  chartData: IUsageChartCardChartData[];
  locale?: string;
}

export const UsageChartCard: FC<IUsageChartCard> = ({
  title,
  usage,
  children,
  used,
  max,
  i18n,
  identifier,
  chartData,
}) => {
  const usagePercentage = useMemo(() => {
    return (used * 100) / max;
  }, [used, max]);

  return (
    <SUsageChartCard>
      <SUsageChartCardLeft>
        <UsageChartCardContent title={title} usage={usage} max={max} used={used} usagePercentage={usagePercentage}>
          {children}
        </UsageChartCardContent>

        <UsageChartCardIndicator identifier={identifier} used={used} totalAvailable={max} i18n={i18n} />
      </SUsageChartCardLeft>
      <UsageChartCardChart data={chartData} totalAvailable={max} />
    </SUsageChartCard>
  );
};

export const averageNumber = (number: number) => {
  if (number < 10000) return number;
  return numbro(number).format({ average: true, totalLength: 2 });
};
