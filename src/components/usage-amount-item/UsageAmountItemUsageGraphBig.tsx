import { FC } from "react";
import { SUsageAmountItemUsageGraphBig } from "./styles/SUsageAmountItemUsageGraphBig";

interface IHomePageStatisticGraph {
  percentage: number;
}

export const UsageAmountItemUsageGraphBig: FC<IHomePageStatisticGraph> = ({ percentage }) => {
  return (
    <SUsageAmountItemUsageGraphBig color={percentage <= 65 ? "blue" : percentage < 90 ? "yellow" : "red"}>
      <svg style={{}} viewBox="0 0 36 36">
        <path
          d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="var(--ui-03)"
          strokeWidth="2"
          strokeDasharray="100"
        />
      </svg>
      <svg viewBox="0 0 36 36">
        <path
          d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${percentage}, 100`}
          // strokeDashoffset={100}
        />
      </svg>
      <label>
        {Math.round(percentage) + "%"}
      </label>
    </SUsageAmountItemUsageGraphBig>
  );
};


