import { FC } from "react";
import { SUsageAmountItemUsageGraph } from "./styles/SUsageAmountItemUsageGraph";

interface IHomePageStatisticGraph {
  percentage: number;
}

const UsageAmountItemUsageGraph: FC<IHomePageStatisticGraph> = ({ percentage }) => {
  return (
    <SUsageAmountItemUsageGraph>
      <svg style={{}} viewBox="0 0 36 36">
        <path
          d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="var(--ui-03)"
          strokeWidth="3"
          strokeDasharray="100"
        />
      </svg>
      <svg viewBox="0 0 36 36">
        <path
          d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth="3"
          strokeDasharray={`${percentage}, 100`}
          // strokeDashoffset={100}
        />
      </svg>
    </SUsageAmountItemUsageGraph>
  );
};

export default UsageAmountItemUsageGraph;
