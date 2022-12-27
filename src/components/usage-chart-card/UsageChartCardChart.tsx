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

const DATA = [
  { date: "1 Nov", percentageUsed: 50 },
  { date: "2 Nov", percentageUsed: 75 },
  { date: "3 Nov", percentageUsed: 33 },
  { date: "4 Nov", percentageUsed: 100 },
  { date: "5 Nov", percentageUsed: 55 },
  { date: "6 Nov", percentageUsed: 10 },
  { date: "7 Nov", percentageUsed: 66 },
];

const BACKGROUND_LINES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const UsageChartCardChart = () => {
  return (
    <SUsageChartCardChart>
      <SUsageChartCardChartContainer>
        <SUsageChartCardChartBackground>
          {BACKGROUND_LINES.map((line) => (
            <SUsageChartCardChartBackgroundLine key={line} />
          ))}
        </SUsageChartCardChartBackground>
        <SUsageChartCardChartGraphContainer>
          {DATA.map((count) => (
            <UsageChartCardChartGraph key={count.date} percentageUsed={count.percentageUsed} />
          ))}
        </SUsageChartCardChartGraphContainer>
        <SUsageChartCardChartDateContainer>
          {DATA.map((count) => (
            <SUsageChartCardChartDate key={count.date}>{count.date}</SUsageChartCardChartDate>
          ))}
        </SUsageChartCardChartDateContainer>
      </SUsageChartCardChartContainer>
      <SUsageChartCardChartY>
        {BACKGROUND_LINES.map((line) => (
          <SUsageChartCardYNumber key={line}>{line}</SUsageChartCardYNumber>
        ))}
      </SUsageChartCardChartY>
    </SUsageChartCardChart>
  );
};
