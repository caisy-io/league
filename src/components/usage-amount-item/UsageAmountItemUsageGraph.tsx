import { FC } from "react";
import { SUsageAmountItemUsageGraph } from "./styles/SUsageAmountItemUsageGraph";

interface IHomePageStatisticGraph {
  percentage: number;
  size?: number;
  barColor?: string;
  barWidth?: string;
}

const UsageAmountItemUsageGraph: FC<IHomePageStatisticGraph> = ({ percentage, size, barColor, barWidth }) => {
  return (
    <SUsageAmountItemUsageGraph barColor={barColor} size={size}>
      <svg style={{}} viewBox={`0 0 ${size || "36"} ${size || "36"}`}>
        <path
          d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="var(--ui-03)"
          strokeWidth={`${barWidth || "3"}`}
          strokeDasharray="100"
        />
      </svg>
      <svg viewBox={`0 0 ${size || "36"} ${size || "36"}`}>
        <path
          d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth={`${barWidth || "3"}`}
          strokeDasharray={`${percentage}, 100`}
        />
      </svg>
    </SUsageAmountItemUsageGraph>
  );
};

export default UsageAmountItemUsageGraph;
