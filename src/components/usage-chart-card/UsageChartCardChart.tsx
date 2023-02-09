import { FC, useMemo, useState } from "react";
import { SUsageChartCardChart } from "./styles/SUsageChartCardChart";
import { SUsageChartCardChartBackground } from "./styles/SUsageChartCardChartBackground";
import { SUsageChartCardChartBackgroundLine } from "./styles/SUsageChartCardChartBackgroundLine";
import { SUsageChartCardChartContainer } from "./styles/SUsageChartCardChartContainer";
import { SUsageChartCardChartDate } from "./styles/SUsageChartCardChartDate";
import { SUsageChartCardChartDateContainer } from "./styles/SUsageChartCardChartDateContainer";
import { SUsageChartCardChartGraphContainer } from "./styles/SUsageChartCardChartGraphContainer";
import { SUsageChartCardChartY } from "./styles/SUsageChartCardChartY";
import { SUsageChartCardYNumber } from "./styles/SUsageChartCardYNumber";
import { averageNumber } from "./UsageChartCard";
import { UsageChartCardChartGraph } from "./UsageChartCardChartGraph";

const BACKGROUND_LINES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface IUsageChartCardChartData {
  date: React.ReactNode;
  percentageUsed: number;
}

interface IUsageChartCardChart {
  totalAvailable: number;
  data: IUsageChartCardChartData[];
}

const getRoundedNumber = (number) => {
  return Math.round(number * 10) / 10;
};

export const UsageChartCardChart: FC<IUsageChartCardChart> = ({ totalAvailable, data }) => {
  const [chartRef, setChartRef] = useState<HTMLDivElement>();

  const referenceLines = useMemo(() => {
    if (totalAvailable <= 10) {
      const lines = new Array(totalAvailable);
      for (let i = 0; i < totalAvailable; i++) {
        lines[i] = i + 1;
      }

      return lines;
    }
    return BACKGROUND_LINES.map((line) => getRoundedNumber((totalAvailable / 10) * line));
  }, [totalAvailable]);

  return (
    <SUsageChartCardChart>
      <SUsageChartCardChartContainer>
        <SUsageChartCardChartBackground chartWidth={(chartRef?.scrollWidth || 0) + 16}>
          <SUsageChartCardChartBackgroundLine />
          {BACKGROUND_LINES.map((line) => (
            <SUsageChartCardChartBackgroundLine key={line} />
          ))}
        </SUsageChartCardChartBackground>
        <SUsageChartCardChartGraphContainer ref={setChartRef}>
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
        <SUsageChartCardYNumber>{0}</SUsageChartCardYNumber>
        {referenceLines.map((line) => (
          <SUsageChartCardYNumber key={line}>{averageNumber(line)}</SUsageChartCardYNumber>
        ))}
      </SUsageChartCardChartY>
    </SUsageChartCardChart>
  );
};
