import { FC, useMemo } from "react";
import { SUsageChartCard } from "./styles/SUsageChartCard";
import { SUsageChartCardLeft } from "./styles/SUsageChartCardLeft";
import { UsageChartCardContent } from "./UsageChartCardContent";
import { UsageChartCardIndicator } from "./UsageChartCardIndicator";
import { SUsageChartCardChart } from "./styles/SUsageChartCardChart";
import numbro from "numbro";
import { IUsageChartCard } from "./types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions<"bar"> = {
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    y: {
      display: true,
      position: "right",
      ticks: {
        callback: (value) => {
          return averageNumber(value as number);
        },
        padding: 0,
        color: "#829DB4",
        font: {
          family: "Inter",
          size: 11,
          weight: "500",
        },
      },
      grid: {
        borderWidth: 0,
        color: "#F7F9FA",
      },
    },
    x: {
      ticks: {
        color: "#567A98",
        font: {
          family: "Inter",
          size: 11,
          weight: "500",
        },
      },
      grid: {
        display: false,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

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

  const labels = useMemo(() => {
    return chartData.map((label) => label.date);
  }, []);

  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: identifier,
        data: chartData.map((data) => data.used),
        backgroundColor: "#008CFF",
      },
    ],
  };

  return (
    <SUsageChartCard>
      <SUsageChartCardLeft>
        <UsageChartCardContent title={title} usage={usage} max={max} used={used} usagePercentage={usagePercentage}>
          {children}
        </UsageChartCardContent>

        <UsageChartCardIndicator identifier={identifier} used={used} totalAvailable={max} i18n={i18n} />
      </SUsageChartCardLeft>
      <SUsageChartCardChart>
        <Bar data={data} options={options} />
      </SUsageChartCardChart>
    </SUsageChartCard>
  );
};

export const averageNumber = (number: number) => {
  if (number < 10000) return number;
  return numbro(number).format({ average: true, totalLength: 2 });
};
