import { FC, useMemo } from "react";
import { SUsageAmountMonthlyItem } from "./styles/SUsageAmountMonthlyItem";

interface IUsageAmountItem {
  used: number;
  max: number;
  title: React.ReactNode;
  usage: React.ReactNode;
  children?: React.ReactNode;
}

export const UsageAmountMonthlyItem: FC<IUsageAmountItem> = ({ title, usage, children, used, max }) => {
  const usagePercentage = useMemo(() => {
    return (used * 100) / max;
  }, [used, max]);

  return <SUsageAmountMonthlyItem>Test</SUsageAmountMonthlyItem>;
};
