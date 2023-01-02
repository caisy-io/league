import { FC } from "react";
import { SUsageChartCardChartGraph } from "./styles/SUsageChartCardChartGraph";

interface IUsageChartCardChartGraph {
  percentageUsed: number;
}

export const UsageChartCardChartGraph: FC<IUsageChartCardChartGraph> = ({ percentageUsed }) => {
  return <SUsageChartCardChartGraph percentage={percentageUsed} />;
};
