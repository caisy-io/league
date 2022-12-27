import { FC, useMemo } from "react";
import { SUsageChartCardChart } from "./styles/SUsageChartCardChart";
import { SUsageChartCardChartBackground } from "./styles/SUsageChartCardChartBackground";
import { SUsageChartCardChartBackgroundLine } from "./styles/SUsageChartCardChartBackgroundLine";
import { SUsageChartCardChartContainer } from "./styles/SUsageChartCardChartContainer";
import { SUsageChartCardChartDate } from "./styles/SUsageChartCardChartDate";
import { SUsageChartCardChartDateContainer } from "./styles/SUsageChartCardChartDateContainer";
import { SUsageChartCardChartGraphContainer } from "./styles/SUsageChartCardChartGraphContainer";
import { SUsageChartCardChartY } from "./styles/SUsageChartCardChartY";
import { SUsageChartCardYNumber } from "./styles/SUsageChartCardYNumber";
import { UsageChartCardChartGraph } from "./UsageChartCardChartGraph";

const BACKGROUND_LINES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export interface IUsageChartCardChartData {
  date: React.ReactNode;
  percentageUsed: number;
}

interface IUsageChartCardChart {
  totalAvailable: number;
  data: IUsageChartCardChartData[];
}

export const UsageChartCardChart: FC<IUsageChartCardChart> = ({ totalAvailable, data }) => {
  const REFERENCE_LINES = useMemo(() => {
    return BACKGROUND_LINES.map((line) => Math.floor((totalAvailable / 9) * line));
  }, [totalAvailable]);

  return (
    <SUsageChartCardChart>
      <SUsageChartCardChartContainer>
        <SUsageChartCardChartBackground>
          {BACKGROUND_LINES.map((line) => (
            <SUsageChartCardChartBackgroundLine key={line} />
          ))}
        </SUsageChartCardChartBackground>
        <SUsageChartCardChartGraphContainer>
          {data.map((count, index) => (
            <UsageChartCardChartGraph key={index} percentageUsed={count.percentageUsed} />
          ))}
        </SUsageChartCardChartGraphContainer>
        <SUsageChartCardChartDateContainer>
          {data.map((count, index) => (
            <SUsageChartCardChartDate key={index}>{count.date}</SUsageChartCardChartDate>
          ))}
        </SUsageChartCardChartDateContainer>
      </SUsageChartCardChartContainer>
      <SUsageChartCardChartY>
        {REFERENCE_LINES.map((line) => (
          <SUsageChartCardYNumber key={line}>{line}</SUsageChartCardYNumber>
        ))}
      </SUsageChartCardChartY>
    </SUsageChartCardChart>
  );
};
