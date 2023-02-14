import { FC, useMemo } from "react";
import { SUsageChartCard } from "./styles/SUsageChartCard";
import { SUsageChartCardLeft } from "./styles/SUsageChartCardLeft";
import { UsageChartCardContent } from "./UsageChartCardContent";
import { UsageChartCardIndicator } from "./UsageChartCardIndicator";
import { SUsageChartCardChart } from "./styles/SUsageChartCardChart";
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
import { averageNumber } from "./helper";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const UsageChartCard: FC<IUsageChartCard> = ({
  title,
  usage,
  children,
  used,
  max,
  i18n,
  identifier,
  chartData,
  suggestedChartMax,
}) => {
  const usagePercentage = useMemo(() => {
    return (used * 100) / max;
  }, [used, max]);

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
          color: "#F7F9FA",
        },
        suggestedMax: typeof suggestedChartMax === "number" ? suggestedChartMax : max,
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
