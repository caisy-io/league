import { FC, MutableRefObject, useMemo, useRef, useState } from "react";
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

const BACKGROUND_LINES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface IUsageChartCardChartData {
  date: React.ReactNode;
  percentageUsed: number;
}

interface IUsageChartCardChart {
  totalAvailable: number;
  data: IUsageChartCardChartData[];
}

const getCutNumber = (number: number, divider: number) => {
  return Math.floor(Math.floor(number / divider) * divider);
};

const getBreakpointNumber = (total: number, lineNumber: number, divider: number) => {
  return getCutNumber(Math.floor((total / 9) * lineNumber), divider);
};

export const UsageChartCardChart: FC<IUsageChartCardChart> = ({ totalAvailable, data }) => {
  const [chartRef, setChartRef] = useState<HTMLDivElement>();

  const REFERENCE_LINES = useMemo(() => {
    const divider = totalAvailable / 10;
    return BACKGROUND_LINES.map((line) => getBreakpointNumber(totalAvailable, line, divider));
  }, [totalAvailable]);

  return (
    <SUsageChartCardChart>
      <SUsageChartCardChartContainer>
        <SUsageChartCardChartBackground chartWidth={(chartRef?.scrollWidth || 0) + 16}>
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
        {REFERENCE_LINES.map((line) => (
          <SUsageChartCardYNumber key={line}>{line}</SUsageChartCardYNumber>
        ))}
      </SUsageChartCardChartY>
    </SUsageChartCardChart>
  );
};
